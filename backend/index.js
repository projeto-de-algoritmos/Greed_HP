const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { json } = require('body-parser');

app = express();
app.set('port', process.env.PORT || 3000);
app.use(cors());
app.use(bodyParser.json());

app.get('/',(req,res)=>{
    res.send("hello word")
})
app.post('/calc',(req,res)=>{
     var data = req.body.data;
     console.log(data)
     res.json([3,4]);
})
// starting the server
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});
