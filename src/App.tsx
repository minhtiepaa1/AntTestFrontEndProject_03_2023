import React from 'react';
import './App.css';
import Layout from './component/layout/Layout';
import { ChromeFilled, CrownFilled, SmileFilled, TabletFilled } from '@ant-design/icons';
import Welcome from './layout-project/welcom/Welcome';
import Treetest from './layout-project/layout/Treetest';
import ClickRight from './layout-project/layout/ClickRight';

const App:any =() =>{
  return (
    <div>
      <Layout
      prolayoutProps={{
        route: {
          path: '/app',
          routes: [
            {
              key:1,
              path: '/welcome',
              name: 'welcom',
              icon: <SmileFilled />,
              component: <ClickRight/>,
            },
            {
              path: '/admin',
              name: 'admin',
              icon: <CrownFilled />,
              access: 'canAdmin',
              component: './Admin',
              routes: [
                {
                  path: '/admin-page1',
                  name: 'sub-page1',
                  icon: 'https://gw.alipayobjects.com/zos/antfincdn/upvrAjAPQX/Logo_Tech%252520UI.svg',
                  component: <Treetest/>,
                },
                // {
                //   path: '/admin/sub-page2',
                //   name: 'sub-page2',
                //   icon: <CrownFilled />,
                //   component: './Welcome',
                // },
                // {
                //   path: '/admin/sub-page3',
                //   name: 'sub-page3',
                //   icon: <CrownFilled />,
                //   component: <Welcome/>,
                // },
              ],
            },
            // {
            //   name: 'list',
            //   icon: <TabletFilled />,
            //   path: '/list',
            //   component: './ListTableList',
            //   routes: [
            //     {
            //       path: '/list/sub-page',
            //       name: 'sub-page list',
            //       icon: <CrownFilled />,
            //       routes: [
            //         {
            //           path: 'sub-sub-page1',
            //           name: 'sub-sub-page1',
            //           icon: <CrownFilled />,
            //           component: './Welcome',
            //         },
            //         {
            //           path: 'sub-sub-page2',
            //           name: 'sub-sub-page2',
            //           icon: <CrownFilled />,
            //           component: './Welcome',
            //         },
            //         {
            //           path: 'sub-sub-page3',
            //           name: 'sub-sub-page3',
            //           icon: <CrownFilled />,
            //           component: './Welcome',
            //         },
            //       ],
            //     },
            //     {
            //       path: '/list/sub-page2',
            //       name: 'list/sub-page2',
            //       icon: <CrownFilled />,
            //       component: './Welcome',
            //     },
            //     {
            //       path: '/list/sub-page3',
            //       name: 'list/sub-page3',
            //       icon: <CrownFilled />,
            //       component: './Welcome',
            //     },
            //   ],
            // },
            // {
            //   path: 'https://ant.design',
            //   name: 'Ant Design ',
            //   icon: <ChromeFilled />,
            // },
          ],
        },
      }}
      />
    </div>
  );
}

export default App;
