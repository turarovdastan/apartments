// import axios from "axios";

// export const baseUrl= 'https://realty-in-ca1.p.rapidapi.com'


// /*const options = {
//   method: 'GET',
//   url: 'https://realty-in-ca1.p.rapidapi.com/properties/list-by-mls',
//   params: {ReferenceNumber: '30794904', CultureId: '1'},
//   headers: {
//     'X-RapidAPI-Key': 'b506967006msh711bdc517f7f409p11dc99jsn8d7f50c8c915',
//     'X-RapidAPI-Host': 'realty-in-ca1.p.rapidapi.com'
//   }
// };*/

// export const fetchApi = async (url) =>{
//     try {
//         const response = await axios.get(url, {
//             headers: {
//                 'X-RapidAPI-Key': 'b506967006msh711bdc517f7f409p11dc99jsn8d7f50c8c915',
//                 'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
//               }
//         })
        
//         console.log(response.data.hits);
//         //console.log(response.data.Results);
//         return response;
//     } catch (error) {
//         console.log("Error", error.message);
//     }
// };





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

