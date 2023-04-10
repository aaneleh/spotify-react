import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route} from "react-router-dom"

import Sidebar from './components/Sidebar'
import Player from './components/Player'
import Inicio from './pages/Inicio'
import Playlist from './pages/Playlist'
import Album from './pages/Album'

import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(

  <BrowserRouter className='flex flex-col min-h-full'>
      <div className="flex pb-32">
          <aside className="w-1/5 min-w-max">
            <Sidebar/>
          </aside>

          <div className="w-4/5">
            <Routes>
              <Route path="/" element={<Inicio/>} />
              <Route path="/playlist/:playlistId" element={<Playlist/>} />
              <Route path="/album/:albumId" element={<Album/>} />
            </Routes>
          </div>
      </div>
      <footer className='fixed bottom-0 left-0 w-full'>
        <Player/>
      </footer>
  </BrowserRouter>
)
