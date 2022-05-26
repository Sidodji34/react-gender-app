import './App.css';

export function Main() {
  return (
    <div className="body-input">
      <TextInput />
      <Output />
    </div>
  )
}

function handleSubmit(e) {
  e.preventDefault();
  console.log('Form sent');
}

function Button(props) {
  return (
    <button className="submit" type="submit">{props.placeholder}</button>
  )
}

function TextInput() {
  return (
    <form action="" onSubmit={handleSubmit}>
      <input className="input" type="text" placeholder="Enter a name..." />
      <Button placeholder='Submit'/>
    </form>
  )
}

function Output() {
  return (
    <div className="output"></div>
  )
}

export default Main;
