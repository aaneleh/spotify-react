import React from 'react'
import * as BsIcons from 'react-icons/bs'

function Player() {
    return (
        <div className="text-neutral-100 bg-neutral-800 grid grid-cols-[1fr,2fr,1fr] items-center  p-4">
            <div className='inline-flex gap-4 items-center'>
                <img className="object-cover w-24 h-24" src="/src/assets/musica_2.png" alt="" />
                <div className='grid content-center'>
                    <p >Cool with You</p>
                    <p className='text-neutral-400'>Her's</p>
                </div>
                <BsIcons.BsFillHeartFill className='text-xl'/> {/* <BsIcons.BsHeart/> */}
            </div>
            <div className='grid grid-cols-1 grid-rows-2 items-center w-full'>
                <div className='inline-flex items-center gap-4 place-self-center '>
                    <BsIcons.BsShuffle className='text-xl'/>
                    <BsIcons.BsFillSkipStartFill className='text-2xl'/>
                    <BsIcons.BsFillPauseFill className='text-4xl'/> {/* <BsIcons.BsFillPlayFill/> */}
                    <BsIcons.BsFillSkipEndFill className='text-2xl'/>
                    <BsIcons.BsRepeat className='text-xl'/>
                </div>
                <div className='inline-flex gap-4 items-center'>
                    <p>0:00</p>
                    <span className='bg-neutral-100 h-2 w-full rounded-2xl'></span>
                    <p>3:08</p>
                </div>
            </div>
            <div className='inline-flex gap-4 items-center justify-self-end text-2xl '> 
                <BsIcons.BsList/>
                <BsIcons.BsFillVolumeUpFill/>  {/* BsFillVolumeMuteFill - BsFillVolumeOffFill - BsFillVolumeDownFill - BsFillVolumeUpFill*/}
                <span className='bg-neutral-100 h-2 w-32 rounded-2xl'></span>
            </div>
        </div>
    )
}

export default Player;