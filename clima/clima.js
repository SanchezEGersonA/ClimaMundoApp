const axios = require('axios');

const getClima = async(lat, lon) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=a862a76de5120a7a0f47ce4ded96774d&units=metric`);

    return resp.data.main.temp;

}

module.exports = {
    getClima
}