import React from 'react';
import { Route } from 'react-router-dom';

// 路由配置类型
export type RouteConfig = {
  name: string;
  path: string;
  component: React.ComponentType<any>;
}
// 渲染子路由组件
export const RenderRoute: React.FC<RouteConfig> = (routeConfig) => (
  <Route
    path={routeConfig.path}
    render={(props) => (
      <routeConfig.component {...props} />
    )}
  />
);

// 路由配置数组
export { routeArrays } from './routerConfig';
