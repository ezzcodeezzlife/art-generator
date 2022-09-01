import React from "react";
import SignatureCanvas from 'react-signature-canvas'

class FinalPublishing extends React.Component {

    state={
        signatureUrl: "",
    }
    
    hideSignature = () => {
        document.querySelector("#canvas-container").style.display = "none";
        document.querySelector(".publish-buttons").style.display = "block";
    }

    showEmailInput = () => {
        document.querySelector('.email-input').style.display = "block";
        document.querySelector('.email-buttons').style.display = "none";
    }

    hideEmailInput = () => {
        document.querySelector('.email-buttons').style.display = "none";
        document.querySelector('#gallery-publish').style.display = "block";
    }

    sendEmail = () => {
        document.querySelector('#gallery-publish').style.display = 'block';
    }

    publishToGallery = () => {
        //TODO: send photo to DB and to gallery
        document.querySelector('#gallery-publish').style.display = 'none';
        document.querySelector('#final-goodbye').style.display = 'block';
    }

    cancelPublish = () => {
        document.querySelector('#gallery-publish').style.display = 'none';

    }

    render() {
        return (
            <div >
                <div id="canvas-container">
                    <h1>Add a signature to your artwork</h1>
                    <div >
                        {/*
                        TODO: send signatures using https://www.npmjs.com/package/react-signature-canvas
                        TODO: add signature to the database
                        TODO: add signature to final photo
                        */}
                        <SignatureCanvas ref={(ref) => { this.sigCanvas = ref }} penColor='black' backgroundColor="white"
                        canvasProps={{width: 400, height: 250, className: 'sigCanvas', display: "inline" }} />    
                        <button className="btn" onClick={this.hideSignature}>
                            Add Signature 
                        </button> 
                        <button className="btn" onClick={this.hideSignature}>
                            Skip 
                        </button> 
                        <img>
                        </img>		
                    </div> 
                </div>

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
                </div>

                <div id='gallery-publish'>
                    <p>Do you want to display your artwork in the Albertina Gallery among the other great artists?</p>
                    <button className="btn" onClick={this.publishToGallery}>Publish to Gallery</button>
                    <button className="btn" onClick={this.cancelPublish}>Do not publish</button>
                </div>

                <div id='final-goodbye'>
                    <h1>
                        Thank you for your contribution!
                    </h1>
                    <h2>
                        You are now a real artist, collaborativelly creating a new art form with the brush of artificial intellignce.
                    </h2>
                </div>
                         
            </div>
        )
    }
}

export default FinalPublishing;