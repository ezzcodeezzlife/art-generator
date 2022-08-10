import React from "react";
import loading from './TestPhotos/Loading_icon.gif';
const { Facts } = require('./dataFile.js');

/***
 * 
 * The loading page keeps the user pre-occupied 
 * while waiting for the image to be generated.
 * 
 * It can either showcase previous examples of artworks,
 * or provide fun facts about the artistic process.
 * 
 */

 class LoadingPage extends React.Component {

    state = {
        funFact: Facts.funFacts[0]
    }

    componentDidMount() {
        this.updateFact();

    }

    updateFact = () => {
        //every 5 seconds, update the fact
        setInterval(() => {
            let randomFact = Facts.funFacts[Math.floor(Math.random() * Facts.funFacts.length)];
            this.setState({funFact: randomFact});
            this.state.funFact = randomFact;
        }, 5000)

    }


    render() {
        return(
            <div>
               <h1>Creating your new artwork</h1>

               <img src={loading}></img>

               <h2> { this.state.funFact } </h2>


            </div>
            
        )
    } 


}

export default LoadingPage;