import express from 'express'

const router = express.Router();

router.get('/', async (req, res) => {
    res.status(200).json(users)
});

router.post('/', async (req, res) => {
    res.status(200).json(data)
});

router.post('/login', async (req, res) => {
    res.status(200).json(data)
});

export default router;
