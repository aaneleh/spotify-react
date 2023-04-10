import React from 'react';
import * as BsIcons from 'react-icons/bs'

function Album() {
    return (
        <div className='overflow-hidden bg-neutral-900 text-neutral-50 p-4 pt-32'>

            <header className='flex gap-8'>
                <div className='w-64'>
                    <img src="./../src/assets/musica_2.png" alt="" />
                </div>
                <div className='flex flex-col gap-4'>
                    <h2 className='text-6xl font-bold'>Today</h2>
                    <p>24 músicas, 1h 23min</p>
                </div>
            </header>

            <div className='flex items-center gap-12 pb-6 pt-6'>
                <BsIcons.BsFillPlayCircleFill className='text-6xl'/>
                <BsIcons.BsFillHeartFill className='text-4xl'/> {/* <BsIcons.BsHeart/> */}
            </div>

            <div className='grid auto-rows-min gap-2'>

                <header className='grid grid-cols-8 gap-4 border-b-2 border-neutral-700 pb-2'>
                    <p>#</p>
                    <p className='col-span-6'>Título</p>
                    <BsIcons.BsClock/>
                </header>

                <div className='grid grid-cols-8 gap-4 items-center'>
                    <p>1</p>
                    <div className='flex col-span-4'>
                        <div className='w-16 pr-2'>
                            <img src="./../src/assets/musica_2.png" alt="" />
                        </div>
                        <div className='grid content-center'>
                            <p>Today</p>
                            <p className='text-neutral-400'>Far Caspian</p>
                        </div>
                    </div>
                    <div className='flex justify-between items-center col-span-2'>
                        <BsIcons.BsHeart/> {/* <BsIcons.BsHeart/> */}
                    </div>
                    <p>2:46</p>
                </div>

            </div>
        </div>
    )
}

export default Album;