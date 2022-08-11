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

    prompt_text = {
        medium: 'The first decision every artist has to make is choosing a medium: what kind of artwork will it be? Each choice has its own specificities and will lead you down a slightly different creative path. Which of these is your calling?',
        painting: {
            //lookup holds the hint cloud variable for each stage ordered by stage id
            lookup: ['painting_types', 'painting_content', 'painting_setting','emotions', 'looks_techniques','art_styles'],
            //holds the guiding prompt for each dialogue stage named by stage id (such that it can be called as prompt[stage])
            1: ['Let’s get more specific. There are endless possibilities of what to do on a canvas. You might prefer the expressive colours of oil paint, or the gentler approach of pencil drawings. However, technical sketches and mosaics are not off the table! Each form has its magic and all of them are at your disposal. Now, which one will it be?'],
            2: ['Once we know how to approach the artwork, we can start filling it in. Think of things, characters - truly anything. Renaissance artworks are often full of people, abstract artworks are full of shapes and colors, and some can just be filled with emptiness. Go ahead, dream away:'],
            3: ['We know what we are focusing on, but what about everything all around. Where is this scene set? Is there even a setting? Maybe you are fine with what you’ve chosen. That is fine by me as well.'],
            4: ['Now that we know what is in the artwork, we also need to know how it will be depicted. Canvases will often radiate some energy - calming, energizing, they can even make you tired. This goes hand in hand with emotions. Artists will often want to communicate some sort of emotion through their art. This can come out softly - through colour tones and structure, but also explicitly - through dreadful expressions or symbolism. Think of emotions and energies you would want to convey through your artwork!'],
            5: ['We are getting close. There are endless styles in the world of art - these either help bring out the visuality of your scene, or better communicate the desired message. With my help, try to brainstorm styles, techinques and looks that will help shape your artwork into a truly personal masterpiece. Think about styles from history, but also also contemporary aesthetics. Perhaps you are a pioneer and don’t want to model yourself on any existing look, so this is not a must! '],
            6: ['Most of us will be driven by outer inspiration, whill often take shape in a person or a group. Do you have an inspiration? Is there someone, or something that you admire and wish to follow in their footsteps? Perhaps you will want to finish you artwork off in the style of…']
        },
        sculpture: {},
        photography: {}
    }

    selectText = (medium, stage) => {
        
        
        //select the accompanying text for each stage
        if(medium === "") {
            
            return this.prompt_text.medium;
        } else if(medium === "painting") {
            //depending on the stage, return the appropriate text
            return this.prompt_text.painting[stage];

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