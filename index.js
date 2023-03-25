import express from 'express';
import cors from 'cors';
import Connection from './database/db.js';
import Routes from './routes/route.js';
let app = express();
app.use(cors());
app.use(express.json());
app.use('/', Routes);
Connection();
app.listen(8000, console.log('server is live'));
// import express from 'express';
// import Connection from './database/db.js';
// const app = express();
// import Routes from './routes/route.js';
// import cors from 'cors';
// // import bodyParser from 'body-parser';

// // app.use(bodyParser.json({ extended: true }));
// // app.use(bodyParser.urlencoded({ extended: true }));
// app.use(express.json());
// app.use(cors());
// app.use('/', Routes);
// const port = 8000;
// Connection();

// app.listen(port, () => console.log(`server is live on port ${port}`));
