import React from 'react';
import './InfoPage.css';


let date = '2016-11-16'


class InfoPage extends React.Component {
    
    state = {
        planets: []
    }

    getPlanet () {
        fetch("https://api.nasa.gov/planetary/apod?api_key=OrGJskrKhXvGmPdbHvWMsyqjLIQpI4PLFdem1UJc&date=" + date)
        .then(res => res.json())
        .then(res => this.setState({planets: res}))
    }

    componentDidMount(){
       this.getPlanet()
    }

    
    render() {
        const {date, title, url, copyright} = this.state.planets
        return (
            <div >      
                <p className="photo_info">{title}</p>
                <img className='planets_img' src={url} alt={title}></img>
                <p className="photo_info">{date}</p>
                <p className="photo_info">{copyright}</p>
            </div>
        )
    }
}
export default InfoPage
