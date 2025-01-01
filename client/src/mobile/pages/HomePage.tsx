import { useGetTrendingSongsQuery } from '@app/apis/song.api';
import { Slider } from '@mobile/components/Slider';
import React from 'react';

export const DiscoverPage: React.FC = () => {
  const { data } = useGetTrendingSongsQuery('');

  console.log(data);

  return (
    <div className="h-full">
      <h2 className="font-bold uppercase text-md dark:text-white text-black tracking-wider">
        Browse
      </h2>
      <div className="my-5">
        {data && <Slider title={data?.title} data={data.songs} />}
      </div>
    </div>
  );
};
