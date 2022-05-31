import React from 'react';
import './App.css';
const serverURL = "https://api.genderize.io";

export function Main() {
  return (
    <div className="body-input">
      <TextInput />
    </div>
  )
}

function Button() {
  return (
    <button className="submit" type="submit">Submit</button>
  )
}

class TextInput extends React.Component {

  constructor(props) {
    super(props);
    this.state = { value: '', name: '', gender: '', valid: true };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.requestApi();
    this.setState({ value: '' });
  }
  
  requestApi() {
    try {
      if (this.state.value) {
      const url = `${serverURL}?name=${this.state.value}`;
      fetch(url).then(response => response.json())
        .then((result) => {
          this.setState({ name: result.name, gender: result.gender })
        })
      }
    } catch (error) {
      console.log(`${error.name}: ${error.message}`);
    }
  }

  render() {
    const name = this.state.name;
    let output;
    if (name.length < 3 && name !== '') {
      output = <ErrorMessage />
    } else {
      output = <Output name={this.state.name} gender={this.state.gender} />
    }
    return (
      <form action="" onSubmit={this.handleSubmit}>
        <input className="input" type="text" placeholder="Enter a name..."
          onChange={this.handleChange} value={this.state.value} />
        <Button />
        {output}
      </form>
    )
  }
}

function Output(props) {
    return (
      <div className="output">{props.name}  {props.gender}</div>
    )
}


function ErrorMessage() {
  return (
    <div className='error-message'>Name is too short.</div>
  )
}

export default Main;