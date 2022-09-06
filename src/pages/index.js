import React from 'react';
import Link from 'next/link';
const { finalDalleAssembled } = require('../Components/assembler_Obj');

/**
 * Page that lures the user in
 * 
 * Text field with name and short description of the experience
 * Some button or interaction method to allow user to begin the experience
 * 
 * TO-DO: uvodni zprava oscilovat mezi jazyky
 */

class OpeningPage extends React.Component {

    changeLanguage = (e) => {
        finalDalleAssembled.language = e.target.value
        console.log(finalDalleAssembled.language);
    }

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
                    <button className='btn' value={'ENG'} onClick={this.changeLanguage} id='btn-ENG'>
                        Begin 
                    </button>
                </Link>
                <Link href={'/dialoguePage'}>
                    <button className='btn' value={'CZ'} onClick={this.changeLanguage} id='btn-CZ'>
                        Začít
                    </button>
                </Link>
                <Link href={'/dialoguePage'}>
                    <button className='btn' value={'DE'} onClick={this.changeLanguage} id='btn-DE'>
                        Anfangen
                    </button>
                </Link>
                


            </div>
                
        )
    } 


}

export default OpeningPage;