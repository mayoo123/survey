import React, {useState} from 'react'
import './App.css';
import Survey from './Survey';
import data from './data.json';
import Questions from './Questions';

function App() {


  const [state, setState] = useState({
    selected: {}
  });

  const handleClick = id => {
    console.log("test id:");
    console.log(id);

    console.log(state.selected);
    console.log( data[0]);

    setState(prevState => {
      return {...prevState, selected : data[0].surveys[id-1] }
    });

    console.log(state.selected);
  }

  const back = () => {
    setState( prevState => {
      return { ...prevState, selected : {} }
    });
  }

  return (
    <div className="App">
      <div className="outer-box">
        <p className="outer-box-p">{ (typeof state.selected.id !== "undefined" )  ? "Survey Questions Page" : "Surveys Page" }</p>
        <div className="inner-box">
          <div className="inner-box-content">
              { (typeof state.selected.id !== "undefined" )  ? <Questions selectedSurvey = { state.selected } back = { back } /> : <Survey Data = { data } handleClick = { handleClick } /> }
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
