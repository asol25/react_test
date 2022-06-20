import axios from "axios";

const movie_Service = async () => {
    const options = {
        method: 'GET',
        url: 'https://course-api.com/react-tabs-project',
        params: { id: 'tt1375666' },
        headers: {
            'X-RapidAPI-Key': 'db21b2c795msh55e8ed917248bbdp1e73ebjsna509c2266877',
            'X-RapidAPI-Host': 'movie-details1.p.rapidapi.com'
        }
    };

    let response = await axios.request(options);
    return response.data;
}
export default movie_Service; 