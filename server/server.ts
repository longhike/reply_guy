import express, { Request, Response } from 'express';

const app = express()
const PORT: string | number = process.env.PORT || 3001;

app.get('/', (req: Request, res: Response): void => {
    res.send('Hello from the back')
})

app.listen(PORT, () => {
    console.log(`BACK END SERVICE RUNNING ON PORT ${PORT}`);
})
