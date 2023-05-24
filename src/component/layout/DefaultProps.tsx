import { ChromeFilled, CrownFilled, CrownTwoTone, HomeTwoTone, SmileFilled, TabletFilled } from '@ant-design/icons';
import Welcome from '../../layout-project/welcom/Welcome';
import Treetest from '../../layout-project/layout/Treetest';

export const defaultProps: any = {
  route: {
    path: '/app',
    routes: [
      {
        path: '/welcome',
        name: 'welcom',
        icon: <HomeTwoTone  style={{ fontSize:20, paddingRight:15}} />,
        component: <Treetest/>,
      },
      {
        path: '/admin',
        name: 'admin',
        icon: <CrownTwoTone style={{ fontSize:20, paddingRight:15}} />,
        access: 'canAdmin',
        component: <Treetest/>,
        routes: [
          {
            path: '/admin/sub-page1',
            name: 'sub-page1',
            icon: 'https://gw.alipayobjects.com/zos/antfincdn/upvrAjAPQX/Logo_Tech%252520UI.svg',
            component: <Treetest/>,
          },
          {
            path: '/admin/sub-page2',
            name: 'sub-page2',
            icon: <CrownFilled />,
            component: './Welcome',
          },
          {
            path: '/admin/sub-page3',
            name: 'sub-page3',
            icon: <CrownFilled />,
            component: './Welcome',
          },
        ],
      },
      {
        name: 'list',
        icon: <TabletFilled />,
        path: '/list',
        component: './ListTableList',
        routes: [
          {
            path: '/list/sub-page',
            name: 'sub-page list',
            icon: <CrownFilled />,
            routes: [
              {
                path: 'sub-sub-page1',
                name: 'sub-sub-page1',
                icon: <CrownFilled />,
                component: './Welcome',
              },
              {
                path: 'sub-sub-page2',
                name: 'sub-sub-page2',
                icon: <CrownFilled />,
                component: './Welcome',
              },
              {
                path: 'sub-sub-page3',
                name: 'sub-sub-page3',
                icon: <CrownFilled />,
                component: './Welcome',
              },
            ],
          },
          {
            path: '/list/sub-page2',
            name: 'list/sub-page2',
            icon: <CrownFilled />,
            component: './Welcome',
          },
          {
            path: '/list/sub-page3',
            name: 'list/sub-page3',
            icon: <CrownFilled />,
            component: './Welcome',
          },
        ],
      },
      {
        path: 'https://ant.design',
        name: 'Ant Design ',
        icon: <ChromeFilled />,
      },
    ],
  },
  location: {
    pathname: '/',
  },
  appList: [
    {
      icon: 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg',
      title: 'Ant Design applist',
      desc: 'desc where applist',
      url: 'https://ant.design',
    },
    {
      icon: 'https://gw.alipayobjects.com/zos/antfincdn/FLrTNDvlna/antv.png',
      title: 'AntV',
      desc: 'desc where antv',
      url: 'https://antv.vision/',
      target: '_blank',
    },
    {
      icon: 'https://gw.alipayobjects.com/zos/antfincdn/upvrAjAPQX/Logo_Tech%252520UI.svg',
      title: 'Pro Components',
      desc: 'desc procomponent',
      url: 'https://procomponents.ant.design/',
    },
    {
      icon: 'https://img.alicdn.com/tfs/TB1zomHwxv1gK0jSZFFXXb0sXXa-200-200.png',
      title: 'umi',
      desc: 'umi desc',
      url: 'https://umijs.org/zh-CN/docs',
    },

    {
      icon: 'https://gw.alipayobjects.com/zos/bmw-prod/8a74c1d3-16f3-4719-be63-15e467a68a24/km0cv8vn_w500_h500.png',
      title: 'qiankun',
      desc: 'qiankun desc',
      url: 'https://qiankun.umijs.org/',
    },
    {
      icon: 'https://gw.alipayobjects.com/zos/rmsportal/XuVpGqBFxXplzvLjJBZB.svg',
      title: 'lala',
      desc: 'lala content',
      url: 'https://www.yuque.com/',
    },
    {
      icon: 'https://gw.alipayobjects.com/zos/rmsportal/LFooOLwmxGLsltmUjTAP.svg',
      title: 'Kitchen ',
      desc: 'Sketch ',
      url: 'https://kitchen.alipay.com/',
    },
    {
      icon: 'https://gw.alipayobjects.com/zos/bmw-prod/d3e3eb39-1cd7-4aa5-827c-877deced6b7e/lalxt4g3_w256_h256.png',
      title: 'dumi',
      desc: 'no dumi',
      url: 'https://d.umijs.org/zh-CN',
    },
  ],
};
