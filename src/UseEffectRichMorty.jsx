
import React,{useState,useEffect} from "react";
import axios from 'axios';

const UseEffectRichMortyApi = () => {
    const [dataType, setDataType] = useState('characters');
    const [items, setItems] = useState([]);
  
   
    useEffect(() => {
      const fetchData = async () => {
        try {
          let url = '';
  
         
          if (dataType === 'characters') {
            url = 'https://rickandmortyapi.com/api/character';
          } else if (dataType === 'episodes') {
            url = 'https://rickandmortyapi.com/api/episode';
          } else if (dataType === 'locations') {
            url = 'https://rickandmortyapi.com/api/location';
          }
  
          // Fetch the data using axios
          const response = await axios.get(url);
  
         
          setItems(response.data.results);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
  
      fetchData();
    }, [dataType]); // Re-fetch data when dataType changes
  
    return (
      <div>
       
        <select onChange={(e) => setDataType(e.target.value)} value={dataType}>
         
         <option value="characters">Characters</option>
          <option value="episodes">Episodes</option>
          <option value="locations">Locations</option>
        </select>
  
        <h2>{dataType.charAt(0).toUpperCase() + dataType.slice(1)}</h2>
  
       
        <ul>
          {items.map((item) => (
            <li key={item.id}>
              {item.id}: {item.name}
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default UseEffectRichMortyApi
  
