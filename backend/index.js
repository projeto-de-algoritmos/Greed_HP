const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { json } = require('body-parser');
const greed = require('./greed');

app = express();
app.set('port', process.env.PORT || 3000);
app.use(cors());
app.use(bodyParser.json());

app.post('/calc',(req,res)=>{
     var data = req.body.data;
     var result = greed(data);
     console.log(data)
     res.json(result);
})
// starting the server
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});
