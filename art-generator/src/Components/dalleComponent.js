import React from "react";
import { useState } from 'react';

class DalleComponent extends React.Component {

    state = {
        token: "",
        query: "",
        result: [],
        loading: false,
        error: false
    }

    getDalle2 = () => {

        console.log(this.state.query);
        if(this.state.query != "" && this.state.token != "") {
            this.setState({loading: true});
            this.setState({error: false});
            
            fetch(`/api/dalle2?k=${this.state.token}&q=${this.state.query}`, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
            })
                .then(res => res.json())
                .then((data) => {
                    this.setState({result: data.result});
                    this.setState({loading: false});
                })
                .catch((err) => {
                    console.log(err);
                    this.setState({error: true});
                    this.setState({loading: false});
                });
        }
        else {
            this.setState({error: true});
        }
    }

    render() {
        return(
            <div>

            <h3>{this.props.text}</h3>
            <input
                id="query"
                type="text"
                placeholder="Enter query"
                value={this.state.query}
                onChange={(e) => {
                    console.log(e.target.value);
                    this.setState({token: 'sess-H3CXbJsrbAYlqNsCh17fEdVqEbrkI9HYIrZrNyeZ'})
                    this.setState({query: e.target.value})}
                    }
            />
            <button onClick={this.getDalle2}> Get Results! </button>

            {this.state.error ? (
                <p>
                    something went wrong lol
                </p>
            ) : (<></>)}

            {this.state.loading && <p>Loading</p>}

            <div className="grid">
                {this.state.result.map((result) => {
                    return (
                        <div className="card">
                            <img 
                                src={result.generation.image_path} 
                                alt="" 
                                className="imgPreview"
                            />
                        </div>
                    );
                })}
            </div>
        </div>
        )
    }

}

export default DalleComponent;