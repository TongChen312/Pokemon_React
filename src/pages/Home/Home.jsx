import React from 'react';
import { Upload, message, Button } from 'antd';


const props = {
  name: 'file',
  action: '/upload/file',
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
    };
  }

  componentDidMount() {
  }

  onChange(info) {
    if (info.file.status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === 'done') {
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  }


  render() {

    return (
      <main style={{ minHeight: 600 }} className="flex-row-center">
        <Upload  {...props} onChange={this.onChange}>
          <Button> Click to Upload</Button>
        </Upload>
      </main>
    )
  }
}