import React from "react";
import SignatureCanvas from 'react-signature-canvas'
import Router, { withRouter } from 'next/router'

class FinalPublishing extends React.Component {

    sigPad = {}

    clear = () => {
      this.sigPad.clear()
    }

    saveSignature = () => {
        document.querySelector(".signatureScheme").style.display = "none";
        //document.querySelector(".publish-buttons").style.display = "block";
        document.querySelector("#gallery-publish").style.display = "block";

        //show signature on image
        let finalImage = document.createElement("img");
        finalImage.src = this.props.finalImage;
        finalImage.setAttribute("className", "final-image");

        //place final image on canvas
        document.querySelector("#gallery-publish").appendChild(finalImage);

        //place signature image on canvas
        let signatureImage = document.createElement("img");
        //set source as the signature image
        signatureImage.src = this.sigPad.getTrimmedCanvas().toDataURL('image/png');
        signatureImage.setAttribute("className", "signature-image");
        
        document.querySelector("#gallery-publish").appendChild(signatureImage);
    }
    
    //add photo to gallery database, show the gallery on the page
    addArt = async (e) => {
        e.preventDefault();
      
        let artpiece = {
          task_id: this.props.task_id,
          selected_img_pos: this.props.selected_img_pos,
          content: this.props.query,
          //add source of signature
          signature: this.sigPad.getTrimmedCanvas().toDataURL('image/png'),
          createdAt: new Date().toISOString()

          //TODO: add email and name
        }
      
        //save the artpiece
        let response = await fetch('/api/artwork', {
          method: 'POST',
          body: JSON.stringify(artpiece),
        });
      
        // get the data
        let data = await response.json();
      
        if (data.success) {
            // reset the fields
            console.log("success");
            // set the message

            //TODO: send photo to DB and to gallery
            document.querySelector('#gallery-publish').style.display = 'none';
            document.querySelector('#final-goodbye').style.display = 'block';
      
        } else {
            // set the error
            console.log("error");
        }
    }
    
    hideSignature = () => {
        document.querySelector(".signatureScheme").style.display = "none";
        //document.querySelector(".publish-buttons").style.display = "block";
        document.querySelector('#gallery-publish').style.display = 'block';
    }

    // showEmailInput = () => {
    //     document.querySelector('.email-input').style.display = "block";
    //     document.querySelector('.email-buttons').style.display = "none";
    // }

    // hideEmailInput = () => {
    //     document.querySelector('.email-buttons').style.display = "none";
    //     document.querySelector('#gallery-publish').style.display = "block";
    // }

    // sendEmail = () => {
    //     document.querySelector('#gallery-publish').style.display = 'block';
    // }

    cancelPublish = () => {
        document.querySelector('#gallery-publish').style.display = 'none';
        Router.push('/');
    }

    render() {
       
        return (
            <div>
                <div className="signatureScheme">
                    <h1>Add a signature to your artwork</h1>
                    <div id="canvas-container">
                        <div > 
                            <SignatureCanvas canvasProps={{width: 400, height: 250, className: 'sigCanvas'}}
                            ref={(ref) => { this.sigPad = ref }} penColor='black' />
                        </div>   
                    </div>
                        <button className="btn" onClick={this.saveSignature}>
                            Add Signature 
                        </button> 
                        <button className="btn" onClick={this.clear}>
                            Clear Signature
                        </button>
                        <button className="btn" onClick={this.hideSignature}>
                            Skip 
                        </button> 
                </div>

                {/* TODO: send the photo through email
                <div className="publish-buttons">
                    <div className="email-buttons">
                        <p className="email-prompt">Do you wish to receive your artwork through email?</p>
                        <button className="btn email-prompt" onClick={this.showEmailInput}>Send to Email</button>
                        <button className="btn email-prompt" onClick={this.hideEmailInput}>No thank you</button>
                    </div>

                    <form className="email-input">
                        <input className="input" type="text" placeholder="Enter email"></input>
                        <button className="btn" onClick={this.sendEmail}>Submit</button>
                    </form>
                </div> */}

                <div id='gallery-publish'>
                    <p>Do you want to display your artwork in the Albertina Gallery among the other great artists?</p>
                    <button className="btn" onClick={this.addArt}>Publish to Gallery</button>
                    <button className="btn" onClick={this.cancelPublish}>Do not publish</button>
                </div>

                <div id='final-goodbye'>
                    <h1>
                        Thank you for your contribution!
                    </h1>
                    <h3>
                        You are now a real artist, collaborativelly creating a new art form with the brush of artificial intellignce.
                    </h3>
                </div>

                     
            </div>
        )
    }
}

export default FinalPublishing;