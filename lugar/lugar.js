const axios = require('axios');

const getLugarLatLon = async(direccion) => {

    const encodeUlr = encodeURI(direccion);

    const instance = axios.create({
        baseURL: `https://community-open-weather-map.p.rapidapi.com/weather?q=${encodeUlr}`,
        headers: { 'x-rapidapi-key': '1bf86c5c31msh4866f2476e9f15ap1ed463jsnbb1adb809521' }
    });

    const response = await instance.get()

    if (response.data.length === 0) {
        throw new Error(`No hay resultados para ${direccion}`);
    }

    const data = response.data;
    const dir = data.name;
    const lat = data.coord.lat;
    const lon = data.coord.lon;

    return {
        dir,
        lat,
        lon
    }

}

module.exports = {
    getLugarLatLon
}