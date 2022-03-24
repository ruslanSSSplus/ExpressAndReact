import classes from './App.module.css';
import 'antd/dist/antd.min.css'
import {HashRouter, Link, Route, Routes, withRouter} from 'react-router-dom'
import Card from './card'
import React from "react";

import {Layout, Menu} from 'antd';
import {UserOutlined, SearchOutlined} from '@ant-design/icons';

const {Header, Content, Footer, Sider} = Layout;


class App extends React.Component {

    componentDidMount() {
        window.onerror = function myErrorHandler(errorMsg) {
            alert("Error occured: " + errorMsg);//or any message
            return false;
        }
    }

    render() {
        return (
            <Layout>
                <Sider
                    style={{background: '#98bfad', height: '500px'}}
                    className="menuShadow"
                    breakpoint="lg"
                    collapsedWidth="0"
                    onBreakpoint={broken => {
                        console.log(broken);
                    }}
                    onCollapse={(collapsed, type) => {
                        console.log(collapsed, type);
                    }}
                >

                    <div className={classes.logo}>
                        <img className={classes.logo1}
                             src='https://sun9-3.userapi.com/impf/sbA1-MxKfR9FziylJZeSfg-hNv9DwySyt8Qn1Q/pp_Bmo1uZ7I.jpg?size=237x173&quality=95&sign=ceafa2f1a605e6f8ea3539cd4bac2fa0&type=album'
                             alt={'logo'}/>
                    </div>

                    <Menu mode="inline" defaultSelectedKeys={['1']} style={{background: '#98bfad'}}>

                        <Menu.Item key="1" icon={<UserOutlined/>}>
                            <Link to="/card">Your card</Link>
                        </Menu.Item>
                        <Menu.Item key="2" icon={<SearchOutlined/>}>
                            <Link to="/profile">smth else</Link>
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Layout>
                    <Header className="site-layout-sub-header-background"
                            style={{padding: 0, height: 68, background: "linear-gradient(to right, #98bfad, #ffc4b2)"}}>
                    </Header>
                    <Content>
                        <div className="site-layout-background" style={{padding: 0, minHeight: 360}}>
                            <Routes>
                                <Route exact path='/card' element={<Card/>}/>
                            </Routes>
                        </div>
                    </Content>
                    <Footer style={{textAlign: 'center'}}>Social-network 2.0 ©2021 Created by Ruslan SSS Ghoul</Footer>
                </Layout>
            </Layout>
        );
    }
}


const AppAllTree = () => {
    return <HashRouter>
        <App/>
    </HashRouter>
}

export default AppAllTree