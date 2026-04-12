import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import path from 'path';
import mustache from 'mustache-express';
import { router } from './routers/router';

dotenv.config();

const app = express();

const port = process.env.PORT;


app.use(cors());
app.use(express.json());
app.set('views', path.join(__dirname, 'views'));
app.engine('mustache', mustache());
app.set('view engine', 'mustache');
app.use(express.static(path.join(__dirname, '../public')));
app.use(router);
app.use(express.urlencoded({extended: true}));

app.listen(port, () => console.log(`Link: http://localhost:${port}`));
