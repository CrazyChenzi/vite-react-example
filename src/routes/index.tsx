import { RouteObject } from 'react-router-dom';
import MainLayout from '../layouts';
import Dashboard from '../pages/Dashboard';
import Users from '../pages/Users';

export const routes = [
  {
    path: '/',
    label: '仪表盘',
    element: <Dashboard />
  },
  {
    path: '/users',
    label: '用户管理',
    element: <Users />
  }
];

export const routeConfig: RouteObject[] = [
  {
    path: '/',
    element: <MainLayout />,
    children: routes
  }
];
