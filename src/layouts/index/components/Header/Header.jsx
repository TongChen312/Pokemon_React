import { useState } from 'react';
import { Layout, Divider } from 'antd';

const MenuGroup = [
  { name: '动画', mark: 'cartoon' },
  { name: '电影', mark: 'movie' },
  { name: '商品', mark: 'commodity' },
  { name: '应用', mark: 'application' },
  { name: '游戏', mark: 'game' },
  { name: '卡牌', mark: 'card' },
  { name: '活动', mark: 'active' },
  { name: '图鉴', mark: 'handbook' },
]

export default function Header() {
  const [mark, setMark] = useState('cartoon');

  return (
    <Layout style={{ position: 'fixed', zIndex: 1, width: '100%' }} className="Header">
      <ul>
        {MenuGroup.map((v, i) => {
          return (
            <li key={i} onClick={() => { setMark(v.mark) }} data-mark={v.mark}>{v.name}</li>
          )
        })}
      </ul>
      <Divider>{mark}</Divider>
    </Layout>
  )
}