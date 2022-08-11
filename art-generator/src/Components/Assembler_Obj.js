/****
 * This object stores the user input for various stages 
 * which can be assembled at the end to form full string input into DALLE2.
 */

var responses = {
    painting: {
        type: "",

        content: [],//add new as ' of ' + 'dragons' OR ' and ' + 'houseplants'
        
        setting: [], //add new as ' '+'in a park'
    
        emotion: [],//add new as ', ' + 'grimm'
    
        looks: [],//add new as ', ' + 'futuristic'
        
        style: []
    },

    sculpture: {},

    photography: {},
};

var finalDalleAssembled = {
    text: "",
};

function assembleFinalDalle(text) {
    finalDalleAssembled.text = text;
}

//Function to assemble full response (input int DALLE)
function assembleResponse(responses, medium) {
    /***
     * This function assembles the user input from all stages into a full string input into DALLE2.
     * responses: object containing user input for each stage (object)
     */
    let assembledResponse = '';
    for (const [key, value] of Object.entries(responses[medium])) {
        
        if (value.constructor == Array){
            assembledResponse += value.join('');
        }
        else 
        {
            assembledResponse += value;
        }
    }
    return assembledResponse;
}
    
   
function storeResponse(userInput, stage, responses, medium) {
    /***
     * This function stores the user input for the current stage into Responses_Painting object.
     * userInput: input from the user for the current stage (string)
     * stage: current stage id (integer)
     */

    if(medium === "painting") {
        if (stage == 1) 
        {
            responses[medium][Object.keys(responses[medium])[stage-1]] = userInput; 
        }
        else if (stage == 2 && userInput.length > 0) 
        {
            responses[medium][Object.keys(responses[medium])[stage-1]].push(' of ' + userInput);
        }
        else if (stage == 3 && userInput.length > 0) 
        {
            responses[medium][Object.keys(responses[medium])[stage-1]].push(' ' + userInput);
        }
        else if ((stage == 4 || stage == 5) && userInput.length > 0) 
        {
            responses[medium][Object.keys(responses[medium])[stage-1]].push(', ' + userInput);
        }
        else if (stage == 6 && userInput.length > 0) 
        {
            responses[medium][Object.keys(responses[medium])[stage-1]].push(', in the style of ' + userInput);
        } 
    }
    
    
}

module.exports = { responses, assembleFinalDalle, finalDalleAssembled, assembleResponse, storeResponse };