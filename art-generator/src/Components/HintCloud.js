import React from "react";
import { Facts, Prompts } from './dataFile';

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

//TODO: reset hint cloud with each stage change

 class HintCloud extends React.Component {

    state = {
        NUM_FACTS: 10,
        INTERVAL_LENGTH: 7000,
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

    getStage = (medium, stage) => {
        if(medium !== "") {
            let stageName = Prompts[medium].lookup[String(stage-1)];
            return Facts[stageName];
        } else {
            let arr = [];
            for(let i = 0; i < this.state.NUM_FACTS; i++) {
                arr.push("");
            }
            return arr;
        }

    }

    generateHints = () => {
        //gereate NUM_FACTS random hints from given stage
        //create a <p> element for each hint

        // Shuffle array
        const shuffled = this.getStage(this.props.medium, this.props.stage ).sort(() => 0.5 - Math.random());

        // Get sub-array of first n elements after shuffled
        let selected = shuffled.slice(0, this.state.NUM_FACTS);
        
        return selected;
    }

    setupHints = () => {
        //create the elements which will hold the hints
        
        let firstSet = this.generateHints();

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
            let newHints = this.generateHints();
            //replace text in existing hints
            for(let i = 0; i < this.state.hint_elements.length; i++) {
                this.state.hint_elements[i].innerHTML = newHints[i];
            }
        }, this.state.INTERVAL_LENGTH);

    }

    render() {
        return(
            <div className="cloud">

            </div>
            
        )
    } 


}

export default HintCloud;