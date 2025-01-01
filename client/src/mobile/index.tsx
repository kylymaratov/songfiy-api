import { Navigation } from '@mobile/components/Navigation';
import { Navigate, Route, Routes } from 'react-router-dom';
import { DiscoverPage } from './pages/HomePage';
import { SearchPage } from './pages/SearchPage';
import { SettingsPage } from './pages/SettingsPage';
import { Container } from './container';

function MobileApp() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Container />}>
          <Route index path="/mobile/home" element={<DiscoverPage />} />
          <Route path="/mobile/search" element={<SearchPage />} />
          <Route path="/mobile/stream" element={<SearchPage />} />
          <Route path="/mobile/settings" element={<SettingsPage />} />
          <Route path="*" element={<Navigate to="/mobile/discover" />} />
        </Route>
      </Routes>
      <Navigation />
    </>
  );
}

export default MobileApp;
