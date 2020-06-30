const express=require('express'),
		http=require('http');

const hostname='localhost';
const port =3000;

const morgan=require('morgan');


const app=express();
const bodyParser=require('body-parser');

app.use(morgan('dev'));
app.use(bodyParser.json());

const subdomainrouter=require('./routes/subdomain');

app.use('/subdomain',subdomainrouter);

const server=http.createServer(app);

server.listen(port,hostname,()=>{
	console.log(`Server running at http://${hostname}:${port}`);
});
