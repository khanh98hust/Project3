const express = require('express')
const bodyparser = require('body-parser');
const cors = require('cors');

const app = express()
app.use(cors());
const port = 9999

const listFiles = {
  folders : [
    'Image', 'Document', 'Music', 'SlideHust', 'Car', 'Share'
  ],
  files : {

  }
}

app.get('/files' , (req, res) =>{
  return res.json(listFiles);
})

app.listen(port, ()=> console.log( 'server is runing in port : ', port))