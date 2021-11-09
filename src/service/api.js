import axios from 'axios';

axios.defaults.baseURL = "https://pixabay.com/api/";
  
const setParams = (searchQuery, pagePagination) =>
  (axios.defaults.params = {
    key: "23749479-af26a543787f3771d684a474e",
    q: searchQuery,
    image_type: "photo",
    orientation: "horizontal",
    safesearch: "true",
    page: pagePagination,
    per_page: 12
  });

export async function getDataServer(searchQuery, pagePagination) {
  setParams(searchQuery, pagePagination);
  try {
    const response = await axios.get();
    return response.data.hits;
  }
  catch (error) {
    console.log('error: ', error);
    throw error;
  }
};
