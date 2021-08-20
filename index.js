const {contextMngApi} = require('./server/contextManage');
const express = require('express');
const app = express();
contextMngApi(app);

app.listen("8888",'localhost',function(err){
    if(err){
    console.log(err);
    return;
    }
});
console.log('Listening at http://localhost:8888');