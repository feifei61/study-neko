import React from "react"
import LinearProgress from '@mui/material/LinearProgress'
import { styled } from '@mui/material/styles';
import heart from '../../public/resources/heart.png'

type Props = {
    health: number;
}

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 10,
    borderRadius: 5,
  }));

const Health = ({health}: Props) => {


    return (
        <div className="flex items-center">
            <img src={heart.src} className='w-7 h-7 translate-x-2 z-50'/>
            <BorderLinearProgress className='w-full' variant="determinate" color="success" value={health}/>
        </div>
    )
}

export default Health