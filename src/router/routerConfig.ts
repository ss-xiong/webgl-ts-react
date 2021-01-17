import { Chapter01HelloPoint } from '@page/Chapter01';
import { Chapter01HelloPoint2 } from '@page/Chapter01';

// 路由配置类型
import { RouteConfig } from './index';

// 路由配置数组
export const routeArrays:RouteConfig[] = [
  {
    name: '01-HelloPoint',
    path: '/chapter01/helloPoint',
    component: Chapter01HelloPoint,
  },
  {
    name: '01-HelloPoint2',
    path: '/chapter01/helloPoint2',
    component: Chapter01HelloPoint2,
  },
];
