import DesktopApp from '@desktop/index';
import MobileApp from '@mobile/index';

interface Props {
  prefix: 'mobile' | 'desktop';
}

export const UseRoutes = ({ prefix }: Props) => {
  return prefix === 'mobile' ? <MobileApp /> : <DesktopApp />;
};
