import axios from 'axios';

const fetchPhotosWithQuery = async (searchQuery, pageNumber) => {
  const response = await axios.get(
    `https://pixabay.com/api/?q=${searchQuery}&page=${pageNumber}&key=31557742-046ac504811e73e74d3b06594&image_type=photo&orientation=horizontal&per_page=12`
  );
  return response.data;
};

export default fetchPhotosWithQuery;
