import React, { Component } from "react";
import Cities from "cities";
import axios from "axios";
import "./Weather.css";
import Search from "./Search";
import Api from "./Api";
import DatePut from "./DatePut";
import Location from "./Location";
import WeatherIcon from "./WeatherIcon";
import Forecast from "./Forecast";

export default class Weather extends Component {
  static Cities = {
    city: Cities.string.isRequired,
  };

  state = {
    city: this.props.city,
  };

  componentWillMount() {
    this.update(this.state.city);
  }

  updateWeatherInfos(Weatherinfos) {
    let url = `${Api.url}/data/2.5/weather?appid=${Api.key}&units=metric&${Weatherinfos}`;
    axios.get(url).then((response) => {
      this.setState({
        city: response.data.name,
        weather: {
          description: response.data.weather[0].main,
          icon: response.data.weather[0].icon,
          precipitation: Math.round(response.data.main.humidity) + "%",
          temperature: Math.round(response.data.main.temp),
          time: new DatePut(new Date(response.data.dt * 1000)).dayTime(),
          wind: Math.round(response.data.wind.speed) + "km/h",
        },
      });
    });
  }

  updateLatitudeAndLongitude = (latitude, longitude) => {
    this.updateWeatherInfos(`lat=${latitude}&lon=${longitude}`);
  };

  refresh = (city) => {
    this.updateWeatherInfos(`q=${city}`);
  };

  render() {
    if (this.state.weather) {
      return (
        <div>
          <div className="clearfix">
            <Search update={this.update} />
            <Location update={this.updateLatitudeAndLongitude} />
          </div>

          <div className="weather-summary">
            <div className="weather-summary-header">
              <h1>{this.state.city}</h1>
              <div className="weather-detail__text">
                {this.state.weather.time}
              </div>
              <div className="weather-detail__text">
                {this.state.weather.description}
              </div>
            </div>

            <div className="row">
              <div className="col-sm-6">
                <div className="clearfix">
                  <div className="float-left weather-icon">
                    <WeatherIcon iconName={this.state.weather.icon} />
                  </div>
                  <div className="weather-temp weather-temp--today">
                    {this.state.weather.temperature}
                  </div>
                  <div className="weather-unit__text weather-unit__text--today">
                    °C
                  </div>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="weather-detail__text">
                  Precipitation: {this.state.weather.precipitation}
                </div>
                <div className="weather-detail__text">
                  Wind: {this.state.weather.wind}
                </div>
              </div>
            </div>
          </div>
          <Forecast city={this.state.city} />
        </div>
      );
    } else {
      return (
        <div>
          App is loading, <em>please wait...</em>
        </div>
      );
    }
  }
}
