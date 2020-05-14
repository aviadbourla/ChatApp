import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import join from './components/Join'
import Chat from './components/Chat'
import './app.css'
import Join from './components/Join';
function App() {

  const Imagecomponent = (props) => {
    return(
    <div className="App-header">
      {props.children}
    </div>)
  }

  return (
    <Router>
      <Route path="/" exact component={()=><Imagecomponent> <Join/></Imagecomponent>} />
      <Route path="/chat" component={Chat} />
    </Router>
  );
}
export default App;
