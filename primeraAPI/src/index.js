const express= require('express');
const app = express();
const morgan= require('morgan');//funcion que procesa datos antes que el servidos lo reciba

//settings
app.set('port', process.env.PORT||3000);
app.set('json space',2);


//middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}))
app.use(express.json()); //recibe y entiende formatos json

//routes
app.use(require('./routes/index'));
app.use('/api/movies',require('./routes/movies'));
app.use('/api/users', require('./routes/users'));

//iniciando el servidor
app.listen(app.get('port'),()=>{
    console.log(`server on port ${app.get('port')}`);
});
