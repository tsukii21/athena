const express = require('express');
const bodyParser =require('body-parser');

const subdomainrouter=express.Router();

const { spawn }=require('child_process');

subdomainrouter.use(bodyParser.json());

subdomainrouter.route('/:domain')
.all((req,res,next)=>{
	res.statusCode=200;
	res.set('Content-Type','text/plain');
	next();
})
.get((req,res,next) => {
	var datatosend;
	//calls the python script
	const python=spawn('python',['./routes/script.py']);
	//collects data form the script
	python.stdout.on('data',(data) => {
	console.log('data receiving from python script');
	datatosend=data.toString();
	console.log(`${datatosend}`);
	res.end(datatosend);
	});
	//close event is emitted when stdio stream of child process has been closed
	python.on('close',(code) =>{
	console.log(`child process closes with code ${code}`);
	//res.end(datatosend);
	res.end('Will send all the subdomain to you!'+req.params.domain+datatosend);
	console.log(`${datatosend}+hi`);
	});
	//res.end('Will send all the subdomain to you!'+req.params.domain+datatosend);

})



module.exports=subdomainrouter
