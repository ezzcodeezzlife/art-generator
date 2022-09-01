import React from "react";

class DalleComponent extends React.Component {

    state = {
        token: "",
        query: "",
        result: [],
        loading: false,
        error: false,
        result_provided: false,
        result_id: 0,
    }
    
    // selects which image you picked and hides the rest, while enlarging the remaining one and adding finalStyling component
    displayFavorite = (e) => {
        console.log(e.target.src)
        var choices = document.querySelectorAll('img');
        for(let i = 0; i < choices.length; i++){
            if(choices[i].src !== e.target.src) {
              choices[i].style.display = "none"
            }    
        }
      }

    getDalle2 = () => {

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
                    this.setState({result_provided: true});
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
            {
                //hide the input field after the query is submitted and loading

                this.state.loading == false && this.state.error == false && this.state.result_provided == false ? 
                <input className="input"
                    id="query"
                    type="text"
                    placeholder={this.props.text}
                    value={this.state.query}
                    onChange={(e) => {
                        this.setState({token: 'sess-ACAi73JHw0p4uzU8M4kzAT1lZm7DVamU6PeyUvkI'})
                        this.setState({query: e.target.value})}
                        }
                /> : null
            }
            
            {
                //hide the Get Result button after the query has been sent

                this.state.loading == false && this.state.error == false && this.state.result_provided == false ?
                <button className="btn" onClick={this.getDalle2}> Get Results! </button>
                : null
            }

           {/* {
                //TODO: change background color one the results are provided (this code is not working)
                this.state.result_provided === true ? 
                document.querySelector('body').style.backgroundColor = '#f5f5f5' : null
           }  */}

            {
                this.state.error ? (
                <p>
                    your query could not be processed at this time
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
                                onClick={e => this.displayFavorite(e, 'src')}
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