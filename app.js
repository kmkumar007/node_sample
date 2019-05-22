const express = require('express');
const app = express();
const port = 3000;

app.get("/",(req,res)=>{
res.send("Hellochi how od!")
})
app.listen(port, function () {
  console.log('Examp  le app listening on port 8080!')
})
  