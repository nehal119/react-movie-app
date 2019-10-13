import React from 'react';
import {Route} from "react-router-dom"
import MovieDex from "./MovieDex";
import Details from "./Details";

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={MovieDex} />
      <Route exact path="/:id" render={routeProps =>
      <Details id={routeProps.match.params.id} />
      } />
    </div>
  );
}

export default App;
