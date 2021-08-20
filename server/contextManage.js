const request = require('request');
const parser = require('url-parse');
exports.contextMngApi =  function(app) {
    // app.use('/api/user/create',proxy('qyapi.weixin.qq.com/cgi-bin/user/create', {
    //     https: true,
    //     proxyReqOptDecorator: function(proxyReq, originalReq) {
    //         // you can update headers 
    //         proxyReq.headers['Content-Type'] = 'application/json';
    //         // you can change the method 
    //         proxyReq.method = 'POST';
    //         const {query} = parser(originalReq.originalUrl, true);
    //         proxyReq.params = query;
    //         return proxyReq;
    //       },
    // }));
    app.get('/api/user/create', function(req,res) {
        const {query} = parser(req.originalUrl, true);
            const clientServerOptions = {
                uri: 'https://'+'qyapi.weixin.qq.com/cgi-bin/user/create',
                body: JSON.stringify(query),
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                }
            }
            request(clientServerOptions, function (error, response) {
                res.end(response.body);
            });
        
    })
}