const express = require('express');
const bodyParser = require('body-parser');
const PORT = '3000';

const app = express();
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

let activeVisitors = 0;

app.post('/metrics/active_visitors',(req,res)=>{
  if ( typeof req.body.value === 'number' ) {
    activeVisitors += req.body.value;
    return res.sendStatus(200)
  } else {
    return res.status(400).send('request body must be data type number!');
  }
})

app.get('/metrics/active_visitors/sum',(req,res)=>{
  return res.status(200).send(`This past hour your site's had: ${activeVisitors} visitors`);
})

// setInterval

app.listen(PORT,()=>{
  console.log(`Listening on port:${PORT}`);
})