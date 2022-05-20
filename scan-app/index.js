
var scan_data = require('./data.js');

const express = require('express');


const app = express();



app.get('/:id', (req, res) => {
    console.log(scan_data[0])
    const id = req.params.id
  res.send({'Success': 200 , data: scan_data[id]});
});

app.get('/platform', (req, res) => {
    const platform = 'example-platform'
    res.send({'Success': 200 , data: platform});
  });


app.get('/territory', (req, res) => {
    const territory = 'example-territory'
    res.send({'Success': 200 , data: territory});
  });
  
  
app.get('/date', (req, res) => {
    const date = 'example-date'
    res.send({'Success': 200 , data: scan_data[0].date});
  });

  app.get('/spot:id', (req, res) => {
    const date = 'example-date'
    console.log(id)
    res.send({'Success': 200 , data: scan_data[id].spots});
  });
 /**- Scan app that allows a user to view: platform, territory, date, *spots */ 
  

 

app.listen(3000, () => console.log('Example app is listening on port 3000.'));