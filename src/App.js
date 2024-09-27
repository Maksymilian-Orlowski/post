import React from 'react';
import Post from './Post';
import EmDa from './assets/EmDa.jpg';
import MiJo from './assets/MiJo.jpg';
import jaSm from './assets/jaSm.jpg';

function App() {
  return (
    <div>
      <Post
        name="Jane Smith"
        username="@janesmith"
        date="May 1, 2030"
        content="Enjoying the sunny day today!"
        profPic={jaSm}
      />
      <Post
        name="Michael Johnson"
        username="@mjohnson"
        date="April 30, 2030"
        content="Just finished a great workout at the gym."
        profPic={MiJo}
      />
      <Post
        name="Emily Davis"
        username="@emilyd"
        date="April 28, 2030"
        content="Can't wait for the weekend!"
        profPic={EmDa}
      />
    </div>
  );
}

export default App;