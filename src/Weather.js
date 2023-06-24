import React from "react";
import axios from "axios";
import "./Weather.css";
import Search from "./Search";
import Api from "./Api";



export default function Weather() {
let apikey =  let apikey = "4a8afcfcb072727adab5b1a90338a6a7";
let apiUrl =  `https://api.openweathermap.org/data/2.5/forecast?q=${
    props.city
}&appid=${apiKey}&units=metric`;
axios.get(apiUrl).then(handleResponse);
return <h2>Hello from Weather</h2>;
}