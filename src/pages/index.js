import React from 'react';
import Link from 'next/link';

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

                <h1>Art Generator</h1>
                <p>Welcome to Art Generator, where everyone can create masterpieces 
                    alike the great artists of history. Step-by-step, I will lead 
                    you through an artist's creative journey, which will help you 
                    create your own original artwork. From now on, anyone can be an artist!</p>
                <p>Create a new custom piece of art</p>
                <Link href={'/dialoguePage'}>
                    <button className='btn'>
                        Begin 
                    </button>
                </Link>

                {/* Testing MongoDB */}
                <button type="button" onClick={() => handlePost()}>
                        Test MongoDB
                </button>
            </div>
                
        )
    } 


}

export default OpeningPage;