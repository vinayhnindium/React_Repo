import express from 'express';
import bodyParser from 'body-parser';


const app = express();
app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
      extended: true,
    }),
  );
  const port =  3005;
  app.listen(port, function(err){
    if (err) console.log("Error in server setup")
    console.log("Server listening on port", port);
})