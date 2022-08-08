import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';

import OpeningPage from './Components/OpeningPage';
import DialoguePage from './Components/DialoguePage';
import ResultPage from './Components/ResultPage';
import LoadingPage from './Components/LoadingPage';

class App extends React.Component {

  //global states
  state = {

  }

  render () {
    return(
      <BrowserRouter>
        <Switch>
          <Route exact path='/'
            render={() => (<OpeningPage appState={ this.state } />)}
          />

          <Route exact path='dialoguePage'
            render={() => (<DialoguePage appState={ this.state } />)}
          />

          <Route exact path='resultsPage'
            render={() => (<ResultPage appState={ this.state } />)}
          />

          <Route exact path='loadingPage'
            render={() => (<LoadingPage appState={ this.state } />)}
          />


        </Switch>
      </BrowserRouter>
    )
  }

}

export default App;