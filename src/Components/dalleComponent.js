import React from "react";
import FinalPublishing from "./finalPublishing";

class DalleComponent extends React.Component {

    state = {
        token: "",
        query: "",
        result: [],
        loading: false,
        error: false,
        result_provided: false,
        image_selected: false,
        final_image_src: "",
        task_id: "",
        selected_img_pos: "",
    }

    componentDidMount() {
        this.setState({token: 'sess-ACAi73JHw0p4uzU8M4kzAT1lZm7DVamU6PeyUvkI'})
        this.setState({query: this.props.text})
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
                    //fixed bug by adding .data to the end of the result
                    this.setState({result: data.result.data});
                    this.setState({loading: false});
                    this.setState({result_provided: true});
                    this.setState({task_id: data.result.data[0].task_id})
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

    getTask = () => {
        // task-7EDiVVlG84i9cZswtT2kPYFJ
        // task-7EDiVVlG84i9cZswtT2kPYFJ
        // task-7EDiVVlG84i9cZswtT2kPYFJ
        // testing what the task id returns
        fetch(`/api/dalleTask?k=${this.state.token}&q=task-7EDiVVlG84i9cZswtT2kPYFJ`, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json'
            },
        })
            .then(res => res.json())
            .then((data) => {
                //log the image path of the first result
                console.log(data.result.generations.data[0].generation.image_path);
            })
      }
    
    // selects which image you picked and hides the rest, while enlarging the remaining one and adding finalStyling component
    displayFavorite = (e) => {
        this.setState({image_selected: true});
        this.setState({final_image_src: e.target.src});
        this.setState({selected_img_pos: e.target.value});

        console.log(e.target.value);

        e.target.style.transition = "transform 0.5s ease";
        e.target.transform = "scale(1.1)";
        e.target.className = "finalChoice";
        console.log(e.target.src)
        document.querySelectorAll('img').forEach((element) => {
            element.className = "imgNotSelected";
            
        })
        
        //remove other elements from page
        document.querySelector('h1').style.display = "none";
        document.querySelector('#fact').style.display = "none";

      }

    render() {
        return(
            <div>

                <button onClick={this.getTask}></button>

            <h3>{this.props.langText}</h3>
            
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
                this.state.error ? 
                <p> your query could not be processed at this time </p>
                : 
                null
            }

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

            {
                this.state.image_selected ? 
                <FinalPublishing finalImage={ this.state.final_image_src } query={ this.state.query } task_id= { this.state.task_id } selected_img_pos={ this.state.selected_img_pos }></FinalPublishing> : null
            }
        </div>
        )
    }

}

export default DalleComponent;