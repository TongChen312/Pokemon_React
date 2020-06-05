import { useState } from 'react';
import { Layout, Menu } from 'antd';

const MenuGroup = [
  { name: '动画', href: '/' },
  { name: '电影', href: '/' },
  { name: '商品', href: '/' },
  { name: '应用', href: '/' },
  { name: '游戏', href: '/' },
  { name: '卡牌', href: '/' },
  { name: '活动', href: '/' },
  { name: '图鉴', href: '/' },
]

export default function Header() {
  // const [uname, setUname] = useState('未登录');

  return (
    <Layout style={{ position: 'fixed', zIndex: 1, width: '100%' }} className="Header">
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']} breakpoint="lg">
        {MenuGroup.map((v, i) => {
          return (
            <Menu.Item key={i}>
              <a href={v.href}>{v.name}</a>
            </Menu.Item>
          )
        })}
      </Menu>
    </Layout>
  )
}