const express = require('express');
app = express();
app.set('port', process.env.PORT || 8080);
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send('public/index.html');
    });

// starting the server
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});