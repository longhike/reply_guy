import express, { Request, Response } from 'express';

const router = express.Router()

router.get('/google', (req: Request, res: Response) => {
    res.send('Google login')
})



export default router