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
                <h1>Art Generator { this.props.appState.word }</h1>
                <p>AI and human come together for an art journey</p>
                <p>Create a new custom piece of art</p>
                <Link to={'/dialoguePage'}>
                    <button>
                        Begin 
                    </button>
                </Link>
            </div>
                
        )
    } 


}

export default OpeningPage;