import Health from "./Health"
import LinearProgress from '@mui/material/LinearProgress'

type Props = {
    earnings: number;
    health: number;
}

const Status = ({ earnings, health } : Props) => {

    return (
        <div className='w-full text-white font-outfit flex justify-center gap-10 md:w-1/4 '>
            <div className="w-10 bg-amber-400 text-center text-amber-700 font-semibold rounded border-2 border-amber-500">
                <span>${' '}</span>
                {earnings}
            </div>
            <div className='self-center w-52'>
                {/* <LinearProgress variant="determinate" color="success" thickness={4} value={health}/> */}
                <Health health={health} />
            </div>
        </div>
    )
}

export default Status