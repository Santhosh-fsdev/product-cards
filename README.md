# horizontal_cards

> cards section

[![NPM](https://img.shields.io/npm/v/horizontal_cards.svg)](https://www.npmjs.com/package/horizontal_cards) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save horizontal_cards
```

## Usage

```jsx
import React, { Component } from 'react'

import MyComponent from 'horizontal_cards'
import 'horizontal_cards/dist/index.css'

//This object is the blueprint of the props to be passed.
const obj = {
  text: "Rooms Available",
  cards:{
    card1:{
      title: "Room 1",
      desc:"In the dispensation of CSS libraries and frameworks, a ton of awesome libraries have been built to simplify the work of a developer in the quest to create intuitive interfaces. However, quite a lot of them (Bootstrap, Foundation) impose design decisions that are difficult to undo; they come with predefined",
      image:image1 //signifies the location of the image
    },
    card2:{
      title: "Room 2",
      desc:"In the dispensation of CSS libraries and frameworks, a ton of awesome libraries have been built to simplify the work of a developer in the quest to create intuitive interfaces. However, quite a lot of them (Bootstrap, Foundation) impose design decisions that are difficult to undo; they come with predefined",
      image:image2 //signifies the location of the image
    }
  }
}

function Example(){
  //pass the props as mentioned below inorder to work correctly
    return <MyComponent  content={obj} />
}
```

## License

MIT © [Santhosh-fsdev](https://github.com/Santhosh-fsdev)
