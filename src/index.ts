import express from 'express'
import 'reflect-metadata';
import 'dotenv/config';
import cors from 'cors';
import helmet from 'helmet';
import 'express-async-errors';

import routes from '@shared/infra/http/routes';
import errorHandler from '@shared/infra/http/middlewares/errorHandler';
import '@shared/container';

routes.get('/', (req, res) => {
    res.json({
        data: 'Yes'
    })
})

const app = express()
const { PORT,  } = process.env;
const corsOptions = {
    origin: [
        '*',
        'http://127.0.0.1:5500/'
    ],
    optionsSuccessStatus: 200,
    credentials: true
}

// app.use(cors({
//     origin: (_origin, callback) => {
//         callback(null, true);
//     },
//     credentials: true,
// }),)
app.options('*', cors({
origin: "*"  
}));
app.use(express.urlencoded({ extended: true }));
app.use(express.json({ limit: '10mb' }));
app.use(helmet());
app.use(routes)


app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`Acdemy server listening on PORT ${PORT || 8000}`);
});