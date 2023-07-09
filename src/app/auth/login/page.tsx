'use client'
import React, { FormEvent, useState } from 'react';
import {signUp} from '../../../../lib/firebase/auth/signup'
import { useRouter } from 'next/navigation';

const Login = () => {
    const [email, setEmail] = useState('')
    const [pw, setPw] = useState('')
    const router = useRouter()

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const data = {
            email: email,
            password: pw,
        }
        const res = await fetch(
            '/api/login',
            {
                method: 'POST',
                headers: { 'Content-Type': 'application/json'},
                body: JSON.stringify(data)
            }
        )

        const result = await res.json()
        console.log(result)
        
        router.push('/')
    }
    

    return (
        <main>
            <div className='h-screen bg-rose-200'>
                <div className='w-full flex flex-col items-center h-full'>
                    <div className='font-outfit text-center text-amber-950 text-lg pb-5 mt-20'>Login</div>
                    <form onSubmit={handleSubmit} className='w-full flex flex-col justify-center items-center'>
                        <div className='pb-5'>
                            <div className='text-gray-800'>Email</div>
                            <input onChange={(e) => setEmail(e.target.value)} type='email' className='w-56 text-sm py-2 rounded-lg px-2'></input>
                        </div>
                        <div className='pb-7'>
                            <label className='text-gray-800'>Password</label>
                            <br/>
                            <input type='password' onChange={(e) => setPw(e.target.value)} className='w-56 text-sm py-2 rounded-lg px-2'></input>
                        </div>
                        <button type='submit' className='text-gray-800 rounded-lg bg-amber-300 w-44 py-1 border-2 border-amber-400 hover:bg-amber-400 duration-500'>Submit</button>
                    </form>
                </div>
            </div>
        </main>
    )
};

export default Login;