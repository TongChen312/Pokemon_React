import React from 'react';
import { Row, Col, Divider, Space } from 'antd'

export default function Footer() {

  return (
    <footer className="Footer">
      <div className="w-1200">
        <Row gutter={[16, 16]} align="middle" justify="center" style={{ height: 250 }}>
          <Col span={7}>
            <img src={require('@/assets/img/background/pokemon_company.png')} style={{ marginBottom: 15 }} alt="" />
            <ul className="footer-list-1 font-16">
              <Space direction="vertical" size={10}>
                {FooterList1.map((item, index) => {
                  return (
                    <li key={index}>{item}</li>
                  )
                })}
              </Space>
            </ul>
          </Col>
          <Col span={8}>
            {imgRender()}
          </Col>
          <Col span={9} >
            <div className="footer-list-3">
              <div className="footer-link-group">
                <a href="/">宝可梦是什么？</a><Divider type="vertical" /><a href="/">使用条款 </a><Divider type="vertical" /><a href="/"> 网站地图</a>
              </div>
              <div>
                <p>©2019 Pokémon. ©1995 - 2019 Nintendo/Creatures Inc./GAME FREAK inc.</p>
                <p style={{ marginTop: 20 }}>©1997 Nintendo, Creatures, GAME FREAK, TV Tokyo, ShoPro, JR Kikaku. ©Pokémon. TM and ® are trademarks of Nintendo.</p>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </footer>
  )
}

function imgRender() {

  return (
    <div className="footer-list-img flex-column">
      <strong>Connect With Us/联系我们</strong>
      <div className="flex-row-around" style={{ margin: '25px 0' }}>
        <i></i><i></i><i></i><i></i><i></i><i></i><i></i>
      </div>
      <div className="flex-row-around">
        <img src={require('@/assets/img/icon/SNS_tencentwedio (1)-thumb-132x132-11102.png')} alt="" />
        <img src={require('@/assets/img/icon/SNS_wechat-thumb-132x132-8010.png')} alt="" />
        <img src={require('@/assets/img/icon/SNS_weibo-thumb-132x132-8009.png')} alt="" />
      </div>
    </div>
  )
}

const FooterList1 = [
  'What\'s New / 新鲜事',
  'Pokémon Parents Guide/宝可梦指导',
  'Customer Service/顾客服务',
  'About Our Company/关于公司',
  'Pokémon Careers/宝可梦生涯',
  'Select a Country/Region/选择国家'
]
