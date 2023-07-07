import { register } from '../../../lib/register'
import { signUp } from '../../../lib/firebase/auth/signup'

const handler = async (req, res) => {
    if (req.method == 'POST') {
        try {
            const { result, error } = await signUp(req.body.email, req.body.password);
            const user = await register({uid: result?.user.uid})

            return res.status(200).json(result)
        } catch (error) {
            return res.status(500).json({ error: error.message })
        }
    }

    res.status(425).end(`Method ${req.method} is not allowed.`)
}

export default handler;