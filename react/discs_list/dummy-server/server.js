import express from 'express';
import cors from 'cors';
import dummydata from './data/dummy';

/*eslint-disable no-console*/

let app = express();
app.use(cors());
app.use(express.static('public'));

app.get('/', function(req, res) {
   res.header("Access-Control-Allow-Origin", "*");
   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
   res.status(200).contentType('application/json').send(dummydata);
});

// start server, listening at port 4400
app.listen(4400, () => console.log('Listening on port 4400'));

