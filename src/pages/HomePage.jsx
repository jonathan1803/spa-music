import axios from 'axios';
import { useEffect, useState } from 'react';

import BtnPrimary from '../componetns/BtnPrimary';
import { Card } from '../componetns/Card';

export const HomePage = ({searchValue}) => {
  const [searchResults, setSearcResult] = useState([]);

  const apiKey = 'e24e0a4223msh737a1abf6f391b3p1d5b61jsn447d2245bf79';
  // Lista de términos de búsqueda genéricos (artistas populares)
  const randomArtists = ['The Beatles', 'Ariana Grande', 'Ed Sheeran', 'Drake', 'Coldplay', 'Taylor Swift', 'Beyoncé'];

  // Función para obtener un artista aleatorio de la lista
  const getRandomArtist = () => {
    return randomArtists[Math.floor(Math.random() * randomArtists.length)];
  };

  //api deezer
  const searchForArtist = async (artistName='') => {
    try {
      const response = await axios.get('https://deezerdevs-deezer.p.rapidapi.com/search', {
        params: {
          q: artistName,
        },
        headers: {
          'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com',
          'X-RapidAPI-Key': apiKey,
        },
      });
      setSearcResult(response.data.data);
      console.log(response.data)
    } catch (error) {
      console.error(error);
    }
  };
 // Buscar artistas aleatorios al cargar la página
 useEffect(() => {
  if (!searchValue) {
    const randomArtist = getRandomArtist();
    searchForArtist(randomArtist);  // Busca un artista aleatorio al cargar
  } else {
    searchForArtist(searchValue);  // Busca el artista ingresado por el usuario
  }
}, [searchValue]);
  return (
    <div className="mx-auto px-4 py-4 flex flex-col items-start items-center  w-full h-screen space-y-4 ">
      <div className="flex space-x-4">
        <BtnPrimary text={'Todo'} />
        <BtnPrimary text={'Musica'} />
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 "> {/* Usar grid aquí */}
        {searchResults.length > 0 ? (
          searchResults.map((data) => (
            <Card
              album={data.album.title}
              key={data.id}
              srcImg={data.album.cover_medium}
              artist={data.artist.name}
            />
          ))
        ) : (
          <p className="text-white">No se encontraron resultados.</p>
        )}
      </div>
    </div>
  );
};
