import React, { Component } from 'react'
import { Upload, Icon, message } from 'antd';
import '../../App.css';

const Dragger = Upload.Dragger;
  
  const props = {
    name: 'file',
    multiple: true,
    action: '//jsonplaceholder.typicode.com/posts/',
    onChange(info) {
      const status = info.file.status;
      if (status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (status === 'done') {
        message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };
class Avatar extends Component {

   render(){
     return(
      <Dragger {...props}>
        <p className="ant-upload-drag-icon">
          <Icon type="inbox" />
        </p>
        <p className="ant-upload-text">点击这里上传文件</p>
        <p className="ant-upload-hint">你可以把文件拖到这里上传</p>
    </Dragger>
     )
   }
}   
  

export default Avatar;