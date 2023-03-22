import {useState, useEffect} from 'react';
import Anime from './Anime'; 

const AnimeList = ({isLoading, anime}) => {
 

  return (
    <>
    {isLoading && <i className="fas fa-spinner fa-spin"></i>}

    {anime && anime.map(anime => {
       if (typeof anime.title === 'string' && anime.title.length > 23) {
        anime.title = anime.title.slice(0, 23) + '...';
      } 
  
      if (typeof anime.synopsis === 'string' && anime.synopsis.length > 50) {
        anime.synopsis = anime.synopsis.slice(0, 50) + '...';
      }

      const animeData = {
        id: anime.mal_id,
        cover: anime.images.jpg.image_url,
        title: anime.title,
        rating: anime.rating,
        status: anime.status,
        episodes: anime.episodes,
        duration: anime.duration,
        synopsis: anime.synopsis
      }; 
      
      return <Anime {...animeData} key={animeData.id}/>
    })}
    </>
  )
}

export default AnimeList;
