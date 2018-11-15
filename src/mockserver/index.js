const jsonServer = require('json-server');
const server = jsonServer.create();
const middlewares = jsonServer.defaults();

const openAuthorityResponse = require('./user/author')

server.use(middlewares);
server.use(jsonServer.bodyParser);

server.use('/system/user', (req, res) => {
  res.jsonp({
    code: '0',
    message: '',
    data: {
      jwt: {
        access_token: true
      },
      userName: '测试账号121212121211'
    }
  });
});

server.use('/system/openAuthority', (req, res) => {
  if (req.method === 'POST') {
    res.jsonp(openAuthorityResponse);
  }
});

server.listen(4600, () => {
  console.log('JSON server in running on http://localhost:4600');
});
