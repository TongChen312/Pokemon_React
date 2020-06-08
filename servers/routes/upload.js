const express = require('express'),
  formidable = require('formidable'),
  router = express.Router(),
  filePath = 'static/upload'; //项目中service的文件夹
  // filePath = '../../Upload'; //桌面上新建的Upload文件夹

router.get('/', (req, res) => {
  res.send(`
    <h2>With <code>"express"</code> npm package</h2>
    <form action="/api/upload" enctype="multipart/form-data" method="post">
      <div>Text field title: <input type="text" name="title" /></div>
      <div>File: <input type="file" name="someExpressFiles" multiple="multiple" /></div>
      <input type="submit" value="Upload" />
    </form>
  `);
});

router.post('/file', (req, res, next) => {
  console.log('开始文件上传....');
  var form = new formidable.IncomingForm();
  form.encoding = 'utf-8';//设置编辑
  form.uploadDir = filePath;//设置文件存储路径
  form.keepExtensions = true; //保留后缀
  form.maxFieldsSize = 2 * 1024 * 1024; //设置单文件大小限制    
  //form.maxFields = 1000;  设置所有文件的大小总和

  form.parse(req, function (err, fields, files) {
    // var File = files.file.toJSON();

    if (err) { next(err); return; }
    res.json({ fields, files });
    console.log('开始上传成功....');
    //res.end(util.inspect({fields: fields, files: files}));
  });

});



module.exports = router;