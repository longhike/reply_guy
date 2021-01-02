import express, { Request, Response } from 'express';
import router from './api/api'

const app = express()
const PORT: string | number = process.env.PORT || 3001;


app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.get('/', (req: Request, res: Response): void => {
    res.send('Hello from the back')
})

app.use('/api', router)

app.listen(PORT, () => {
    console.log(`BACK END SERVICE RUNNING ON PORT ${PORT}`);
})
