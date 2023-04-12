import React from 'react';
import * as BsIcons from 'react-icons/bs'
import { useParams } from "react-router-dom"
import AlbunsJson from '../../data/albuns.json';

function Album() {

    const { albumId } = useParams()
    const AlbumSelecionado = AlbunsJson[albumId]

    let duracaoAlbum = 0
    AlbumSelecionado.musicas.map((musica, i) => (
        duracaoAlbum += musica.duracao
    ))
    if (duracaoAlbum > 60) {
        const hora = Math.floor(duracaoAlbum/60)
        const minutos = Math.round(duracaoAlbum%60)
        duracaoAlbum = hora + "h " + minutos + "min"
    } else {
        const minutos = Math.floor( (duracaoAlbum*60) /60) 
        const segundos = Math.round( (duracaoAlbum*60) %60)
        duracaoAlbum = minutos + "min " + segundos + "s" 
    }

    function getDuracaoMusica(idMusica){
        const duracao = AlbunsJson[albumId].musicas[idMusica].duracao*60 
        const minutos =  Math.floor(duracao/60)
        const segundos = Math.round(duracao%60)
        return segundos >= 10 ?
            minutos+":"+segundos   :   minutos+":0"+segundos
    }

    return (
        <div className='overflow-hidden bg-neutral-900 text-neutral-50 p-4 pt-32'>

            <header className='flex gap-8'>
                <div className='w-64'>
                    <img src="./../src/assets/musica_2.png" alt="" />
                </div>
                <div className='flex flex-col gap-4'>
                    <h2 className='text-6xl font-bold'> {AlbumSelecionado.titulo} </h2>
                    <p>  {AlbumSelecionado.musicas.length} músicas, {duracaoAlbum}</p>
                </div>
            </header>

            <div className='flex items-center gap-12 pb-6 pt-6'>
                <BsIcons.BsFillPlayCircleFill className='text-6xl'/>
                <BsIcons.BsFillHeartFill className='text-4xl'/>
            </div>

            <div className='grid auto-rows-min gap-2'>

                <header className='grid grid-cols-8 gap-4 border-b-2 border-neutral-700 pb-2'>
                    <p>#</p>
                    <p className='col-span-6'>Título</p>
                    <BsIcons.BsClock/>
                </header>

                { AlbumSelecionado.musicas.map( (obj, i) => (
                    <div className='grid grid-cols-8 gap-4 items-center' key={i}>
                        <p>{i + 1}</p>
                        <div className='flex col-span-4'>
                            <div className='w-16 pr-2'>
                                <img src={"./../src/assets/"+ AlbumSelecionado.imagem} />
                            </div>
                            <div className='grid content-center'>
                                <p> {obj.titulo} </p>
                                <p className='text-neutral-400'> {AlbumSelecionado.artista} </p>
                            </div>
                        </div>
                        <div className='flex justify-between items-center col-span-2'>
                            <BsIcons.BsHeart/> 
                        </div>
                        <p> {getDuracaoMusica(i)} </p>
                    </div>
                ) )} 

            </div>
        </div>
    )
}

export default Album;