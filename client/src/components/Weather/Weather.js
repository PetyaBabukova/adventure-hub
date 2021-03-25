import React, { Component } from "react";
import { NavLink } from 'react-router-dom';

class Weather extends Component {
    constructor() {
        super();
        this.state = {
            weather: 'Not yet gotten'
        }
    }

    componentDidMount = () => {
        fetch('/weather')
            .then(res => res.json())
            .then(res => {
                // console.log(res.parsedBody.request);
                // console.log(res.parsedBody.location);
                // console.log(res.parsedBody.current);
                this.setState({
                    weather: res.parsedBody.current.temperature
                })
            })
            .catch(err => console.log(err))
    }
    render() {
        return (
            <div>
                <div className="weather">
                    <form className="weather">
                        <label htmlFor="city"></label>
                        <input type="text" id="city" name="city"></input>
                        <button><NavLink to="/weather">Get weather</NavLink></button>
                    </form>
                    <h3>The Weather in Sofia is: {this.state.weather}</h3>
                </div>
            </div>
        )
    }
}

export default Weather;