import axios from 'axios';
const API_KEY = '947a3443ff7cb90895f02f961e809471';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`; //ES6 syntax
//middleware like a gate keeper
//build a ajax request

//use vaiable to handle the function action type.
export const FETCH_WEATHER  = 'FETCH_WEATHER';

export function fetchWeather(city){
    const url = `${ROOT_URL}&q=${city},us`;
    const request = axios.get(url);

    console.log('Request', request);
    return {
        type: FETCH_WEATHER,
        payload: request
    };

}