import React from 'react';
import { UserOutlined, EditFilled, UnlockFilled, ApiFilled } from '@ant-design/icons';
import { Dropdown, Menu, Space, Button } from 'antd';
import Link from 'next/link';

const menu = (
  <Menu style={{backgroundColor: '#2E78BD', marginTop: '8px'}}
    items={[
      {
        label: <Link href={'/edit-profile'}><a style={{color: '#FFFF', }}> <EditFilled  style={{paddingRight: "10px"}} />Editar perfil</a></Link>,
        key: '0',
      },
      {
        label: <Link href={'/admin'}><a style={{color: '#FFFF'}}> <UnlockFilled style={{paddingRight: "10px"}} />Área administrativa</a></Link>,
        key: '1',
      },
      {
        type: 'divider',
      },
      {
        label: <Link href={'/logout'}><a style={{color: '#FFFF'}}> <ApiFilled style={{paddingRight: "10px"}} /> Logout</a></Link>,
        key: '3',
      },
    ]}
  />
);

const UserDropdown: React.FC = () => (
  <Dropdown overlay={menu} trigger={['click']}>
    <a onClick={e => e.preventDefault()}>
      <Space>
        <Button type='primary' shape="circle" size='large' icon= {<UserOutlined />} />
      </Space>
    </a>
  </Dropdown>
);

export default UserDropdown;
