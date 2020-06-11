import { HomePage } from './Main/HomePage';

export const PATHS = {

  Main: {
    HomePage: '/',
  },
};

export const routeConfig: IRoute[] = [


  // 店铺首页
  {
    key: 'PATHS.Main',
    children: [
      {
        key: 'PATHS.Main.HomePage',
        path: PATHS.Main.HomePage,
        component: HomePage,
        isExact: true,
      },
    ],
  },
];
