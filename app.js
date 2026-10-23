// to use express we must add it using NODES require statement
const express = require('express');  //lets store this in a variable

//express function returns EXPRESS APPLICATION
const app = express();  // store it in an variable

// step 2 Use GET. This is the route to follow if a visitor just visits our site without specifiying a particular folder or file
app.get('/', (request, response) => {
    response.send('I love Treehouse!') //response's send method sends a string to the client
});
//set up DEVELOPMENT server using listen method
app.listen(3000);  //give port number

//--------- now we have an EXPRESS app ---------------

//use special URL called "local host" to run 