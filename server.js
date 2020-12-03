const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.listen(3000, function(){
    console.log("Server is running on port 3000");
});

app.get("/", function(request, response){
    response.sendFile(__dirname+'/index.html');
});

app.post('/', function(request, response){
    console.log(request.body);
    let weight = Number(request.body.weight);
    let height = Number(request.body.height);
    let result = weight / (height*height);
    console.log(`${weight} + ${height} = ${result}`);
    response.send(`If your weight is ${weight} kg and your hight is ${height} m, then your body mass index is: ${result} !`);
});