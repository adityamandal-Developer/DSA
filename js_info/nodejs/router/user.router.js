import { Router } from 'express';

const router = Router();

router.get('/about', (req, res) => {
    res.send('About Page');
})

router.post('/about', (req, res) => {
    const { name, hello } = req.body;
    return res.json({
        name,
        hello
    })
})

export default router;