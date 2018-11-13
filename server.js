const express = require('express');
const bodyParser = require('body-parser');
const PORT = '3000';

const app = express();
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

let visitorsLastHour = 0;

app.post('/metrics/active_visitors',(req,res)=>{
  if ( typeof req.body.value === 'number' ) {
    visitorsLastHour += req.body.value;
    return res.sendStatus(200)
  } else {
    return res.status(400).send('request body must be data type number!');
  }
})

app.get('/metrics/active_visitors/sum',(req,res)=>{
  return res.status(200).send({value:visitorsLastHour});
})

//setInterval resets visitorsLastHour every hour.
//NOTE: 1 hour = 3.6 x 10^6 milliseconds
setInterval(()=>{
  // console.log('reset visitor counter');
  visitorsLastHour = 0;
},3600000)
// },10000)

app.listen(PORT,()=>{
  console.log(`Listening on port:${PORT}`);
})