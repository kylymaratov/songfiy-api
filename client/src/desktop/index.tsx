import { Navigate, Route, Routes } from 'react-router-dom';

function DesktopApp() {
  return (
    <div>
      <Routes>
        <Route path="/desktop/discover" element={<div>Discover</div>} />
        <Route path="*" element={<Navigate to="/desktop/discover" />} />
      </Routes>
      dessktop
    </div>
  );
}

export default DesktopApp;
