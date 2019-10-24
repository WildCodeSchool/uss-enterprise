import React from 'react';
import './Info.css';
import DateGenerator from 'random-date-generator'
let date = '2016-11-16'


//const randomDate = DateGenerator.getRandomDate()
//const date = `${randomDate.getFullYear()}-${randomDate.getMonth()}-${randomDate.getDay()}`;
// let startDate = new Date(2014, 2, 2);
// let endDate = new Date(2017, 3, 3);
// date.getRandomDateInRange(startDate, endDate)
// console.log(date.getRandomDateInRange(startDate, endDate))

//console.log(DateGenerator);
//console.log(date);


class Info extends React.Component {
    
    state = {
        planets: []
    }
    getPlanets = () => {
        fetch("https://api.nasa.gov/planetary/apod?api_key=OrGJskrKhXvGmPdbHvWMsyqjLIQpI4PLFdem1UJc&date=" + date)
        .then(res => res.json())
        .then(res => this.setState({planets: res}))
    }
    componentDidMount(){
       this.getPlanets()
    }
    render() {
        return (
            <div >
            
                <p className="photo_info">{this.state.planets.title}</p>
                <img className='planets_img' src={this.state.planets.url} alt=' de planete'></img>
                <p className="photo_info">{this.state.planets.date}</p>
                <p className="photo_info">{this.state.planets.copyright}</p>
            </div>
        )
    }
}
export default Info