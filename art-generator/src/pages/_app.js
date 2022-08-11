import '../styles/globals.css';

function App({Component, pageProps}) {
  return <Component {...pageProps} />;
}

export default App;

// import React from 'react';
// import { Route, Routes, BrowserRouter } from 'react-router-dom';

// import OpeningPage from './pages';
// import DialoguePage from './pages/dialoguePage';
// import LoadingPage from './pages/loadingPage';
// import SelectionPage from './pages/selectionPage';

// import Home from './Components/Dalle/testDalle';

// class App extends React.Component {

//   //global states
//   state = {
//     word: '[hello]',
//     image: null,
//   }

//   render () {
//     return(
//       <BrowserRouter>
//         <Routes>
//           <Route exact path='/'
//             element={<OpeningPage appState= {this.state}/>}
//           />

//           <Route exact path='/dialoguePage'
//             element={<DialoguePage appState= {this.state}/>}
//           />

//           <Route exact path='/loadingPage'
//             element={<LoadingPage appState= {this.state}/>}
//           />
          
//           <Route exact path='/selectionPage'
//             element={<SelectionPage appState= {this.state}/>}
//           />

//           <Route exact path='/dalle'
//             element={<Home />}
//           />

//         </Routes>
//       </BrowserRouter>
//     )
//   }

// }

// export default App;