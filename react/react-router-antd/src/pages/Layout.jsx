import React from 'react'
import { Layout, Row, Col, Avatar, Input, Menu, Dropdown, Badge,Icon } from 'antd'
import { UserOutlined} from '@ant-design/icons'
import { Route, Link } from 'react-router-dom';

function DropMenu() {
  return (
    <Menu>
      <Menu.Item key="0">
        <a href="#">修改密码</a>
      </Menu.Item>
      <Menu.Item key="1">
        <a href="#">退出登录</a>
      </Menu.Item>
    </Menu>
  )
}

const { Header, Sider, Content, Footer } = Layout
class PageLayout extends React.Component {
  render() {
    return (
      <div>
        <Layout>
          <Header style={{color: '#fff', taxtAligin: 'center', fontWeight: 'bold'}}>
            <Row>
              <Col span={10}>React + Antd 实践</Col>
              <Col span={8}>
                <Input placeholder="请输入你想要的..." />
              </Col>
              <Col span={6}>
                <Avatar style={{ backgroundColor: "#666", marginRight: 20}} icon={<UserOutlined />}></Avatar>
                <Dropdown overlay={DropMenu}>
                  <a>Hi,蜗牛</a>
                </Dropdown>
              </Col>
            </Row>
          </Header>
          <Layout>
            
          </Layout>
        </Layout>
      </div>
    );
  }
}


export default PageLayout