import axios from "axios";
// import.meta.env.VITE_API_KEY;

const BASE_URL='https://youtube138.p.rapidapi.com';

const options = {
    
    params: {
      hl: 'en',
      gl: 'US'
    },
    headers: {
      'X-RapidAPI-Key': process.env.REACT_APP_YOUTUBE_API_KEY,
      'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
    }
  };


export const fetchDataFromApi = async (url) => {
    const {data} = await axios.get (`${BASE_URL}/${url}`, options);
    return data;
}