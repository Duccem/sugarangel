const express = require('express');
const morgan = require('morgan');
const app = express();
const path = require('path');

app.set('port', process.env.PORT || 3000);

app.use(morgan('dev'));
app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(express.static(path.join(__dirname,'public')));

app.listen(app.get('port'),()=>{
    console.log(`[SERVER] running on port ${app.get('port')}`);
});
