import React from 'react';
import { Outlet } from 'react-router-dom';

export const Container: React.FC = () => {
  return (
    <div className="py-4 px-2 h-full pb-[70px] w-full overflow-x-hidden overflow-y-scroll">
      <Outlet />
    </div>
  );
};
