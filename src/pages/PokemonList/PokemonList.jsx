import React from 'react';
import { Table, Layout, Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import Ajax from '@/apiservice/service.js';


const character = {
  '草': '#77CC55',
  '火': '#FF4422',
  '毒': '#AA5599',
  '飞行': '#6699FF',
  '水': '#3399FF',
  '虫': '#AABB22',
  '一般': '#BBBBAA',
  '电': '#FFCC33',
  '地面': '#DDBB55',
  '妖精': '#FFAAFF',
  '格斗': '#BB5544',
  '岩石': '#BBAA66',
  '超能力': '#FF5599',
  '冰': '#77DDFF',
  '幽灵': '#6666BB',
  '龙': '#7766EE',
  '恶': '#775544',
  '钢': '#AAAABB',
}


const columns = [
  { title: '图像', align: 'center', dataIndex: 'pid', render: text => <div data-pid={text} className="pokemon-i" ></div> },
  { title: '编号', align: 'center', dataIndex: 'poid' },
  { title: '中文名', align: 'center', dataIndex: 'pname' },
  { title: '日文名', align: 'center', dataIndex: 'pname1' },
  { title: '英文名', align: 'center', dataIndex: 'pname2' },
  { title: '属性1', align: 'center', dataIndex: 'character1', render: character1 => <div style={{ backgroundColor: character[character1] }} className="pokemon-character-block">{character1}</div> },
  { title: '属性2', align: 'center', dataIndex: 'character2', render: character2 => <div style={{ backgroundColor: character[character2] }} className="pokemon-character-block">{character2}</div> },
]


export default class PokemonList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      dataSource: [],
      loading: true
    };
  }

  componentDidMount() {
    this.getPokemonList()
  }

  getPokemonList = async () => {
    const dataSource = await Ajax({
      url: 'All_Pokemons', data: {
        t: new Date().getTime().toString()
      }
    });
    this.setState({ dataSource }, () => {
      setTimeout(() => {
        this.setState({ loading: false })
      }, 1000)
    })
  }

  render() {
    const { dataSource } = this.state

    return (
      <div className="PokemonList">
        <Layout>
          <Spin indicator={<LoadingOutlined style={{ fontSize: 24 }} spin />} spinning={this.state.loading}>
            <Table columns={columns} dataSource={dataSource} rowKey={(record, index) => index} ></Table>
          </Spin>
        </Layout>
      </div>
    )
  }
}