import React, { Component } from 'react';
import './App.css';

const TILE_COUNT = 16;  

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tiles: [],      
      lastFlipped: null,  
      clicks: 0,     
    };
  }

  componentDidMount() {
    this.resetTiles();
  }

  resetTiles() {
    let tiles = [];
    let number = 0;

    for (let i = 0; i < TILE_COUNT / 2; i++) {
      number++;
      tiles.push({ flipped: false, matched: false, number });
      tiles.push({ flipped: false, matched: false, number });
    }

    for (let i = 0; i < tiles.length; i++) {
      const swapWith = Math.floor(Math.random() * tiles.length);
      [tiles[i], tiles[swapWith]] = [tiles[swapWith], tiles[i]];
    }

    this.setState({ tiles, clicks: 0 });
  }

  flipTile(index) {
    const { tiles, lastFlipped, clicks } = this.state;

    if (tiles[index].flipped || tiles[index].matched) return;

    tiles[index].flipped = true;

    if (lastFlipped === null) {
      this.setState({ tiles, lastFlipped: index, clicks: clicks + 1 });
      return;
    }

    const firstTile = tiles[lastFlipped];
    const secondTile = tiles[index];

    if (firstTile.number === secondTile.number) {
      firstTile.matched = true;
      secondTile.matched = true;
      this.setState({ tiles, lastFlipped: null, clicks: clicks + 1 });
    } else {

      setTimeout(() => {
        firstTile.flipped = false;
        secondTile.flipped = false;
        this.setState({ tiles, lastFlipped: null, clicks: clicks + 1 });
      }, 1000);
    }
  }

  renderTile(tile, index) {
    let classes = ["Tile"];
    if (tile.flipped) classes.push("flipped");
    if (tile.matched) classes.push("matched");

    return (
      <div
        key={index}
        className={classes.join(" ")}
        onClick={() => this.flipTile(index)}
      >
        {tile.flipped || tile.matched ? tile.number : "?"}
      </div>
    );
  }

  render() {
    const { tiles, clicks } = this.state;

    return (
      <div className="App">
        <h1>Memory Game</h1>

        <div className="board">
          {tiles.map((tile, index) => this.renderTile(tile, index))}
        </div>

        <p>Moves: {clicks}</p>

        <button onClick={() => this.resetTiles()}>Restart Game</button>
      </div>
    );
  }
}

export default App;
