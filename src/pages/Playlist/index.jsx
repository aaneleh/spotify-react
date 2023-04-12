import React from 'react';
import * as BsIcons from 'react-icons/bs'
import { Link, useParams } from "react-router-dom"
import PlaylistsJson from '../../data/playlists.json';
import AlbunsJson from '../../data/albuns.json';


function Playlist() {

    const { playlistId } = useParams()
    const playlistSelecionada = PlaylistsJson[playlistId]

    function getTituloAlbum(idAlbum){
        return AlbunsJson[idAlbum].titulo
    }
    function getArtistaAlbum(idAlbum){
        return AlbunsJson[idAlbum].artista
    }
    function getImagemAlbum(idAlbum){
        return AlbunsJson[idAlbum].imagem
    }
    function getTituloMusica(idAlbum, idMusica){
        return AlbunsJson[idAlbum].musicas[idMusica].titulo
    }
    function getDuracaoFloatMusica(idAlbum, idMusica){
        return AlbunsJson[idAlbum].musicas[idMusica].duracao
    }
    function getDuracaoMusica(idAlbum, idMusica){
        const duracao = AlbunsJson[idAlbum].musicas[idMusica].duracao*60 
        const minutos =  Math.floor(duracao/60)
        const segundos = Math.round(duracao%60)
        return segundos >= 10 ?
            minutos+":"+segundos   :   minutos+":0"+segundos
    }

    let duracaoPlaylist = 0
    playlistSelecionada.musicas.map((musica, i) => (
        duracaoPlaylist += getDuracaoFloatMusica(musica.idAlbum, musica.idMusica)
    ))
    if (duracaoPlaylist > 60) {
        const hora = Math.floor(duracaoPlaylist/60)
        const minutos = Math.round(duracaoPlaylist%60)
        duracaoPlaylist = hora + "h " + minutos + "min"
    } else {
        const minutos = Math.floor( (duracaoPlaylist*60) /60) 
        const segundos = Math.round( (duracaoPlaylist*60) %60)
        duracaoPlaylist = minutos + "min " + segundos + "s" 
    }

    return (
        <div className='overflow-hidden bg-neutral-900 text-neutral-50 p-4 pt-32'>

            <header className='flex gap-8'>
                <div className='w-64'>
                    <img src="./../src/assets/playlist_2.png" alt="" />
                </div>
                <div className='flex flex-col gap-4'>
                    <h2 className='text-6xl font-bold'> {playlistSelecionada.titulo} </h2>
                    <p> {playlistSelecionada.musicas.length} músicas, {duracaoPlaylist}</p> 
                </div>
            </header>

            <div className='flex items-center gap-12 pb-6 pt-6'>
                <BsIcons.BsFillPlayCircleFill className='text-6xl'/>
                <BsIcons.BsFillHeartFill className='text-4xl'/> {/* <BsIcons.BsHeart/> */}
            </div>

            <div className='grid auto-rows-min gap-2'>

                <header className='grid grid-cols-8 gap-4 border-b-2 border-neutral-700 pb-2'>
                    <p>#</p>
                    <p className='col-span-3'>Título</p>
                    <p className='col-span-3'>Album</p>
                    <BsIcons.BsClock/>
                </header>

                { playlistSelecionada.musicas.map( (obj, i) => (
                    <div className='grid grid-cols-8 gap-4 items-center' key={i}>
                        <p>{i + 1}</p>
                        <div className='flex col-span-3'>
                            <div className='w-16 pr-2'>
                                <img src={"./../src/assets/"+ getImagemAlbum(obj.idAlbum)} />
                            </div>
                            <div className='grid content-center'>
                                <p> {getTituloMusica(obj.idAlbum, obj.idMusica)} </p>
                                <p className='text-neutral-400'> {getArtistaAlbum(obj.idAlbum)} </p>
                            </div>
                        </div>
                        <div className='flex justify-between items-center col-span-3'>
                            <Link to={"/album/"+obj.idAlbum} className='hover:underline'>
                                <p> {getTituloAlbum(obj.idAlbum)} </p>
                            </Link>
                            <BsIcons.BsHeart/> {/* <BsIcons.BsHeart/> */}
                        </div>
                        <p> {getDuracaoMusica(obj.idAlbum, obj.idMusica)} </p>
                    </div>
                ) )}

            </div>
        </div>
    )
}

export default Playlist;