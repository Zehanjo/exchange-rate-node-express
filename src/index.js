const express = require("express");
const cors = require("cors");
const app = express();
const morgan = require('morgan');

const PORT = process.env.PORT || 3000;

const DIRECTORIO_PERMITIDO_CORS = "*";
app.use(cors({
  origin: DIRECTORIO_PERMITIDO_CORS
}));
//middlewares
// app.use(morgan('dev'));
app.use(cors());
app.get('/tipo-cambio',(req,res)=>{
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    fetch("https://api.apis.net.pe/v1/tipo-cambio-sunat").then((data)=>{
        return data.json()
    }).then((response) =>{
        console.log(response);
        res.json(response);
    })
});

// Starting Server
app.listen(PORT, () =>{
    console.log(`Server on port ${PORT}`);
})
