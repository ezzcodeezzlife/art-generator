import React from "react";

import { Prompts } from "./dataFile";

/**
 * 
 * Various prompts are available to guide the user
 * through. 
 * 
 * Each prompt appears in different stage of the process.
 * 
 */

 class Prompt extends React.Component {

    selectText = (medium, stage) => {
        
        //select the accompanying text for each stage
        if(medium === "") {
            return Prompts.medium;

        } else if(medium === "painting") {
            //depending on the stage, return the appropriate text
            return Prompts.painting[stage];

        } else if(medium === "sculpture") {
            //depending on the stage, return the appropriate text
        } else if(medium === "photography") {
            //depending on the stage, return the appropriate text
        }

    }

    render() {
        const { medium, stage } = this.props;

        return(
            <div>
                <p>{this.selectText(medium, stage)}</p>
            </div>
            
        )
    } 

}

export default Prompt;