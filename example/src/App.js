import React from 'react'

import { ExampleComponent ,Name ,Card} from 'horizontal_cards'
import 'horizontal_cards/dist/index.css'
import image1 from "./images/linkedin-post.gif";
import image2 from "./images/Screenshot (4).png";

const obj = {
  text: "Rooms Available",
  cards:{
    card1:{
      title: "Room 1",
      desc:"In the dispensation of CSS libraries and frameworks, a ton of awesome libraries have been built to simplify the work of a developer in the quest to create intuitive interfaces. However, quite a lot of them (Bootstrap, Foundation) impose design decisions that are difficult to undo; they come with predefined",
      image:image1
    },
    card2:{
      title: "Room 2",
      desc:"In the dispensation of CSS libraries and frameworks, a ton of awesome libraries have been built to simplify the work of a developer in the quest to create intuitive interfaces. However, quite a lot of them (Bootstrap, Foundation) impose design decisions that are difficult to undo; they come with predefined",
      image: image2
    }
  }
}

const App = () => {

  return <div>
    <ExampleComponent content={obj} />
    </div>
}

export default App
