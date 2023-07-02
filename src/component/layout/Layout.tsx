import {
  CaretDownFilled,
  DoubleRightOutlined,
  GithubFilled,
  InfoCircleFilled,
  LogoutOutlined,
  PlusCircleFilled,
  QuestionCircleFilled,
  SearchOutlined,
} from '@ant-design/icons';
import type { ProSettings } from '@ant-design/pro-components';
import {
  PageContainer,
  ProCard,
  ProConfigProvider,
  ProLayout,
  SettingDrawer,
} from '@ant-design/pro-components';
import { css } from '@emotion/css';

import { Button, Divider, Input, Dropdown, Popover, theme } from 'antd';
import React, { Children, useState } from 'react';
import { defaultProps } from './DefaultProps';
import styled from '@emotion/styled/types/base';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Treetest from '../../layout-project/layout/Treetest';
import MyTable from '../../layout-project/layout/MyTable';
import ClickRight from '../../layout-project/layout/ClickRight';
import "./Layout.css"
import MoreTable from '../../layout-project/layout/table/MoreTable';
import TabletEST from '../../layout-project/layout/tabletest/TabletEST';
import RightClickTree from '../../layout-project/layout/rightClickTree/RightClickTree';
import Right from '../../layout-project/layout/rightClickTree/Right';
const Item: React.FC<{ children: React.ReactNode }> = (props) => {
  const { token } = theme.useToken();
  console.log("props.children Item",props.children)
  return (
    <div
      className={css`
          color: ${token.colorTextSecondary};
          font-size: 14px;
          cursor: pointer;
          line-height: 22px;
          margin-bottom: 8px;
          &:hover {
            color: ${token.colorPrimary};
          }
        `}
      style={{
        width: '33.33%',
      }}
    >
      {props.children}
      <DoubleRightOutlined
        style={{
          marginInlineStart: 4,
        }}
      />
    </div>
  );
};

const List: React.FC<{ title: string; style?: React.CSSProperties }> = (props) => {
  const { token } = theme.useToken();

  return (
    <div
      style={{
        width: '100%',
        ...props.style,
      }}
    >
      <div
        style={{
          fontSize: 16,
          color: token.colorTextHeading,
          lineHeight: '24px',
          fontWeight: 500,
          marginBlockEnd: 16,
        }}
      >
        {props.title}
      </div>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
        }}
      >
        {new Array(6).fill(1).map((_, index) => {
          return <Item key={index}>array list index-{index}</Item>;
        })}
      </div>
    </div>
  );
};

