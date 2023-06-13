import React, { useState, useEffect } from 'react'

const pomodoro = [
  {label: 'focus', duration: 60*25},
  {label: 'short break', duration: 60*5},
  {label: 'long break', duration: 60*15},
];

const Timer = ({earnings, setEarnings}) => {
    const [timeLeft, setTimeLeft] = useState(pomodoro[0].duration)
    const [isRunning, setIsRunning] = useState(false)
    const [pCount, setPCount] = useState(0)
    const [currentBlock, setCurrentBlock] = useState(pomodoro[1].duration)

    const minutes = Math.floor(timeLeft / 60).toString().padStart(2, '0');
    const seconds = (timeLeft % 60).toString().padStart(2, '0');

    useEffect(() => {
        let intervalId;
    
        if (isRunning && timeLeft > 0) {
          intervalId = setInterval(() => {
            setTimeLeft(prevTime => prevTime - 1);
            if (timeLeft%(60*10) === 0) {
                setEarnings(prev => prev + 1)
            }
          }, 1000);

        } else if (timeLeft === 0) {
          setIsRunning(false);

          //go to next interval
          if (currentBlock === pomodoro[0].label) {
            setPCount(pCount + 1)
            if (pCount === 4) {
              setCurrentBlock(pomodoro[2].label)
              setTimeLeft(pomodoro[2].duration)
              setPCount(0)
            } else {
              setCurrentBlock(pomodoro[1].label)
              setTimeLeft(pomodoro[1].duration)
            }
          } else {
            setCurrentBlock(pomodoro[0].label)
            setTimeLeft(pomodoro[0].duration)
          }
        }
    
        return () => clearInterval(intervalId);
      }, [isRunning, timeLeft]);

    const handleTimer = () => {
        setIsRunning(!isRunning)
    }

    return (
        <div class=''>
            <h2 class='text-center font-outfit font-semibold text-grey-700'>Timer</h2>
            <h3 class='text-center font-outfit text-grey-700 mb-5'>{minutes}:{seconds}</h3>
            <button onClick={handleTimer} class='relative left-1/2 -translate-x-1/2 bg-rose-400 w-[100px] hover:bg-rose-300 font-outfit text-center text-white font-bold py-2 px-4 border-b-4 border-rose-600 hover:border-rose-400 rounded active:border-0'>{isRunning ? "Pause" : "Start"}</button>
        </div>
    )
}

export default Timer