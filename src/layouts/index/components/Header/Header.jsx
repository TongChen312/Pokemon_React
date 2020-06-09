import { useState } from 'react';
import { Divider, Drawer } from 'antd';
import router from 'umi/router';
import Draggable from 'react-draggable';
import LoginModal from '@/components/LoginModal/index'

const MenuGroup = [
  { name: '动画', mark: 'cartoon', router: '/cartoon' },
  { name: '电影', mark: 'movie', router: '/movie' },
  { name: '商品', mark: 'commodity', router: '/commodity' },
  { name: '应用', mark: 'application', router: '/application' },
  { name: '游戏', mark: 'game', router: '/game' },
  { name: '卡牌', mark: 'card', router: '/card' },
  { name: '活动', mark: 'active', router: '/active' },
  { name: '图鉴', mark: 'handbook', router: '/pokemonlist' },
]

export default function Header() {
  const [mark, setMark] = useState('cartoon');
  const [visible, setVisible] = useState(false);

  const showDrawer = () => setVisible(true);
  const closeDrawer = () => setVisible(false);

  return (
    <header style={{ position: 'fixed', zIndex: 1, width: '100%' }} className="Header">
      <ul>
        {MenuGroup.map((v, i) => {
          return (
            <li key={i} onClick={() => { setMark(v.mark); router.push(v.router) }} data-mark={v.mark}>{v.name}</li>
          )
        })}
      </ul>
      <Divider plain >{mark}</Divider>

      <Draggable
        handle=".handle"
        defaultPosition={{ x: 0, y: 0 }}
        grid={[1, 1]}
        scale={1}>
        <img src={require('@/assets/img/icon/icons8-精灵球-50.png')} alt="" className="handle" draggable="false" onDoubleClick={showDrawer} />
      </Draggable>

      <Drawer
        title="Basic Drawer"
        placement="right"
        closable={false}
        onClose={closeDrawer}
        visible={visible}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>

      <LoginModal />

    </header>
  )
}