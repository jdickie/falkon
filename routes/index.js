var express = require('express');
var router = express.Router();

var localStore = {
    messages : []
};

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Falkon' });
});

router.get('/falkon', function(req, res) {
    try {
        var messages = localStore.messages;
        localStore.messages = [];
        res.status(200).json(messages);
    } catch(err) {
        console.log("post falkon ", err);
        res.status(500).send();
    }
});

router.post('/falkon', function(req, res) {
    try {
        var message = {
            title : req.body.title,
            body : req.body.body
        };

        localStore.messages.push(message);
        res.status(204).send();
    } catch(err) {
        console.log("post falkon ", err);
        res.status(500).send();
    }
});

module.exports = router;
