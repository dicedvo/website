import { useEffect, useState } from "react";

// Engagement Carousel
import Swiper from "swiper";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css/pagination";
import "swiper/css";

// Engagement Icons
import LocationIcon from "~icons/dice/location";
import CalendarIcon from "~icons/dice/calendar";
import ArrowDownIcon from "~icons/dice/arrow-down";
import type { CollectionEntry } from "astro:content";

type FetchPartnerFn = (id: string) => Promise<CollectionEntry<'partners'>>;

function EngagementSlide({ data, fetchPartnerFn }: {
  data: CollectionEntry<'engagements'>['data']
  fetchPartnerFn: FetchPartnerFn
}) {
  const [collaborators, setCollaborators] = useState<CollectionEntry<'partners'>[]>([]);

  useEffect(() => {
    if (!data.collaborators) return;
    Promise.all(data.collaborators.map(fetchPartnerFn))
      .then(setCollaborators);
  }, []);

  return (
    <div className="swiper-slide max-w-7xl">
      <div className="m-4 bg-white border shadow-lg flex flex-col md:flex-row min-h-[40rem] h-full">
        <div style={{ backgroundImage: `url(${data.image.src})` }} className="md:w-1/2 h-96 md:h-auto bg-center bg-cover bg-no-repeat"></div>
        <div className="md:w-1/2 p-8 md:p-12 flex flex-col items-center md:items-start text-center md:text-left">
          <h3 className="text-3xl md:text-5xl font-black mb-4">{data.title}</h3>
          <div className="flex flex-col items-center md:items-start md:flex-row space-y-2 md:space-y-0 md:space-x-4 mb-4 text-sm md:text-md">
            <div className="flex items-center space-x-2">
              <CalendarIcon className="text-blue-light-500" />
              <p className="font-medium">{data.date.toDateString()}</p>
            </div>
            <div className="flex items-center space-x-2">
              <LocationIcon className="text-red-light-500" />
              <p className="font-medium">{data.location}</p>
            </div>
          </div>
          
          <p className="md:text-lg max-h-48">{data.description}</p>
          {collaborators.length !== 0 && (
            <div className="pt-8 mt-auto">
              <p className="font-medium">{data.collaboratorLabelText ?? 'In collaboration with:'}</p>
              <div className="flex flex-wrap justify-center md:justify-start items-center -mx-2">
                {collaborators.map(({ data: c }) => (
                  <div className="p-4 md:p-2 w-auto" key={`e_${data.title}_c_${c.name}`}>
                    <img src={c.logo.src} alt={c.name} />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function EngagementsCarousel({ data, partners }: {
  data: CollectionEntry<'engagements'>[]
  partners: CollectionEntry<'partners'>[]
}) {
  const [swiper, setSwiper] = useState<Swiper | null>(null);

  useEffect(() => {
    if (!swiper) return;
    swiper.update();
  }, [data]);

  function initializeSwiper(ref: HTMLDivElement) {
    setSwiper(new Swiper(ref, {
      modules: [Autoplay, Pagination],
      // loop: true,
      spaceBetween: 10,
      slidesPerView: 'auto',
      centeredSlides: true,
      autoplay: {
        delay: 2000,
      },
      // grabCursor: true,
      pagination: {
        el: '.swiper-pagination',
      },
    }));
  }

  return (
    <div className="relative">
      <div className="relative">
        <button className="ml-4 mr-4 md:m-0 md:absolute top-1/2 left-8 z-[2] text-2xl p-3 text-black rounded-full bg-gray-200 shadow opacity-75 hover:opacity-100" onClick={() => swiper?.slidePrev()}>
          <ArrowDownIcon className="text-2xl rotate-90" />
        </button>

        <button className="md:absolute top-1/2 right-8 z-[2] text-2xl p-3 text-black rounded-full bg-gray-200 shadow opacity-75 hover:opacity-100" onClick={() => swiper?.slideNext()}>
          <ArrowDownIcon className="-rotate-90" />
        </button>

        <div ref={ref => {
          if (!ref || swiper) return;
          initializeSwiper(ref);
        }} className="swiper relative">
          <div className="swiper-wrapper">
            {data.map((e) => (
              <EngagementSlide 
                key={`e_${e.id}`} 
                data={e.data} 
                fetchPartnerFn={async (id) => {
                  const p = partners.find(p => p.id === id + '/info');
                  if (!p) throw new Error(`Partner ${id} not found`);
                  return p;
                }} />
            ))}
          </div>
        </div>
      </div>

      <div className="swiper-pagination bottom-0 w-full space-x-2"></div>
      <div className="block h-12 md:h-24 relative"></div>
    </div>
  );
}