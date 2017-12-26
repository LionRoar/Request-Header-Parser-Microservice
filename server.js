const express = require('express');
const app = express();
const p = require('./parser');

app.use(express.static('public'));

app.get('/',(req,res)=>{
  res.status(200).sendFile(__dirname + '/views/index.html');
});

app.get('/api/whoami',(req,res)=>{
  res.status(200).send(p(req));
});

app.get('*', function(req, res){
  res.status(404).sendFile(__dirname + '/views/404.html');
});

const port = process.env.PORT||3000;


app.listen(port,()=>console.log(`Listening on port ${port}`));