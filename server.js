var express = require('express')

app = express()

app.set('port', process.env.PORT || 3300)
app.set('views', __dirname+'/views')

config = require('./server/configure')
app = config(app)

app.get('/', function(req, res){
	res.send('Hello World')	
})



app.listen(app.get('port'), function(){
	console.log('Server up : http://localhost:'+app.get('port'))
})