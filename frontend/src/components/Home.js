import React, { useState } from 'react'
import stdby from '../resources/Neko_Standby.gif'
import eat from '../resources/Neko_eat.gif'
import Timer from './Timer';

const Home = () => {
    const [gifUrl, setGifUrl] = useState(stdby);
    const [isPlaying, setIsPlaying] = useState(false);
    const [earnings, setEarnings] = useState(0)

    const feed = () => {
        setIsPlaying(true)
        setGifUrl(eat)
        setTimeout(() => {
            setIsPlaying(false);
            setGifUrl(stdby);
          }, 1500);
    }

    return (
        <div class='h-screen flex flex-col justify-center items-center'>
            <h1 class='text-5xl text-zinc-500 font-outfit'>
                Study Neko
            </h1>

            <div class='flex items-end'>
                <img src={gifUrl} class='w-1/4'/>
                <div>
                    
                </div>
            </div>

            <Timer earnings={earnings} setEarnings={setEarnings}/>
            <h1>{earnings}</h1>
            <br/>
            <button onClick={feed} class='bg-rose-400 hover:bg-rose-300 font-outfit text-white font-bold py-2 px-4 border-b-4 border-rose-600 hover:border-rose-400 rounded active:border-0'>Feed</button>
        </div>
    )
}

export default Home