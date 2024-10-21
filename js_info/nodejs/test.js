import express from 'express';
import cors from 'cors';
import router from './router/index.router.js';
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send('Hello World');
})

app.use(router);

app.listen(8080, () => console.log('server is running on port 8080'));