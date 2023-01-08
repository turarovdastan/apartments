




import axios from 'axios';

const URL= 'https://bayut.p.rapidapi.com/properties/list';

export const fetchApi = async() => {
    try {
        const { data } = await axios.get(URL, {
          params: {
            locationExternalIDs:5002,
            purpose:"For-sale",
            hitsPerPage:10,
            },
        headers: {
            'X-RapidAPI-Key': 'b506967006msh711bdc517f7f409p11dc99jsn8d7f50c8c915',
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
          }
          });
          console.log(data);
        return data;
        
  } catch (error) {
    console.log(error);
  }
};

