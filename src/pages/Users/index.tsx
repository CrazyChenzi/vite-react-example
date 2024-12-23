import { Table, Card } from 'antd';

const Users = () => {
  const columns = [
    {
      title: '用户名',
      dataIndex: 'username',
      key: 'username',
    },
    {
      title: '邮箱',
      dataIndex: 'email',
      key: 'email',
    }
  ];

  const data = [
    {
      key: '1',
      username: '测试用户',
      email: 'test@example.com',
    }
  ];

  return (
    <Card title="用户管理">
      <Table columns={columns} dataSource={data} />
    </Card>
  );
};

export default Users;
