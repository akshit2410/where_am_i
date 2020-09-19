const express = require('express');  
const app = express();
app.listen(5000,()=>console.log('listening to 5000'));
app.use(express.static('public'));
