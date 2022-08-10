/****
 * This object stores the user input for various stages 
 * which can be assembled at the end to form full string input into DALLE2.
 */

var Responses_Painting = {

    medium: "painting",

    content: [" of", ' ','an elephant', ' and ', 'houseplants'],//add new as ' and ' + 'houseplants
    
    setting: [], //add new as ' '+'in a park'
   
   	emotion: [', ','mellow'],//add new as ', ' + 'grimm'
  
  	looks: [', ','biopunk'],//add new as ', ' + 'futuristic'
    
    style: [', in the style of ','Michelangelo']
    }

var Responses_Sculpture = {}

var Responses_Photo = {}

module.exports = { Responses_Painting };


//Function to assemble full response (input int DALLE)
function assembleResponse(Responses) {
     /***
     * This function assembles the user input from all stages into a full string input into DALLE2.
     * Responses: object containing user input for each stage (object)
     */
    let assembledResponse = '';
    for (response in Responses) {
    	
        if (Responses[response].constructor == Array){assembledResponse += Responses[response].join('');}
        
        else {
        assembledResponse += Responses[response];}
 		}
    return assembledResponse;
}

function storeResponse(userInput, stage) {
	if (stage == 1) {
    	Responses[Object.keys(Responses)[stage-1]] = userInput; }
	else if (stage == 2 && userInput.length > 0) {
    	Responses[Object.keys(Responses)[stage-1]].push(' of ' + userInput);}
  	else if (stage == 3 && userInput.length > 0) {
    	Responses[Object.keys(Responses)[stage-1]].push(' ' + userInput);}
  	else if ((stage == 4 || stage == 5) && userInput.length > 0) {
    	Responses[Object.keys(Responses)[stage-1]].push(', ' + userInput);}
  	else if (stage == 6 && userInput.length > 0) {
    	Responses[Object.keys(Responses)[stage-1]].push(', in the style of ' + userInput);} 
   
    let t = Object.values(Responses)[stage-1];

	return t;
}
