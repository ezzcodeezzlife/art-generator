import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';

import OpeningPage from './Components/OpeningPage';
import DialoguePage from './Components/DialoguePage';
import ResultPage from './Components/ResultPage';
import LoadingPage from './Components/LoadingPage';

class App extends React.Component {

  //global states
  state = {
    word: '[hello]'
  }

  render () {
    return(
      <BrowserRouter>
        <Routes>
          <Route exact path='/'
            element={<OpeningPage appState= {this.state}/>}
          />

          <Route exact path='/dialoguePage'
            element={<DialoguePage appState= {this.state}/>}
          />

          <Route exact path='/resultsPage'
            element={<ResultPage appState= {this.state}/>}
          />

          <Route exact path='/loadingPage'
            element={<LoadingPage appState= {this.state}/>}
          />

        </Routes>
      </BrowserRouter>
    )
  }

}

export default App;