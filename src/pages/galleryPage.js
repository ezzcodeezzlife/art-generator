import React from 'react';

const { connectToDatabase } = require('../../utils/connectMongo');

export default function Gallery({ art }) {

  const handlePost = async (e) => {
    e.preventDefault();

    // reset error and message
    // fields check
    //if (!title || !content) return setError('All fields are required');

    // user structure
    let user = {
      name: "test user 1",
      email: "testemail@email.com",
      createdAt: new Date().toISOString(),
    }

    // save the user
    let response = await fetch('/api/users', {
        method: 'POST',
        body: JSON.stringify(user),
    });

    // get the data
    let data = await response.json();

    if (data.success) {
        // reset the fields
        console.log("success");
        // set the message

    } else {
        // set the error
        console.log("error");
    }
};

const token = 'sess-ACAi73JHw0p4uzU8M4kzAT1lZm7DVamU6PeyUvkI';

let artArray = [];

let getTask = (task_id, img_pos, artpiece_pos) => {
  //get image source from its task_id and position
  // task-7EDiVVlG84i9cZswtT2kPYFJ

  fetch(`/api/dalleTask?k=${token}&q=${task_id}`, {
      method: "GET",
      headers: {
          'Content-Type': 'application/json'
      },
  })
      .then(res => res.json())
      .then((data) => {
          //return the image src of the selected result
          artArray[artpiece_pos].img_link = data.result.generations.data[img_pos].generation.image_path;
      })
}

let assignArtSrc = () => {
  //go through art, get the correct source by calling getTask

    art.forEach((artpiece, index) => {
      // create array of src and content objects
        //get the task_id of artpiece
        let curr_task_id = artpiece.task_id;
        //get position of selected img
        let curr_img_pos = artpiece.selected_pos;
    
        
        //create obj with img_link and content of artpiece
        let artObj = {
          img_link: "",
          content: artpiece.content,
          signature: artpiece.signature,
        }
        
        //source of each art piece
        artArray.push(artObj);
    
        getTask(curr_task_id, curr_img_pos, index);

        console.log("ran")
    })
}

console.log(art);

assignArtSrc();

setTimeout(assignArtSrc, 1000);



  return (
    <div>

      <ul>
        {/* show a random image, change images ever  */}
        {art.forEach((artpiece) => (
          <li>
            <img className='final-image' src={""} />
            <img className='signature-image' src={artpiece.signature}></img>
            <h3>{artpiece.content}</h3>
          </li>
        ))}
      </ul>

      
    </div>
  );
}

export async function getServerSideProps() {

  //load the gallery of art from the database
    const { db } = await connectToDatabase();
  
    const art = await db 
      .collection("art")
      .find({})
      .sort({ createdAt: -1 })
      .limit(20)
      .toArray();
  
    const artJSON = JSON.parse(JSON.stringify(art));
    
    return {
      props: {
        art: artJSON,
      },
    };
  }
