import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '56002305-72176059533bc29105aa8638a';

export async function getImagesByQuery(query, page) {
  const response = await axios.get(BASE_URL, {
    params: {
      key: API_KEY,
      q: query,
      page,
      per_page: 15,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
    },
  });

  return response.data;
}