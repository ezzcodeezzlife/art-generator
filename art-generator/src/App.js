import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';

import OpeningPage from './Components/OpeningPage';
import DialoguePage from './Components/DialoguePage';
import LoadingPage from './Components/LoadingPage';
import SelectionPage from './Components/SelectionPage';

import Home from './Components/Dalle/testDalle';

class App extends React.Component {

  //global states
  state = {
    word: '[hello]',
    image: null,
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

          <Route exact path='/loadingPage'
            element={<LoadingPage appState= {this.state}/>}
          />
          
          <Route exact path='/selectionPage'
            element={<SelectionPage appState= {this.state}/>}
          />

          <Route exact path='/dalle'
            element={<Home />}
          />

        </Routes>
      </BrowserRouter>
    )
  }

}

export default App;