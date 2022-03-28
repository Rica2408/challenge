var express = require('express');
var cors = require('cors')
var app = express();
var jwt = require('express-jwt');
var jwks = require('jwks-rsa');
var axios = require('axios')

app.use(cors())

var jwtCheck = jwt({
      secret: jwks.expressJwtSecret({
          cache: true,
          rateLimit: true,
          jwksRequestsPerMinute: 5,
          jwksUri: 'https://dev-synvfzom.us.auth0.com/.well-known/jwks.json'
    }),
    audience: 'rreyesvar',
    issuer: 'https://dev-synvfzom.us.auth0.com/',
    algorithms: ['RS256']
});

app.use(jwtCheck);

app.get('/', function (req, res) {
    res.send(res.socket._httpMessage.req.user.permissions);
});

app.listen(4000, () => console.log('Server on port 4000'));