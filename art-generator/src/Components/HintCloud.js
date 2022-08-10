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

    state = {
        NUM_FACTS: 10,
        INTERVAL_LENGTH: 3000,
        hint_elements: [],
        interval: null,
    }

    componentDidMount() {
        this.populateHints();
    }

    componentWillUnmount() {
        clearInterval(this.state.interval);
        //remove para elements from the page    
        this.state.hint_elements.forEach(element => {
            element.remove();
        });
        
    }

    generateHints = (stage) => {
        //gereate NUM_FACTS random hints from given stage
        //create a <p> element for each hint

        // Shuffle array
        const shuffled = Facts[stage].sort(() => 0.5 - Math.random());

        // Get sub-array of first n elements after shuffled
        let selected = shuffled.slice(0, this.state.NUM_FACTS);

        return selected;
    }

    setupHints = () => {
        //create the elements which will hold the hints
        
        let firstSet = this.generateHints(this.props.currentStage);
        
        for(let i = 0; i < firstSet.length; i++) {
            let para = document.createElement('p');
            para.className = "hint";
            para.innerHTML = firstSet[i];
            this.state.hint_elements.push(para);
            document.querySelector('div').appendChild(para);
        }
    }

    populateHints = () => {

        //setup the elements for hints
        this.setupHints();

        //change the hint cloud every INTERVAL_LENGTH milliseconds
        this.state.interval = setInterval(() => {
            //generate new hints
            let newHints = this.generateHints(this.props.currentStage);
            //replace text in existing hints
            for(let i = 0; i < this.state.hint_elements.length; i++) {
                this.state.hint_elements[i].innerHTML = newHints[i];
            }
        }, this.state.INTERVAL_LENGTH);

    }

    render() {
        return(
            <div>

            </div>
            
        )
    } 


}

export default HintCloud;