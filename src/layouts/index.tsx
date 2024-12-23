import { Layout, Menu } from 'antd';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { routes } from '../routes';

const { Header, Content } = Layout;

const MainLayout = () => {
  const location = useLocation();

  return (
    <Layout>
      <Header>
        <Menu
          theme="dark"
          mode="horizontal"
          selectedKeys={[location.pathname]}
          items={routes.map(route => ({
            key: route.path,
            label: <Link to={route.path}>{route.label}</Link>
          }))}
        />
      </Header>
      <Content style={{ padding: '24px', minHeight: 'calc(100vh - 64px)' }}>
        <Outlet />
      </Content>
    </Layout>
  );
};

export default MainLayout;
