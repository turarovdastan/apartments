import axios from 'axios';

const URL= 'https://zillow56.p.rapidapi.com/search'


export const getPlacesData = async (sw, ne, coordinates, location, params) => {
    try {
        const {data} = await axios.get(URL, {
          params: {
            // long: '-117.435048', lat: '34.0922335', d: '1'
            ...location,
            ...params
          },
          headers: {
            'X-RapidAPI-Key': 'b506967006msh711bdc517f7f409p11dc99jsn8d7f50c8c915',
            'X-RapidAPI-Host': 'zillow56.p.rapidapi.com'
          }
          });
        return data || {results: []};
        
  } catch (error) {
    console.log(error);
  }
};
