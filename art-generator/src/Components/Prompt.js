import React from "react";

/**
 * 
 * Various prompts are available to guide the user
 * through. 
 * 
 * Each prompt appears in different stage of the process.
 * 
 */

 class Prompt extends React.Component {

    var prompt = {
        //lookup holds the hint cloud variable for each stage ordered by stage id
        lookup: ['painting_types', 'painting_content', 'painting_setting','emotions', 'looks_techniques','art_styles'],
        //holds the guiding prompt for each dialogue stage named by stage id (such that it can be called as prompt[stage])
        0: ['What medium?'],
        1: ['What content?'],
        2: ['What setting?'],
        3: ['What emotion?'],
        4: ['What look or technique?'],
        5: ['Any style or artist in mind?']
    }


    render() {
        return(
            <div>
               
            </div>
            
        )
    } 


}

export default Prompt;