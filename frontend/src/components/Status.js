const Status = ({earnings}) => {

    return (
        <div className='w-1/4 text-white font-outfit'>
            <div className="w-10 bg-amber-400 text-center text-amber-700 font-semibold rounded border-2 border-amber-500">
                <span>${' '}</span>
                {earnings}
            </div>
        </div>
    )
}

export default Status