import React from 'react';

const scaleNames = {
    c: "Celsius",
    f: "Fahrenheit"
}

function toCelsius(fahrenheit){
    return (fahrenheit-32) * 5 / 9;
}


function toFahrenheit(celsius){
    return (celsius * 9/5) + 32;
}


function BoilingVerdict(props) {
    if (props.celsius >= 100) {
        return <p>The water would boil.</p>
    }
    return <p>The water would not boil.</p>
}

function tryConvert(temperature, convert) {
    const input = parseFloat(temperature);
    if (Number.isNaN(input)){
        return '';
    }
    const output = convert(input);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
}

export default class TemperatureInput extends React.Component {
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            temperature: ''
        };
    }
    handleChange(event) {
        this.setState({
            temperature: event.target.value
        });
    }
    render(){
        const temperature = this.state.temperature;
        const scale = this.props.scale;
        //console.log(tryConvert('54', toCelsius))
        return(
            <fieldset>
            <legend>Enter a temperature in {scaleNames[scale]}:</legend>
            <input value={temperature}
                onChange={this.handleChange}
             />
            </fieldset>
        );
    }
}