import React from "react";

class FactsNasa extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fact: null
    };
    //binding not arrow function
    //this.getQuote = this.getQuote.bind(this);
  }

  getFact = () => {
    //api_key=p0ri2lplDBPIhLnvdmjW6mu2gVbW2JzpjwTWfOhy
    const apiKey = "p0ri2lplDBPIhLnvdmjW6mu2gVbW2JzpjwTWfOhy";

    const url = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`;
    fetch(url)
      .then(function(response) {
        return response.json();
      })
      .then(function(fact) {
        const profileHtml = `
            <p><strong>${fact.explanation}</strong></p>
            <img src="${fact.url}" />
          `;
        document.querySelector(".FactsNasa").innerHTML = profileHtml;
      });
  };

  componentDidMount() {
    this.getFact();
  }

  render() {
      return <div className="FactsNasa">
        {this.state.fact ? (
          <div className="FactsNasa"></div>
        ) : (
          <p>Loading...</p>
        )}
    </div>;
  }
}

export default FactsNasa;
