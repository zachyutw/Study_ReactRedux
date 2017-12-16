import React, {Component} from 'react';
import {connect} from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/google_map';

class WeatherList extends Component {
    renderWeather(cityDate)
    {
        const temps = cityDate.list.map(weather => weather.main.temp);
        const pressures = cityDate.list.map(weather => weather.main.pressure);
        const humidities = cityDate.list.map(weather => weather.main.humidity);
        const {lon,lat} = cityDate.city.coord;
        

        return (
            <tr key={cityDate.city.name}>
                <td>{cityDate.city.name} <GoogleMap lon={lon} lat={lat}/></td>
                <td>
                    <Chart data={temps} color="red" unit="K"/>
                </td>
                <td>
                    <Chart data={pressures} color="green" unit="hPa"/>
                </td>
                <td>
                    <Chart data={humidities} color="blue" unit="%"/>
                </td>
            </tr>
        );
    }

    render() 
    {
        return (
            <table className = "table table-hover">
                <thead>
                    <tr>
                        <th> City </th>
                        <th> Temperature (K)</th>
                        <th> Pressure (hPa)</th>
                        <th> Humidity (%)</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>
        );
    }
}

function mapStateToProps({weather})
{
    return {weather:weather};
}

export default connect (mapStateToProps)(WeatherList);