import { useEffect, useState } from "react";
import { Engagement } from "../data/engagements";

// Engagement Carousel
import Swiper from "swiper";
import { Pagination } from "swiper/modules";
import "swiper/css/pagination";
import "swiper/css";

// Engagement Icons
import LocationIcon from "~icons/dice/location";
import CalendarIcon from "~icons/dice/calendar";
import ArrowDownIcon from "~icons/dice/arrow-down";

export default function EngagementsCarousel({ data }: {
  data: Engagement[]
}) {
  const [swiper, setSwiper] = useState<Swiper | null>(null);

  useEffect(() => {
    if (!swiper) return;
    swiper.update();
  }, [data]);

  function initializeSwiper(ref: HTMLDivElement) {
    setSwiper(new Swiper(ref, {
      modules: [Pagination],
      // loop: true,
      spaceBetween: 10,
      slidesPerView: 'auto',
      centeredSlides: true,
      // grabCursor: true,
      pagination: {
        el: '.swiper-pagination',
      },
    }));
  }

  return (
    <div className="relative">
      <div className="relative">
        <button className="absolute top-1/2 left-8 z-[2] text-2xl p-3 text-black rounded-full bg-gray-200 shadow opacity-75 hover:opacity-100" onClick={() => swiper?.slidePrev()}>
          <ArrowDownIcon className="text-2xl rotate-90" />
        </button>

        <button className="absolute top-1/2 right-8 z-[2] text-2xl p-3 text-black rounded-full bg-gray-200 shadow opacity-75 hover:opacity-100" onClick={() => swiper?.slideNext()}>
          <ArrowDownIcon className="-rotate-90" />
        </button>

        <div ref={ref => {
          if (!ref || swiper) return;
          initializeSwiper(ref);
        }} className="swiper relative">
          <div className="swiper-wrapper">
            {data.map((e) => (
              <div key={`e_${e.title}`} className="swiper-slide max-w-7xl">
                <div className="m-4 bg-white border shadow-lg flex min-h-[40rem] h-full">
                  <div style={{ backgroundImage: `url(${e.image})` }} className="w-1/2 bg-center bg-cover bg-no-repeat"></div>
                  <div className="w-1/2 p-12 flex flex-col">
                    <h3 className="text-5xl font-black mb-4">{e.title}</h3>
                    <div className="flex space-x-4 mb-4">
                      <div className="flex items-center space-x-2">
                        <CalendarIcon className="text-blue-light" />
                        <p className="font-medium">{e.date}</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <LocationIcon className="text-red-light" />
                        <p className="font-medium">{e.location}</p>
                      </div>
                    </div>
                    <p className="text-lg max-h-48 text-ellipsis overflow-hidden whitespace-normal">{e.description}</p>
                    {e.collaborators && (<div className="pt-8 mt-auto">
                      <p className="font-medium">{e.collaboratorLabelText ?? 'In collaboration with:'}</p>
                      <div className="flex flex-wrap items-center -mx-4">
                        {e.collaborators.map(c => (
                          <div className="p-4 w-1/2" key={`e_${e.title}_c_${c.name}`}>
                            <img src={c.logo} alt={c.name} />
                          </div>
                        ))}
                      </div>
                    </div>)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="swiper-pagination bottom-0 w-full space-x-2"></div>
      <div className="block h-24 relative"></div>
    </div>
  );
}