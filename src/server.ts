import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors'; 

const app = express(); 

// CORS 
app.use(cors({credentials: true, origin: true}));
// app.options('*', cors({credentials: true, origin: true}));
app.use(cors({
    credentials: true,
    origin: '*'
}));

app.use(express.json()); //New Body Parser
app.use(express.urlencoded({extended:false})); // Also parse HTML Forms
app.use(cookieParser()); //Cookie parser

app.get('/', (req, res) => {
    res.send('Hello World!')
  })

app.listen(3000);