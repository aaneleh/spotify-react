import React from 'react'
import * as BsIcons from 'react-icons/bs'
import { Link } from "react-router-dom"

function Sidebar() {
    return (
      <div className="bg-[#000] text-white p-4 flex flex-col gap-24 sticky top-0 left-0">
        <div className='flex flex-col gap-4'>
          <h3 className='inline-flex text-lg items-center gap-2'> <BsIcons.BsSearch/> Buscar </h3>
          <Link to="/">
            <h3 className='inline-flex text-lg items-center gap-2'> <BsIcons.BsFillCollectionFill/> Sua Biblioteca</h3>
          </Link>
          <Link to="/playlist/0">
            <h3 className='inline-flex text-lg items-center gap-2'> <BsIcons.BsFillHeartFill/> Músicas Curtidas</h3>
          </Link>
        </div>
        <div>
          <h3 className='inline-flex text-lg items-center justify-between w-full gap-2 border-b-2 border-neutral-400 pb-2'>
            <span>Playlists</span>
            <span><BsIcons.BsPlusLg/></span>
          </h3>
        </div>
      </div>
    )
}

export default Sidebar;