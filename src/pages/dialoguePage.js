import React from "react";
import HintCloud from "../Components/hintCloud";
import Prompt from "../Components/prompt";
import Link from 'next/link';
import { useState } from "react";

const { responses, assembleResponse, storeResponse, assembleFinalDalle } = require('../Components/assembler_Obj');

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

//TODO: show response, as it is being assembled, on page
//TODO: check format of input - e.g. 400 character limit
//TODO: update stage names of h1 from dataFile instead of here 

 class DialoguePage extends React.Component {

    state = {
        stage: 0,
        medium: "",
        numStages: 7,
        query: "",
        dalleInput: "",
        language: 'ENG',

        //TODO: update stage names of h1 from dataFile instead of here 
        stage_names: {
            ENG: { 
            painting: ['Painting Types', 'Painting Content', 'Painting Setting','Emotions', 'Looks and Techniques','Art Styles'],
            sculpture: ['Sculpture Type','Sculpture Content', 'Forms', 'Emotions', 'Looks', 'Art Styles'],
            photography: ['Photo Content', 'Photo Setting', 'Camera Angle', 'Camera Settings', 'Lighting', 'Emotions']
            },

            CZ: { 
                painting: ['Typy malby', 'Obsah malby', 'Prostředí malby','Emoce', 'Vzhled a technika','Umělecké styly'],
                sculpture: ['Typ sochy', 'Obsah sochy', 'Formy', 'Emoce', 'Vzhled', 'Umělecké styly'],
                photography: ['Photo Content', 'Photo Setting', 'Camera Angle', 'Camera Settings', 'Lighting', 'Emotions']

            },
            DE: { 
                painting: ['Malarten', 'Malinhalt', 'Maleinstellung', 'Emotionen', 'Looks und Techniken', 'Kunststile'],
                sculpture: ['Sculpture Type','Sculpture Content', 'Forms', 'Emotions', 'Looks', 'Art Styles'],
                photography: ['Photo Content', 'Photo Setting', 'Camera Angle', 'Camera Settings', 'Lighting', 'Emotions']

            }
        }
    }

    incrementStage = () => {
        //increase value of current stage by 1, and update the buttons accordingly
        
        let currentStage = this.state.stage;

        /***
         * Button to next stage:
         * is enabled only if the current stage is less than last,
         * at last stage is replaced by submit button which redirects to loading page.
         * 
         * Text field is emptied and value stored.
         */

        //hide forward button, create a submit button
        if(currentStage === this.state.numStages - 2) {
            //hide forward button
            document.querySelector('#btn-next-stage').style.display = 'none';

            //show submit button
            document.querySelector('#btn-result').style.display = 'block';
        }

        //get text from input field and store it in the query array
        let input = document.querySelector('#dialogue-input').value;
        //TODO: change to fit the correct structure
        this.setState({query: input});

        

        // /***
        //  * Assign medium
        //  */
        // if(this.state.stage === 0) {
        //     this.setState({medium: input});
        // }

        /****
         * Feed input to assembler
         */
        if(this.state.stage !== 0) {
            let userInput = document.querySelector('#dialogue-input').value;
            storeResponse(userInput, this.state.stage, responses, this.state.medium);
        }
        
        //empty the input field
        document.querySelector('#dialogue-input').value = '';

        //increase stage by 1
        this.setState({stage: currentStage + 1});
    }

    selectPainting = (e) => {
        this.setState({medium: e.target.value});
        this.setState({stage: 1});
        console.log(this.state.medium);
    }

    changeLanguage = (e) => {
        this.setState({language: e.target.value});
        console.log(this.state.medium);
    }

    finishAssembling = () => {
        //get text from final input stage and assemble it into final query for dalle
        if(this.state.stage == this.state.numStages - 1) {
            let input = document.querySelector('#dialogue-input').value;
            storeResponse(input, this.state.stage, responses, this.state.medium);
            
            let dalleInput = assembleResponse(responses, this.state.medium);
            this.state.dalleInput = dalleInput;
            assembleFinalDalle(dalleInput);

        }
    }

    render() {

        return(
            <div>
               <h1> {this.state.stage === 0 ? 'Select a Medium' : null}
                { this.state.stage > 0 ? this.state.stage_names[this.state.language][this.state.medium][this.state.stage - 1] : null}</h1>


                <HintCloud medium={this.state.medium} stage={this.state.stage} language={this.state.language}/>

                <Prompt medium={this.state.medium} stage={this.state.stage} language={this.state.language}/>

                

                {
                    this.state.stage === 0 ?
                    <div className="div-medium">
                        <button className="btn btn-medium" value={'painting'} onClick={e => this.selectPainting(e, 'value')}>Painting</button>
                        <button className="btn btn-medium" value={'sculpture'} onClick={e => this.selectPainting(e, 'value')}>Sculpture</button>
                        <button className="btn btn-medium" value={'photography'} onClick={e => this.selectPainting(e, 'value')}>Photography</button>
                        <button className="btn" value={'CZ'} onClick={e => this.changeLanguage(e, 'value')}>CZ</button>
                        <button className="btn" value={'DE'} onClick={e => this.changeLanguage(e, 'value')}>DE</button>
                    </div>
                    
                    : 

                    <div>
                        <input className="input" id="dialogue-input" type='text'></input>

                        <input className="btn" id="btn-next-stage" type='submit'
                            onClick= { this.incrementStage }
                            value = 'Next'
                        />
                    </div>
                    
                }
                
                <Link href={'/loadingPage'}>
                    <button className="btn" onClick={this.finishAssembling} id="btn-result">
                        Results 
                    </button>
                </Link>
                
            </div>
            
        )
    } 

}

export default DialoguePage;