import { useEffect, useState } from "react";
import type { Community } from "../data/communities";

// Carousel
import Swiper from "swiper";
import "swiper/css";

// Icons
import ArrowDownIcon from "~icons/dice/arrow-down";

export default function CommunitiesCarousel({ data }: {
  data: Community[]
}) {
  const [swiper, setSwiper] = useState<Swiper | null>(null);

  useEffect(() => {
    if (!swiper) return;
    swiper.update();
  }, [data]);

  function initializeSwiper(ref: HTMLDivElement) {
    setSwiper(new Swiper(ref, {
      spaceBetween: 20,
      slidesPerView: 'auto',
      centeredSlides: true,
      initialSlide: 1,
    }));
  }

  return (
    <div className="relative">
      <button className="mx-4 md:mx-0 md:absolute top-1/2 left-8 z-[2] text-2xl p-3 text-black rounded-full bg-gray-200 shadow opacity-75 hover:opacity-100" onClick={() => swiper?.slidePrev()}>
        <ArrowDownIcon className="text-2xl rotate-90" />
      </button>

      <button className="md:absolute top-1/2 right-8 z-[2] text-2xl p-3 text-black rounded-full bg-gray-200 shadow opacity-75 hover:opacity-100" onClick={() => swiper?.slideNext()}>
        <ArrowDownIcon className="-rotate-90" />
      </button>

      <div ref={ref => {
        if (!ref || swiper) return;
        initializeSwiper(ref);
      }} className="swiper relative px-10 md:px-0">
        <div className="swiper-wrapper pt-20 pb-10 items-stretch">
          {data.map((c) => (
            <div key={`community_${c.name}`} className="swiper-slide sm:max-w-[calc(100%/2)] md:max-w-[calc(100%/3)] xl:max-w-[calc(100%/6)] flex flex-col border shadow-lg p-8 items-center text-center rounded-md">
              <div className="mx-auto bg-white p-2 w-32 h-32 -mt-20 shadow-md rounded-full border mb-4 flex items-center justify-center">
                <img src={c.logo} alt={c.name} className="h-auto w-24" />
              </div>

              <h3 className="text-2xl font-black mb-4">{c.name}</h3>
              <p className="text-sm mb-10">{c.description}</p>
              {c.url && <a href={c.url} className="w-full button py-4 text-xl mt-auto">Visit Website</a>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
