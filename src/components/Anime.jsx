import { useState, useEffect } from 'react';
import Item from './styles/Item.styled'; 
import Button from './Button';

const Anime = (props) => {
  const [inList, setInList] = useState(false);

  const {
    id,
    cover, 
    title, 
    rating, 
    status, 
    episodes, 
    duration, 
    synopsis} = props;

  useEffect(() => {
    if (localStorage.getItem(id) !== null) {
      setInList(true);
    } else {
      setInList(false);
    }
  }, [localStorage.getItem(id)]);   

  const addItem = (state) => {
    const anime = JSON.stringify(props);
    localStorage.setItem(id, anime);
    state(true);
    const event = new Event('storageChanged');
    window.dispatchEvent(event);
  };

  const removeItem = (state) => {
    localStorage.removeItem(id);
    state(false);
    const event = new Event('storageChanged');
    window.dispatchEvent(event);
  };

  const handleClick = inList ? removeItem : addItem;
  const text = inList ? 'Remove' : 'Add';
  const className = inList ? 'remove-btn' : 'add-btn';

  return (
    <Item>  
      <img className="anime-cover" src={cover} alt={title || 'N/A'} />
     
      <div className="anime-info">
        <header className="anime-header"> 
          <p className="title">{title || 'N/A'}</p>
   
          <Button handleClick={handleClick} text={text} className={className} setInList={setInList}/> 
        </header>

        <p className="rating">Rating: {rating || 'N/A'}</p>
        <p className="status">Status: {status || 'N/A'}</p>
        <p className="episodes">Episode Count: {episodes || 'N/A'}</p>
        <p className="duration">Duration: {duration || 'N/A'}</p>
       
        <p className="synopsis">Synopsis: {synopsis || 'N/A'}</p>
      </div>
    </Item>
  )
};

export default Anime;
