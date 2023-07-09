import { register } from '../../../lib/register'
import { login } from '../../../lib/firebase/auth/signup'

const handler = async (req, res) => {
    if (req.method == 'POST') {
        try {
            const { result, error } = await login(req.body.email, req.body.password);

            return res.status(200).json(result)
        } catch (error) {
            return res.status(500).json({ error: error.message })
        }
    }

    res.status(425).end(`Method ${req.method} is not allowed.`)
}

export default handler;