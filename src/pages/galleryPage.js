const { connectToDatabase } = require('../../utils/connectMongo');

export default function Gallery({ art }) {

  const token = 'sess-ACAi73JHw0p4uzU8M4kzAT1lZm7DVamU6PeyUvkI';

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

  let getTask = (task_id) => {
    // task-7EDiVVlG84i9cZswtT2kPYFJ
    // task-7EDiVVlG84i9cZswtT2kPYFJ
    // task-7EDiVVlG84i9cZswtT2kPYFJ
    // testing what the task id returns
    fetch(`/api/dalleTask?k=${token}&q=task-7EDiVVlG84i9cZswtT2kPYFJ`, {
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

  return (
    <div>
      <ul>
        <button onClick={getTask}></button>
        {/* show a random image, change images ever  */}
        {art.map((artpiece) => (
          <li>
            <img className='final-image' src={artpiece.img_link} />
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
    //get the 
    
    return {
      props: {
        art: JSON.parse(JSON.stringify(art)),
      },
    };
  }
