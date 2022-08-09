import React from 'react';
import '../App.css';
import img1 from './TestPhotos/DALLE_1.png';
import img2 from './TestPhotos/DALLE_2.png';
import img3 from './TestPhotos/DALLE_3.png';
import img4 from './TestPhotos/DALLE_4.png';


/**
 * User is shown four versions of their artwork.
 * 
 * User can choose one of the versions to be the final version.
 */

class SelectionPage extends React.Component {

    handleSelection = (event) => {
        //hide other images, keep only the one the user selected

        if(event.target.id === 'img-Result-1') {
            //hide image
            document.getElementById('img-Result-2').style.display = 'none';
            document.getElementById('img-Result-3').style.display = 'none';
            document.getElementById('img-Result-4').style.display = 'none';
            //hide buttons
            document.getElementById('btn-Result-2').style.display = 'none';
            document.getElementById('btn-Result-3').style.display = 'none';
            document.getElementById('btn-Result-4').style.display = 'none';

        } else if(event.target.id === 'img-Result-2') {
            document.getElementById('img-Result-1').style.display = 'none';
            document.getElementById('img-Result-3').style.display = 'none';
            document.getElementById('img-Result-4').style.display = 'none';

            document.getElementById('btn-Result-1').style.display = 'none';
            document.getElementById('btn-Result-3').style.display = 'none';
            document.getElementById('btn-Result-4').style.display = 'none';

        } else if(event.target.id === 'img-Result-3') {
            document.getElementById('img-Result-1').style.display = 'none';
            document.getElementById('img-Result-2').style.display = 'none';
            document.getElementById('img-Result-4').style.display = 'none';

            document.getElementById('btn-Result-1').style.display = 'none';
            document.getElementById('btn-Result-2').style.display = 'none';
            document.getElementById('btn-Result-4').style.display = 'none';
        } else {
            document.getElementById('img-Result-1').style.display = 'none';
            document.getElementById('img-Result-2').style.display = 'none';
            document.getElementById('img-Result-3').style.display = 'none';

            document.getElementById('btn-Result-1').style.display = 'none';
            document.getElementById('btn-Result-2').style.display = 'none';
            document.getElementById('btn-Result-3').style.display = 'none';
        }

        document.getElementById('share').style.display = 'block';
        document.getElementById('buy').style.display = 'block';

    }

    render() {
        return(
            <div>
                <h1> Select your favorite version </h1>

                <button id='btn-Result-1' onClick={this.handleSelection}>
                    <img id='img-Result-1' src={img1}></img>
                </button>

                <button id='btn-Result-2' onClick={this.handleSelection}>
                    <img id='img-Result-2' src={img2}></img>
                </button>

                <button id='btn-Result-3' onClick={this.handleSelection}>
                    <img id='img-Result-3' src={img3}></img>
                </button>

                <button id='btn-Result-4' onClick={this.handleSelection}>
                    <img id='img-Result-4' src={img4}></img>
                </button>
                
                <button id='share'>
                    {/* TODO: redirect to share page */}
                    Share
                </button>

                <button id='buy'>
                    {/* TODO: redirect to buy page */}
                    Buy
                </button>


            </div>
            
        )
    } 

}

export default SelectionPage;