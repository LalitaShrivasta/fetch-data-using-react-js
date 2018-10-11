import React from "react";
import logo from "./logo.svg";
import "./App.css";
import emogis from "./components/emogis.json";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      inputfield: ""
    };
  }

  onsearchinput = e => {
    this.setState({ inputfield: e.target.value });
    console.log(e.target.value);
  };

  render() {
    const { inputfield } = this.state;
    const filtermethod = emogis.filter(data => {
      if (
        data.title.toLowerCase().indexOf(inputfield.toLocaleLowerCase()) !== -1
      )
        return true;
      if (data.keywords.toLowerCase().indexOf(inputfield.toLowerCase()) !== -1)
        return true;
      return false;
    });

    return (
      <div>
        <div className="img">
        <h2>Search Emojis</h2>
        </div>
        <input vlaue={this.state.search} onChange={this.onsearchinput} placeholder="Search"/>
        <ul>
          {filtermethod.slice(0, 20).map(function(data, index) {
            return (
              <div className="div1" key={index}>
                <span >{data.title}</span>
                <span>{data.symbol}</span>
              </div>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default App;
