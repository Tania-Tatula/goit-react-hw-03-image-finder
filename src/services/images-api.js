import axios from "axios";

axios.defaults.baseURL = "https://pixabay.com";
const API_KIY = "21253837-b1ce1cf3df57506fc2e4b8a71";

const fetchImagesApi = ({
  searchQuery = "",
  imagesPage = 1,
  pageSize = 12,
}) => {
  return axios
    .get(
      `/api/?q=${searchQuery}&page=${imagesPage}&key=${API_KIY}&image_type=photo&orientation=horizontal&per_page=${pageSize}`
    )
    .then((response) => response.data.hits);
};

export default fetchImagesApi;
