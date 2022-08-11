import React from "react";
import loading from '../Components/TestPhotos/Loading_icon.gif';
import DalleComponent from "../Components/dalleComponent";

import Image from 'next/image';
import Link from "next/link";
import { useRouter } from "next/router";

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
        }, 5000)

    }

    render() {   

        return(
            <div>
               <h1>Creating your new artwork: </h1>

                <DalleComponent text={finalDalleAssembled.text}/>

               <h2> { this.state.funFact } </h2>

            </div>
            
        )
    } 


}

export default LoadingPage;