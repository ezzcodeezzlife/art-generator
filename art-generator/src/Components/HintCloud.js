import React from "react";
import { Facts } from './dataFile';

/***
 * Inspiration for the user
 * 
 * Tips are provided from predefined arrays of contextually
 * relevant keywords.
 * 
 * Based on stage of the dialogue, different array is used, from which
 * random words are selected to be shown.
 * 
 */

 class HintCloud extends React.Component {

    populateHints = () => {
        //figure out which stage the user is in
        console.log(this.props.currentStage)
        console.log(Facts.emotions[0])
        //create a paragraph element for each hint

        // Shuffle array
        const shuffled = Facts.emotions.sort(() => 0.5 - Math.random());

        // Get sub-array of first n elements after shuffled
        let selected = shuffled.slice(0, 10);

        for(let i = 0; i < selected.length; i++) {
            let para = document.createElement('p');
            para.innerHTML = selected[i];
            document.querySelector('div').appendChild(para);
        }

    }

    render() {
        return(
            <div>
               <button onClick={this.populateHints}>Populate Hints</button>
            </div>
            
        )
    } 


}

export default HintCloud;