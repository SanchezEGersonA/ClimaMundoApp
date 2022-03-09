// const axios = require('axios');
const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('yargs').options({
    direccion: {
        demand: true,
        alias: 'd',
        desc: 'Descripcion de la ciudad para obtener el clima'
    }
}).argv;

// argv.direccion
// lugar.getLugarLatLon(argv.direccion)
//     .then(console.log)
//     .catch(console.log);

// clima.getClima(40.42, -3.7)
//     .then(console.log)
//     .catch(console.log);

const getInfo = async(direccion) => {

    try {

        const coords = await lugar.getLugarLatLon(direccion);
        const temp = await clima.getClima(coords.lat, coords.lon);

        return `El clima de ${direccion} es de ${temp}`;

    } catch (e) {
        return `No se pudo de terminar el clima de ${direccion}° C`;
    }

}

getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log);