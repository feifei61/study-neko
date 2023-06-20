import React from "react"
import LinearProgress from '@mui/material/LinearProgress'
import { styled } from '@mui/material/styles';

type Props = {
    health: number;
}

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 10,
    borderRadius: 5,
  }));

const Health = ({health}: Props) => {


    return (
        <BorderLinearProgress variant="determinate" color="success"/>
    )
}

export default Health