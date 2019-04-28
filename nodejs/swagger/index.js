var express = require('express');
var app = express();
var swaggerJSDoc = require('swagger-jsdoc');

//クロスサイト対応。swagger-uiから見た際、クロスサイトのエラーがでることへの対応。
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

//swaggerの基本定義
var options = {
    swaggerDefinition: {
        info: {
            title: 'Hello World',
            version: '1.0.0.'
        },
    },
    apis: ['./index.js'], //自分自身を指定。外部化した場合は、そのファイルを指定。配列で複数指定も可能。
};

var swaggerSpec = swaggerJSDoc(options);

//swagger-ui向けにjsonを返すAPI
app.get('/api-docs.json', function(req, res){
    res.setHeader('Content-Type','application/json');
    res.send(swaggerSpec);
});

// 以下、使用を定義するAPI


let clients = [] ;

/**
 * @swagger
 * /message:
 *   post:
 *     description: post message
 *     parameters:
 *       - name: application_id
 *         description: post channel application_id
 *         in: query
 *         required: true
 *         type: string
 *       - name: message
 *         description: post message
 *         in: formData
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: login
 */
app.post('/message', function(req, res) {
//    req.query.application_id
//    req.body.message
    res.json(req.body);
});

/**
 * @swagger
 * /message:
 *   get:
 *     description: get message
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: application_ids
 *         description: post channel application_id
 *         in: formData
 *         required: true
 *         type: array
 *         items: 
 *           type: string
 *     responses:
 *       200:
 *         description: login
 */
app.post('/message', function(req, res) {
//    req.body.application_ids
    res.json(req.body);
});

//listen
app.listen(3000, function(){
    console.log("Listen on port 3000.");
});
