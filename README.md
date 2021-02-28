# react-simple-snake

[![GitHub](https://img.shields.io/github/license/MaelDrapier/react-simple-snake)](https://github.com/MaelDrapier/react-simple-snake/blob/master/LICENSE)
[![npm](https://img.shields.io/npm/v/react-simple-snake?color=blue)](https://www.npmjs.com/package/react-simple-snake)
[![npm peer dependency version](https://img.shields.io/npm/dependency-version/react-simple-snake/peer/react?color=cyan)](https://www.npmjs.com/package/react)
[![npm](https://img.shields.io/npm/dm/react-simple-snake)](https://www.npmjs.com/package/react-simple-snake)

A simple snake game created with the [React](https://reactjs.org) JavaScript library.

<br/>

## Installation

### To add it to your react app

- `npm install react-simple-snake`

## Dependencies

This project needs [react](https://www.npmjs.com/package/react) to operate. Install it with `npm install react`

<br/>

## Usage

### To import it in your component

```javascript
import Snake from 'react-simple-snake'

export default function YourComponent() {
  return (
    <div>
      <Snake />
    </div>
  )
}
```

### Props

_All props are optional_

|       Prop        |  Type  | Default value | Description                                                                                            |
| :---------------: | :----: | :-----------: | :----------------------------------------------------------------------------------------------------- |
| `percentageWidth` | number |     `40`      | A **percentage** defining the width of the game board, based on the width of the game's parent element |
| `startSnakeSize`  | number |      `6`      | The starting size of the snake                                                                         |
|   `snakeColor`    | string |   _random_    | The color of the snake                                                                                 |
|   `appleColor`    | string |   _random_    | The color of apples                                                                                    |

<br/>

## How to play

You can move the snake with the arrow keys or `W` / `A` / `S` / `D`.

<br/>

## High-Score

The highest score is saved locally in the browser's _local storage_, in a `snakeHighScore` field.
