import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Page that lures the user in
 * 
 * Text field with name and short description of the experience
 * Some button or interaction method to allow user to begin the experience
 */

class OpeningPage extends React.Component {

    render() {
        return(
            <div>
                <h1>Opening Page { this.props.appState.word }</h1>
                <Link to={'/dialoguePage'}>
                    <button>
                        DialoguePage 
                    </button>
                </Link>
            </div>
                
        )
    } 


}

export default OpeningPage;