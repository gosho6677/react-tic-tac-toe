import React from "react";
import Square from "./Square";

class Board extends React.Component {
  renderSquare(i) {
    return (
      <Square
        value={this.props.squares[i]}
        onClick={() => this.props.onClick(i)}
      />
    );
  }

  render() {
    const rows = [];
    for(let i = 0; i < 3; i++) {
      let squares = [];
      for(let j = 0; j < 3; j++) {
        squares.push(<span key={i*3 + j}>{this.renderSquare(i*3 + j)}</span>);
      }
      rows.push(<div className="board-row" key={i}>{squares}</div>);
    }
    return (
      <div>
        {rows}
      </div>
    );
  }
}

export default Board;
