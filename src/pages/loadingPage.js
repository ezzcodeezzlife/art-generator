import React from "react";
import DalleComponent from "../Components/dalleComponent";

const { finalDalleAssembled } = require('../Components/assembler_Obj');
const { Facts } = require('../Components/dataFile.js');

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
        }, 8000)

    }

    render() {   

        return(
            <div>
               <h1>Creating your new artwork: </h1>

                <DalleComponent text={finalDalleAssembled.text}/>

               <h3 id="fact"> { this.state.funFact } </h3>

            </div>
            
        )
    } 


}

export default LoadingPage;