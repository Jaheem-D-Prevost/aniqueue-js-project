import {useState, useEffect} from 'react'; 
import AnimeList from './AnimeList';
import MyList from './MyList';
import Tabs from './styles/Tabs.styled';
import SearchBar from './SearchBar';
import StyledSection from './styles/Section.styled';

const baseUrl = 'https://api.jikan.moe/v4/anime';

const Lists = () => {
  const [tab, setTab] = useState(1);
  const [anime, setAnime] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [query, setQuery] = useState('');
  
  const getInput = (e) => {
    setQuery(e.target.value.toLowerCase());
  };

  const searchQuery = (e) => {
    setAnime('');
    const queryUrl = `${baseUrl}?q=${query}`;

    const fetchData = async (url) => {
      setIsLoading(true);

      try {
        e.target.previousSibling.value = '';
        setQuery('');
        const response = await fetch(url);
        const anime = await response.json();
        setAnime(anime.data);
        setIsLoading(false);
      } catch(error) {
        console.log(error);
      }
    };

    fetchData(queryUrl);
  };

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      try {
        const response = await fetch(baseUrl);
        const anime = await response.json();
        setAnime(anime.data);
        setIsLoading(false);
      } catch(error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const toggleTab = (index) => {
    setTab(index);
  }
  
  return (
    <> 
      <StyledSection>
        <div className={tab === 2 ? 'controls center' : 'controls'}>
          <Tabs className='tabs'>
            <p className={tab === 1 ? 'active' : ''} onClick={() => toggleTab(1)}>Anime</p>
            <p className={tab === 2 ? 'active' : ''} onClick={() => toggleTab(2)}>My List</p>
          </Tabs>

          {tab === 1 &&  
          <SearchBar className='search-bar' handleChange={getInput} handleClick={searchQuery}/>}
        </div>

        <div className='list'>
          {tab === 1 ? <AnimeList anime={anime} isLoading={isLoading} /> : <MyList />}
        </div>
      </StyledSection>
    </>
  )
}

export default Lists;
