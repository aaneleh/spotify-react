import React from 'react';
import PlaylistCard from '../../components/PlaylistCard';
import PlaylistsJson from '../../data/playlists.json';

function Inicio() {

    return (
        <div className='flex flex-col items-start overflow-hidden bg-neutral-900 text-neutral-50 p-4'>
            
{/*             <div className='p-4'>
                <h2 className='text-2xl'>Tocados recentementes</h2>
                <div className="flex gap-4 overflow-hidden p-4">
                    <PlaylistCard id="1" img="playlist_1.png" titulo="Músicas Curtidas" quantidade="188"/>
                    <PlaylistCard id="2" img="playlist_2.png" titulo="This is Far Caspian" quantidade="52"/>
                </div>
            </div> */}

            <div className='p-4'>
                <h2 className='text-2xl'>Suas Playlists</h2>
                <div className="flex gap-4 overflow-auto p-4">
                    
                    { PlaylistsJson.map( (obj, i) => (
                        <PlaylistCard key={i} id={i} img={obj.imagem} titulo={obj.titulo}  quantidade={obj.musicas.length} />
                    ) ) }
                </div>
            </div>
            
{/*             <div className='p-4'>
                <h2 className='text-2xl'>Mais Ouvidos</h2>
                <div className="flex gap-4 overflow-auto p-4">
                    <PlaylistCard id="1" img="playlist_1.png" titulo="Músicas Curtidas" quantidade="188"/>
                    <PlaylistCard id="2" img="playlist_2.png" titulo="This is Far Caspian" quantidade="52"/>
                </div>
            </div>
 */}

        </div>
    )
}

export default Inicio;