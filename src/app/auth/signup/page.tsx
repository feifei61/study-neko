'use client'
import React, { FormEvent, useState } from 'react';
import {signUp} from '../../../../lib/firebase/auth/signup'
import { useRouter } from 'next/navigation';

const Login = () => {
    const [email, setEmail] = useState('')
    const [pw, setPw] = useState('')
    const [pwDontMatch, setPwDontMatch] = useState(false)
    const router = useRouter()

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        if (pwDontMatch) return
        e.preventDefault()
        
        const { result, error } = await signUp(email, pw);

        if (error) {
            return console.log(error)
        }

        // else successful
        console.log(result)
        router.push('/')
    }
    

    return (
        <main>
            <div className='h-screen bg-rose-200'>
                <div className='w-full flex flex-col items-center h-full'>
                    <div className='font-outfit text-center text-amber-950 text-lg pb-5 mt-20'>Signup</div>
                    <form onSubmit={handleSubmit} className='w-full flex flex-col justify-center items-center'>
                        <div className='pb-5'>
                            <div className='text-gray-800'>Email</div>
                            <input onChange={(e) => setEmail(e.target.value)} type='email' className='w-56 text-sm py-2 rounded-lg px-2'></input>
                        </div>
                        <div className='pb-2'>
                            <label className='text-gray-800'>Password</label>
                            <br/>
                            <input type='password' onChange={(e) => setPw(e.target.value)} className='w-56 text-sm py-2 rounded-lg px-2'></input>
                        </div>
                        <div className='pb-10'>
                            <label className='text-gray-800'>Confirm Password</label>
                            <br/>
                            <input 
                                type='password' 
                                onChange={(e) => {
                                    setPwDontMatch(e.target.value !== pw)
                                }} 
                                className='w-56 text-sm py-2 rounded-lg px-2'
                            />
                            <p className='text-xs text-rose-500 pt-1'>{pwDontMatch && "Passwords don't match"}</p>
                        </div>
                        <button type='submit' className='text-gray-800 rounded-lg bg-amber-300 w-44 py-1 border-2 border-amber-400 hover:bg-amber-400 duration-500'>Submit</button>
                    </form>
                </div>
            </div>
        </main>
    )
};

export default Login;