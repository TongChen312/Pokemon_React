import React from 'react';
import { Upload, message, Button } from 'antd';
import Ajax from '@/apiservice/service.js';
import { AjaxMessage } from '@/assets/methods/util.js'

const props = {
  name: 'file',
  action: '/upload/banner/banner_add',
  headers: {
    authorization: 'authorization-text',
  },
  listType: 'picture',
  className: 'upload-list-inline',
};

export default class Home extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      dataSource: [],
      info: []
    };
  }

  // 轮播图列表
  bannerList = () => {
    Ajax({ url: 'Banner_List' }).then((res) => {
      this.setState({ dataSource: res });
    })
  }

  componentDidMount() {
    this.bannerList();
  }

  onChange(info) {
    if (info.file.status === 'done') {
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  }


  render() {
    const { dataSource } = this.state;

    return (
      <main style={{ minHeight: 600 }} className="flex-row-center">
        {dataSource.map(item => {
          return (
            <img src={item.src} key={item.name} alt="" />
          )
        })}
        <Upload  {...props} onChange={this.onChange}>
          <Button> Click to Upload</Button>
        </Upload>
      </main>
    )
  }
}