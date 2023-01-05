import React from 'react'
import { useNavigate } from 'react-router-dom'

const Card = (props) => {
    const navigate = useNavigate()
    return (
        <div className='w-[35%] text-center md:w-64 h-fit  p-4 rounded-xl hover:scale-[1.1] transition-all my-8 mx-0 md:my-8 md:mx-6 border-[2px]'>
            <img src={props.img} alt="meme"/>
            <div>
                <div className="title text-xs my-[0.5rem] md:text-xl md:my-4">{props.title}</div>
                <button onClick={e => navigate(`/edit?url=${props.img}`)} className='bg-indigo-700 hover:bg-indigo-900 text-xs md:text-xl px-5 py-[0.5rem] md:px-4 md:py-2 rounded-lg '>Edit now</button>
            </div>


        </div>
    )
}

export default Card