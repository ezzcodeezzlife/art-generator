import React from "react";
import loading from '../Components/TestPhotos/Loading_icon.gif';
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
               <h1>Creating your new artwork</h1>

               <Image src={loading} width={400} height={400}/>

               <h2> { this.state.funFact } </h2>
                
                <p>final: {finalDalleAssembled.text}</p>


               <Link id="btn-result" href={'/selectionPage'}>
                    <button>
                        Results 
                    </button>
                </Link>
               
               <Link id="btn-result" href={'/dalleTest'}>
                    <button>
                        Test Dalle 
                    </button>
                </Link>
            </div>
            
        )
    } 


}

export default LoadingPage;