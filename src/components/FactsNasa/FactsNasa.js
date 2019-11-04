import React from "react";
import FactDetail from "./FactDetail";

class FactsNasa extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fact: null
    };
    //binding not arrow function
    //this.getQuote = this.getQuote.bind(this);
  }

  //get a random date for displaying the fact
  randomDate(start, end) {
    return new Date(
      start.getTime() + Math.random() * (end.getTime() - start.getTime())
    );
  }

  getFact = () => {
    //api_key=p0ri2lplDBPIhLnvdmjW6mu2gVbW2JzpjwTWfOhy
    const apiKey = "p0ri2lplDBPIhLnvdmjW6mu2gVbW2JzpjwTWfOhy";
    //get a random date
    let date = this.randomDate(new Date(2007, 0, 1), new Date());
    date = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;

    const url = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&&date=${date}`;
    fetch(url)
      .then(response => {
        return response.json();
      })
      .then(nasaFact => {
        //console.log(nasaFact);
        this.setState({
          fact: nasaFact
        });
      });
  };

  componentDidMount() {
    this.getFact();
  }

  render() {
    return (
      <div className="FactsNasa">
        {this.state.fact ? (
                <FactDetail {...this.state.fact}/>
        ) : (
          <p>Loading [Wrap space effect]...</p>
        )}
      </div>
    );
  }
}

export default FactsNasa;
