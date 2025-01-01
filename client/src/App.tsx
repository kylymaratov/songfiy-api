import { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { UseRoutes } from '@shared/hooks/UseRoutes';
import { isMobile, isTablet } from 'react-device-detect';

function App() {
  const routes = UseRoutes({
    prefix: isMobile || isTablet ? 'mobile' : 'desktop',
  });

  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  useEffect(() => {
    const handleContextMenu = (e: Event) => {
      e.preventDefault();
    };

    document.addEventListener('contextmenu', handleContextMenu);

    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
    };
  }, []);

  return (
    <>
      <BrowserRouter>{routes}</BrowserRouter>
    </>
  );
}

export default App;
