import React from "react";

class GalleryPageTest extends React.Component {
    
    state = {
        art: [],
        artObjects: [],
        DBLoaded: false,
        token: 'sess-ACAi73JHw0p4uzU8M4kzAT1lZm7DVamU6PeyUvkI',
    }

    //get art
    componentDidMount () {
        this.getDBArt();
        setTimeout(() => {
            this.getAllArt();
        }, 1000);
        setTimeout(() => {
            this.showArt();
        }, 2000)
    }



    getDBArt = () => {
        //get the artwork saved in mongo DB
        let artData = [];

        fetch(`/api/artwork`, {
            method: "GET",
        })
        .then(res => res.json())
        .then((data) => {
            artData = data
            this.setState({art: artData})
            this.setState({DBLoaded: true})
        })
    }
    
    getAllArt = () => {

        //get the task for each art piece
        this.state.art.forEach(artpiece => {
            fetch(`/api/dalleTask?k=${this.state.token}&q=${artpiece.task_id}`, {
                method: "GET", 
                headers: {
                    'Content-Type': 'application/json'
                },
            })
            .then(res => res.json())
            .then((data) => {
                let artObj = {
                    img_link: data.result.generations.data[artpiece.selected_pos].generation.image_path,
                    content: artpiece.content,
                    signature: artpiece.signature,
                }
                this.state.artObjects.push(artObj);
            })
        });
    }

    showArt = () => {
        let galleryList = document.createElement("ul");
        this.state.artObjects.forEach(artpiece => {
            let galleryItem = document.createElement("li");
            galleryItem.innerHTML = `
            <img className='final-image' src=${artpiece.img_link} />
            <img className='signature-image' src=${artpiece.signature} />
            <p className='art-content'>${artpiece.content}</p>
            `;
            galleryList.appendChild(galleryItem);
        });
        document.body.appendChild(galleryList);
    }

    render() {
        return (
            <div>
                <h1>Gallery Page Test</h1>
                {/* <input type="text"></input> */}
            </div>
        )
    }
}

export default GalleryPageTest;