import { SongTypes } from '@shared/types/song.types';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';

interface Props {
  title: string;
  data: SongTypes[];
}

export const Slider: React.FC<Props> = ({ title, data }) => {
  return (
    <div>
      <Swiper
        spaceBetween={10}
        slidesPerView="auto"
        pagination={{ clickable: true }}
        className="my-8"
      >
        {data.map((song) => (
          <SwiperSlide>
            <div className="w-34  m-auto">
              <img
                loading="lazy"
                src={`https://i.ytimg.com/vi/${song.songId}/mqdefault.jpg`}
                alt="cover"
                className="rounded-xl w-32 h-32 object-cover"
              />
              <p className="font-light text-sm">{song.originalTitle}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