const MenuCard = () => {
  const { token } = theme.useToken();
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Divider
        style={{
          height: '1.5em',
        }}
        type="vertical"
      />
      <Popover
        placement="bottom"
        overlayStyle={{
          width: 'calc(100vw - 24px)',
          padding: '24px',
          paddingTop: 8,
          height: '307px',
          borderRadius: '0 0 6px 6px',
        }}
        content={
          <div style={{ display: 'flex', padding: '32px 40px' }}>
            <div style={{ flex: 1 }}>
              <List title="list1" />
              <List
                title="list2"
                style={{
                  marginBlockStart: 32,
                }}
              />
            </div>

            <div
              style={{
                width: '308px',
                borderInlineStart: '1px solid ' + token.colorBorder,
                paddingInlineStart: 16,
              }}
            >
              <div
                className={css`
                    font-size: 14px;
                    color: ${token.colorText};
                    line-height: 22px;
                  `}
              >
                list content 2
              </div>
              {new Array(3).fill(1).map((name, index) => {
                return (
                  <div
                    key={index}
                    className={css`
                        border-radius: 4px;
                        padding: 16px;
                        margin-top: 4px;
                        display: flex;
                        cursor: pointer;
                        &:hover {
                          background-color: ${token.colorBgTextHover};
                        }
                      `}
                  >
                    <img src="https://gw.alipayobjects.com/zos/antfincdn/6FTGmLLmN/bianzu%25252013.svg" alt='' />
                    <div
                      style={{
                        marginInlineStart: 14,
                      }}
                    >
                      <div
                        className={css`
                            font-size: 14px;
                            color: ${token.colorText};
                            line-height: 22px;
                          `}
                      >
                        Ant Design logo
                      </div>
                      <div
                        className={css`
                            font-size: 12px;
                            color: ${token.colorTextSecondary};
                            line-height: 20px;
                          `}
                      >
                        uiHaha
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        }
      >
        <div
          style={{
            color: token.colorTextHeading,
            fontWeight: 500,
            cursor: 'pointer',
            display: 'flex',
            gap: 4,
            paddingInlineStart: 8,
            paddingInlineEnd: 12,
            alignItems: 'center',
          }}
          className={css`
              &:hover {
                background-color: ${token.colorBgTextHover};
              }
            `}
        >
          <span> Board</span>
          <CaretDownFilled />
        </div>
      </Popover>
    </div>
  );
};

const SearchInput = () => {
  const { token } = theme.useToken();
  return (
    <div
      key="SearchOutlined"
      aria-hidden
      style={{
        display: 'flex',
        alignItems: 'center',
        marginInlineEnd: 24,
      }}
      onMouseDown={(e) => {
        e.stopPropagation();
        e.preventDefault();
      }}
    >
      <Input
        style={{
          borderRadius: 4,
          marginInlineEnd: 12,
          backgroundColor: token.colorBgTextHover,
        }}
        prefix={
          <SearchOutlined
            style={{
              color: token.colorTextLightSolid,
            }}
          />
        }
        placeholder="search a"
        bordered={false}
      />
      <PlusCircleFilled
        style={{
          color: token.colorPrimary,
          fontSize: 24,
        }}
      />
    </div>
  );
};


const Layout: React.FC<{prolayoutProps?: any}> = (props) => {

  const { prolayoutProps } = props.prolayoutProps;

  const [settings, setSetting] = useState<Partial<ProSettings> | undefined>({
    // fixSiderbar: true,
    fixSiderbar: false,
    layout: 'mix',
    // splitMenus: true,
    splitMenus: false,

  });
  const Navigate = useNavigate();

  const [pathname, setPathname] = useState('/list/sub-page/sub-sub-page1');
  const [num, setNum] = useState(40);
  const getRoutes = (Routes:any)=> {
    
    let array: Array <any> =[];
    Routes.forEach((item: any, key: any) =>{
      array.push(<Route key={key} path={item.path}  element={item.component}/>)
      if (item?.Routes) {
        array = [...array, getRoutes(item.Routes)]
      }
    })
    console.log("array",array);
    return array;
  }
  const [collapsedd, setCollapsed] = useState<boolean>(true);

  const handleMouseEnter = () => {
    setCollapsed(false);
  }

  const handleMouseLeave = () => {
    setCollapsed(true);
  }
  return (
    <div 
      id="test-pro-layout"
      style={{
        height: '100vh',
      }}
    >
      <style>{`
          body {
            font-family: 'Arial', sans-serif;
            font-size:50px;
            /* thay đổi font chữ tại đây */
          }
        `}</style>
      <ProConfigProvider hashed={false}>


        <ProLayout
        
          // loading={true}
          // menuDataRender={}
          // locale='en-US'// language
          // defaultCollapsed={true}
          // colorTextAppListIconHover={(collapsed:any)=>(collapsed? "blue": "red")}
          // colorBgHeader="blue"

          breakpoint={false}
          // collapsed={false}

          prefixCls="my-prefix"
          bgLayoutImgList={[
            {
              src: 'https://img.alicdn.com/imgextra/i2/O1CN01O4etvp1DvpFLKfuWq_!!6000000000279-2-tps-609-606.png',
              left: 85,
              bottom: 100,
              height: '303px',
            },
            {
              src: 'https://img.alicdn.com/imgextra/i2/O1CN01O4etvp1DvpFLKfuWq_!!6000000000279-2-tps-609-606.png',
              bottom: -68,
              right: -45,
              height: '303px',
            },
            {
              src: 'https://img.alicdn.com/imgextra/i3/O1CN018NxReL1shX85Yz6Cx_!!6000000005798-2-tps-884-496.png',
              bottom: 0,
              left: 0,
              width: '331px',
            },
          ]}

          {...defaultProps}
          // {...prolayoutProps}
          location={{
            pathname,
          }}
          
         

          siderMenuType="sub"
          // siderMenuType="mix"
          menu={{
            collapsedShowGroupTitle: true,
          }}
          avatarProps={{
            src: 'https://gw.alipayobjects.com/zos/antfincdn/efFD%24IOql2/weixintupian_20170331104822.jpg',
            size: 'small',
            title: 'avatar',
            render: (props, dom) => {
              return (
                <Dropdown
                  menu={{
                    items: [
                      {
                        key: 'logout',
                        icon: <LogoutOutlined />,
                        label: 'logout',
                      },
                    ],
                  }}
                >
                  {dom}
                </Dropdown>
              );
            },
          }}
          actionsRender={(props) => {

            if (props.isMobile) return [];

            return [
              // props.layout !== 'side' && document.body.clientWidth > 1400 ? (
                <SearchInput />,
              // ) : undefined,
              <InfoCircleFilled key="InfoCircleFilled" />,
              <QuestionCircleFilled key="QuestionCircleFilled" />,
              <GithubFilled key="GithubFilled" />,
            ];
          }}
          headerTitleRender={(logo, title, _) => {
            const defaultDom = (
              <a href='http://'>
                {logo}
                {title}
              </a>
            );
            if (document.body.clientWidth < 1200) {
              console.log("document.body.clientWidth: ",document.body.clientWidth)
              return defaultDom;
            }
            if (_.isMobile) return defaultDom;
            return (
              <>
                {defaultDom}
                <MenuCard />
              </>
            );
          }}
          menuFooterRender={(props) => {
            if (props?.collapsed) return undefined;
            return (
              <div
                style={{
                  textAlign: 'center',
                  paddingBlockStart: 12,
                }}
              >
                <div>© 2021 Made with love</div>
                <div>by Tiep </div>
              </div>
            );
          }}
          onMenuHeaderClick={(e) => console.log(e)}
          menuItemRender={(item, dom) => (
            <div
              onClick={() => {
                setPathname(item.path || '/welcome');
              }}
            >
              {dom}
            </div>
          )}
          {...settings}
          // 
        >
          <PageContainer
            token={{
              paddingInlinePageContainerContent: num,
            }}
            extra={[
              <Button key="3">nut an 1</Button>,
              <Button key="2">nut an 2</Button>,
              <Button
                key="1"
                type="primary"
                onClick={() => {
                  setNum(num > 0 ? 0 : 40);
                }}
              >
                nut an 3
              </Button>,
            ]}
            subTitle="subtitle"
            footer={[
              <Button key="3">but ton footer</Button>,
              <Button key="2" type="primary">
                botun footer
              </Button>,
            ]}
          >
            <ProCard
            className='printable-content'
              style={{
                height: '200vh',
                minHeight: 800,
              }}
              bodyStyle={{ padding: '8px' }}
            >
              {/* <Treetest/> */}
              {/* <ClickRight/> */}
              {/* <MyTable/> */}
              {/* <TabletEST/> */}
              {/* <MoreTable/> */}
              <RightClickTree />
              <Right/>
            {/* <Routes> {getRoutes(prolayoutProps.route.routes)}</Routes> */}
              <div />
            </ProCard>
            {/* <Routes> {getRoutes(prolayoutProps.route.routes)}</Routes> */}
          </PageContainer>
              
          {/* <SettingDrawer
            pathname={pathname}
            enableDarkTheme
            getContainer={() => document.getElementById('test-pro-layout')}
            settings={settings}
            onSettingChange={(changeSetting) => {
              setSetting(changeSetting);
            }}
            disableUrlParams={false}
          /> */}
        </ProLayout>
      </ProConfigProvider>
    </div>
  );
};

export default Layout;