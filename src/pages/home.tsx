'use client';
import React, { useState } from 'react'
import stdby from '../../public/resources/Neko_Standby.gif'
import eat from '../../public/resources/Neko_eat.gif'
import show_food from '../resources/show_food.gif'
import food from '../../public/resources/food.png'
import Timer from '../components/Timer';
import classNames from 'classnames';
import Status from '../components/Status'
import {Person20Filled} from '@fluentui/react-icons'
import Link from 'next/link';

const HomePage = () => {
    const [gifUrl, setGifUrl] = useState(stdby);
    const [isPlaying, setIsPlaying] = useState(false);
    const [earnings, setEarnings] = useState(0)
    const [showModal, setShowModal] = useState(false);

    const treatPrice = 3
    const mealPrice = 10
    const feastPrice = 30

    const modal = () => {
        return (
            <div className='fixed flex h-screen w-screen justify-center items-center'>
                <div className="w-1/4 p-4 overflow-x-hidden overflow-y-auto max-h-full">
                    <div className="relative w-full max-w-2xl max-h-full border-4 rounded-lg border-amber-500">
                        <div className="relative bg-amber-100 rounded">
                            <div className="pt-5 px-20">
                                <p className="font-outfit text-center text-base leading-loose text-amber-700">
                                    Insufficient coins :(
                                </p>
                            </div>
                            <div className="flex justify-center items-center py-2 space-x-2 rounded-b">
                                <button onClick={() => {setShowModal(false)}} type="button" className="font-outfit text-white px-3 py-1 bg-rose-500 border-b-2 border-rose-600 hover:bg-rose-600 rounded ">Oke</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    const feed = () => {
        setIsPlaying(true)
        setGifUrl(eat)
        setTimeout(() => {
            setIsPlaying(false);
            setGifUrl(stdby);
          }, 1500);
    }

    const treat = () => {
        if (earnings < treatPrice) {
            setShowModal(true)
            return
        }

        feed()
        setEarnings(earnings-treatPrice)
    }

    const meal = () => {
        if (earnings < mealPrice) {
            setShowModal(true)
            return
        }

        feed()
        setEarnings(earnings-mealPrice)
    }

    const feast = () => {
        if (earnings < feastPrice) {
            setShowModal(true)
            return
        }

        feed()
        setEarnings(earnings-feastPrice)
    }

    return (
        <div className='h-screen justify-center items-center bg-rose-200'>
            {showModal && modal()}

            <Link href='/login' className='absolute flex justify-end w-full opacity-50'>
                <div className='m-5 w-10 h-10 rounded-lg bg-gray-500 flex justify-center items-center'>
                    <Person20Filled className='text-white w-6 h-6'/>
                </div>
            </Link>

            <h1 className='text-5xl text-center py-10 text-zinc-500 font-outfit'>
                Study Neko
            </h1>

            <div className='w-full flex flex-col justify-center items-center'>
                <Status
                    earnings = {earnings}
                />
                <img src={gifUrl.src} className='w-1/2 md:w-1/3 lg:w-1/4'/>
            </div>

            <div className='flex gap-3 justify-center'>
                <button onClick={treat} className='bg-amber-400 hover:bg-amber-200 font-outfit text-amber-700 font-bold border-b-4 border-amber-500 hover:border-amber-400 rounded active:border-0'>
                    <img src={food.src} className='w-20 -mb-5'/>
                    <div className='text-sm'>treat</div>
                    <div className='text-sm'>$3</div>
                </button>
                <button onClick={meal} className='bg-amber-400 hover:bg-amber-200 font-outfit text-amber-700 font-bold border-b-4 border-amber-500 hover:border-amber-400 rounded active:border-0'>
                    <img src={food.src} className='w-20 -mb-5'/>
                    <div className='text-sm'>meal</div>
                    <div className='text-sm'>$10</div>
                </button>
                <button onClick={feast} className='bg-amber-400 hover:bg-amber-200 font-outfit text-amber-700 font-bold border-b-4 border-amber-500 hover:border-amber-400 rounded active:border-0'>
                    <img src={food.src} className='w-20 -mb-5'/>
                    <div className='text-sm'>FEAST</div>
                    <div className='text-sm'>$30</div>
                </button>
            </div>
            
            <br/>
            <div className='object-center'>
                <Timer earnings={earnings} setEarnings={setEarnings}/>
            </div>
        </div>
    )
}

export default HomePage