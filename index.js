const path = require('path');
const {contextMngApi} = require('./server/contextManage');
const express = require('express');
const app = express();
contextMngApi(app);
app.use('/', express.static(path.join(__dirname, 'vue_dev/dist/')));
app.listen("10175",'localhost',function(err){
    if(err){
    console.log(err);
    return;
    }
});
console.log('Listening at http://localhost:10175');