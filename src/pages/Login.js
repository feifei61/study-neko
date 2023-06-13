import React from 'react';

const Login = () => {
    const onSubmit = () => {

    }

    return (
        <div className='h-screen bg-rose-200'>
            <div classname='flex flex-col justify-center h-full'>
                <div className='font-outfit text-center text-amber-950 text-lg pb-10 pt-20'>Login</div>
                <form onSubmit={onSubmit()}>
                    <div className='flex flex-col justify-center items-center mb-5'>
                        <label className='text-center font-outfit'>Email</label>
                        <input type='email' className='w-72 border-2 border-gray-300 opacity-100 font-outfit bg-white rounded-lg py-2 px-2 focus:ring-0'/>
                    </div>
                    <div className='flex flex-col justify-center items-center'>
                        <label className='text-center font-outfit'>Password</label>
                        <input type='password' className='w-72 border-2 border-gray-300 opacity-100 font-outfit bg-white rounded-lg py-2 px-2 focus:ring-0'/>
                    </div>
                </form>
            </div>
        </div>
    )
};

export default Login;