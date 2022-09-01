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

const addArt = async (e) => {
  e.preventDefault();

  let artpiece = {
    img_link: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    type: "painting",
    content: "test content",
    createdAt: new Date().toISOString()
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

  } else {
      // set the error
      console.log("error");
  }
}

  return (
    <div>
      
      {/* <button onClick={handlePost}>Create User</button>
      <button onClick={addArt}>Add Artpiece</button>

      <h1>Top 20 Movies of All Time</h1>
      <p>
        <small>(According to Metacritic)</small>
      </p> */}

      <h1>The gallery:</h1>
      <ul>
        {art.map((artpiece) => (
          <li>
            <img src={artpiece.img_link} />
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
  
    return {
      props: {
        art: JSON.parse(JSON.stringify(art)),
      },
    };
  }
