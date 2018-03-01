import React, { Component } from 'react';
import { Layout, Menu, Dropdown, Badge, Avatar, Icon, Breadcrumb } from 'antd';
import { Link } from 'dva/router';
import styles from './Base.less';
import { connect } from 'dva'
const { Header, Content, Footer, Sider } = Layout;
const { Item } = Menu
const SubMenu = Menu.SubMenu

function MainLayout(props) {

    const language = (
        <Menu>
            <Item>
                <a>中文</a>
            </Item>
            <Item>
                <a>English</a>
            </Item>
            <Item>
                <a>한국어</a>
            </Item>
        </Menu>
    );

    return (
        <Layout className={styles['page_height']}>
            <Sider width={188}>
                <div className={styles['logoStyle']}>
                    Fruit
                </div>
                <Menu theme="dark"
                    defaultSelectedKeys={[props.menu.selectedKey]}
                >
                    {props.menu.items.map(function (item, idx) {
                        return <SubMenu key={idx} title={<span><Icon type={item.iconType} /><span>{item.title}</span></span>} >
                            {item.subItems.map(function (subItem, index) {
                                return <Menu.Item key={subItem.key} paddingLeft={0} >
                                    <Link to={subItem.link}>
                                        <span>{subItem.name}</span>
                                    </Link>
                                </Menu.Item>
                            }, this)}

                        </SubMenu>
                    }, this)}
                </Menu>
            </Sider>
            <Layout>
                <Header className={styles['user-information-domain']}>
                    <div className={styles.box1}>
                        <span className={styles['user-profile']}>
                            <Badge><Avatar shape="circle" icon="user" /></Badge>
                        </span>
                        <span className={styles['user-name']}>
                            <a className={styles['ant-dropdown-link']}>
                                xiaomiao
                                </a>
                        </span>
                        <span className={styles['user-login']}>
                            <a>
                                <Icon type="user" />logout
                            </a>
                        </span>
                        <span>
                            <Dropdown overlay={language}>
                                <a className={styles['ant-dropdown-link']}>
                                    English<Icon type="down" />
                                </a>
                            </Dropdown>
                        </span>
                    </div>
                </Header>
                <Content className={styles['container-wrapper']}>
                    <Breadcrumb className={styles['current-info']}>
                        <Breadcrumb.Item></Breadcrumb.Item>
                    </Breadcrumb>
                    <div className={styles['contents-wrapper']}>
                        {props.children}
                    </div>
                </Content>
                <Footer className={styles['footer-align']}>
                    3333
                </Footer>
            </Layout>
        </Layout>
    );
}

export default connect()(MainLayout) 
