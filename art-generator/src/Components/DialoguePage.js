import React from "react";
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
            'material', 'emotion', 'content', 'style'
        ],
        query: [],
        fButtonState: 'jinak'
    }

    incrementStage = () => {
        //increase value of current stage by 1
        
        let currentStage = this.state.stage;

        //update forward button
        if (currentStage == this.state.stageNames.length - 1) {
            this.state.fButtonState = 'Results';
        } 
        else {
            this.state.fButtonState = 'Submit';
        }

        //send user to results page
        if(this.state.fButtonState == 'Results') {

            //TODO: update finished query into this.props.appState.word

            this.props.appState.word = 'tested';
            // <Link to={'/loadingPage'}> </Link>
            console.log(this.props.appState.word)
        }

        this.setState({stage: currentStage + 1});
        
    }

    returnToPreviousStage = () => {
        //decrease current stage by 1
        let currentStage = this.state.stage;

        //update forward button
        if (currentStage == this.state.stageNames.length + 1) {
            this.state.fButtonState = 'Results';
        } 
        else {
            this.state.fButtonState = 'Submit';
        }

        //TODO: if stage is 1 => hide button

        this.setState({stage: currentStage - 1})
    }

    render() {
        return(
            <div>
               <h1>Dialogue Page</h1>
               <p> Welcome to stage {this.state.stage}, {this.state.stageNames[this.state.stage - 1]}</p>
                <input type='submit'
                    onClick= { this.returnToPreviousStage }
                    value='Previous stage'
                />
                <input type='submit'
                    onClick= { this.incrementStage }
                    value = {this.state.fButtonState}
                />
                
            </div>
            
        )
    } 


}

export default DialoguePage;