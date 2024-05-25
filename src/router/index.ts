import React, { lazy } from 'react';
import { BrowserRouterProps } from 'react-router-dom';
import dashboard from './modules/dashboard';
import list from './modules/list';
import form from './modules/form';
import detail from './modules/detail';
import result from './modules/result';
import user from './modules/user';
import login from './modules/login';
import otherRoutes from './modules/others';
import videoManage from './modules/videoManage';
import upload from './modules/upload';
import userManage from './modules/userManage';
import report from './modules/report';

export interface IRouter {
  path: string;
  redirect?: string;
  Component?: React.FC<BrowserRouterProps> | (() => any);
  /**
   * 当前路由是否全屏显示
   */
  isFullPage?: boolean;
  /**
   * meta未赋值 路由不显示到菜单中
   */
  meta?: {
    title?: string;
    Icon?: React.FC;
    /**
     * 侧边栏隐藏该路由
     */
    hidden?: boolean;
    /**
     * 单层路由
     */
    single?: boolean;
  };
  children?: IRouter[];
}

const routes: IRouter[] = [
  {
    path: '/login',
    Component: lazy(() => import('pages/Login/Login')),
    isFullPage: true,
    meta: {
      hidden: true,
    },
  },
  {
    path: '/',
    redirect: '/index',
  },
];

const allRoutes = [
  ...routes,
  ...user,
  ...videoManage,
  ...upload,
  ...userManage,
  ...report,
  // ...dashboard,
  // ...list,
  // ...form,
  // ...detail,
  // ...result,
  ...login,
  // ...otherRoutes,
];

export default allRoutes;
