import {useState, useEffect} from 'react';
import Anime from './Anime';

const MyList = () => {
  const [anime, setAnime] = useState([]);
  const [isEmpty, setIsEmpty] = useState(true);  

  useEffect(() => {
    
    const list = []; 

    for (const key in localStorage) {
      if (localStorage.hasOwnProperty(key)) {
        list.push(JSON.parse(localStorage.getItem(key)));
      }
    } 

    setAnime(list);
    setIsEmpty(localStorage.length === 0);
    
  }, []);

  useEffect(() => {
    const handleStorageChanged = () => {
      const list = [];

      for (const key in localStorage) {
        if (localStorage.hasOwnProperty(key)) {
          list.push(JSON.parse(localStorage.getItem(key)));
        }
      }

      setAnime(list);
      setIsEmpty(localStorage.length === 0);
    };

    window.addEventListener('storageChanged', handleStorageChanged);

    return () => {
      window.removeEventListener('storageChanged', handleStorageChanged);
    };
  }, []);
  
  return (
    <>  
      {isEmpty && <p>Your list is empty</p>}

      {anime && anime.map(anime => { 
        return <Anime {...anime} key={anime.id} />;
      })}
    </>
  )
};

export default MyList;
