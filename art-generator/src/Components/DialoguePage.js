import React from "react";
import HintCloud from "./HintCloud";
import { Link } from 'react-router-dom';

/**
 * The dialogue window
 * 
 * Different prompts arise based on where the user is in the creation
 * journey.
 * 
 * User gives any input.
 * 
 * Tips are provided on the page as word-clouds related to given prompt.
 * 
 * User can decide to quit/restart the process.
 * If inactive for X seconds, the user is asked if they want more ideas /
 * wish to start over / quit.
 * 
 * Final page before the query is sent to be generated should show the resulting
 * sentence for user revision.
 * 
 */

 class DialoguePage extends React.Component {

    state = {
        stage: 1,
        stageNames: [
            'emotions', 'structure_form', 'looks_techniques', 'art_styles', 'artists'
        ],
        query: [],
    }

    incrementStage = () => {
        //increase value of current stage by 1, and update the buttons accordingly
        
        let currentStage = this.state.stage;

        /**
         * Button to previous stage:
         * is enabled only if the current stage is greater than 1,
         * otherwise it is disabled. 
         */

        //return button appears after the increment button is first clicked
        document.querySelector('#btn-previous-stage').style.display = 'block';

        //enable the return button after the stage is larger than 1
        if(currentStage >= 1) {
            document.querySelector('#btn-previous-stage').disabled = false;
        }

        /***
         * Button to next stage:
         * is enabled only if the current stage is less than last,
         * at last stage is replaced by submit button which redirects to loading page.
         * 
         * Text field is emptied and value stored.
         */

        //hide forward button, create a submit button
        if(currentStage === this.state.stageNames.length - 1) {
            //hide forward button
            document.querySelector('#btn-next-stage').style.display = 'none';

            //show submit button
            document.querySelector('#btn-result').style.display = 'block';
        }

        //get text from input field and store it in the query array
        let input = document.querySelector('#dialogue-input').value;
        //TODO: change to fit the correct structure
        this.state.query.push(input);

        //empty the input field
        document.querySelector('#dialogue-input').value = '';

        //increase stage by 1
        this.setState({stage: currentStage + 1});
    }

    returnToPreviousStage = () => {
        //decrease current stage by 1
        let currentStage = this.state.stage;

        //disable the return button once the stage is 1
        if(currentStage == 2) {
            document.querySelector('#btn-previous-stage').disabled = true;
        }

        //display correct forward button
        if(currentStage != this.state.stageNames.length - 1) {
            //hide submit button
            document.querySelector('#btn-result').style.display = 'none';
            //show forward button
            document.querySelector('#btn-next-stage').style.display = 'block';
        }

        //TODO: fill input field with the last value in the query array
        document.querySelector('#dialogue-input').value = this.state.query[this.state.stage - 1];

        this.setState({stage: currentStage - 1})
    }



    render() {

        return(
            <div>
               <h1>Dialogue Page</h1>

                <HintCloud currentStage={this.state.stageNames[this.state.stage]}/>

               <p> Welcome to stage {this.state.stage}, {this.state.stageNames[this.state.stage - 1]}</p>

                <input id="btn-previous-stage" type='submit'
                    onClick= { this.returnToPreviousStage }
                    value='Previous stage'
                />

                <input id="dialogue-input" type='text'></input>

                <input id="btn-next-stage" type='submit'
                    onClick= { this.incrementStage }
                    value = 'Next'
                />

                <Link id="btn-result" to={'/loadingPage'}>
                    <button>
                        Results 
                    </button>
                </Link>
                
            </div>
            
        )
    } 

}

export default DialoguePage;