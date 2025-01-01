import React, { useMemo } from 'react';
import {
  IconSettings,
  IconHome,
  IconBrandSpotify,
  IconBrandSpotifyFilled,
  IconCompass,
  IconHomeFilled,
  IconCompassFilled,
  IconSettingsFilled,
} from '@tabler/icons-react';
import { useLocation, useNavigate } from 'react-router-dom';

export const Navigation: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const navList = useMemo(
    () => [
      {
        title: 'Home',
        icon: IconHome,
        to: '/mobile/home',
        pickedIcon: IconHomeFilled,
      },
      {
        title: 'Search',
        icon: IconCompass,
        to: '/mobile/search',
        pickedIcon: IconCompassFilled,
      },
      {
        title: 'Stream',
        icon: IconBrandSpotify,
        to: '/mobile/stream',
        pickedIcon: IconBrandSpotifyFilled,
      },
      {
        title: 'Settings',
        icon: IconSettings,
        to: '/mobile/settings',
        pickedIcon: IconSettingsFilled,
      },
    ],
    [],
  );

  return (
    <div className="fixed w-full bottom-0 rounded-xl h-[70px] bg-transparent cursor-pointer">
      <div className="flex items-center h-full justify-center">
        {navList.map((el, key) => (
          <div
            key={key}
            onClick={() => navigate(el.to)}
            className="dark:text-slate-200 w-full text-center py-2"
          >
            {location.pathname === el.to ? (
              <el.pickedIcon className="mx-auto" size={26} stroke={2} />
            ) : (
              <el.icon className="mx-auto" size={26} stroke={2} />
            )}
            <span className="text-[11px] text-nowrap font-normal tracking-wider">
              {el.title}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
