import React from 'react';
import './index.css';
function Square(props){
    return(<button className="square" onClick={()=>props.onClick()}>
    {props.val}
  </button>);
}
// class Square extends React.Component {
//     constructor(props){
//         super(props);
//         this.state={
//             value:null,
//         };
//         this.stat={
//             val:"Y",
//         };
//     }
//     render() {
//       return (
//         <button className="square" onClick={()=>this.props.onClick()}>
//           {this.props.val}
//         </button>
//       );
//     }
//   }
  
export class Board extends React.Component {
    // constructor(prop){
    //     super(prop);
    //     this.state={
    //         square:Array(9).fill(null),
    //         xIsNext:true,
    //     };
    // }
    renderSquare(i) {
      return <Square val={this.props.square[i]} onClick={()=>this.props.onClick(i)}/>;
    }
    // handleClick(i){
    //     let sq = this.state.square.slice();
    //     if(this.checkWinner(sq)||sq[i]){
    //         return;
    //     }
    //     sq[i]=this.state.xIsNext?"X":"O";
    //     this.setState({square:sq,xIsNext:!this.state.xIsNext});
    // }
    // checkWinner(square){
    //     let lines=[
    //         [0,1,2],[3,4,5],[6,7,8],
    //         [0,3,6],[1,4,7],[2,5,8],
    //         [0,4,8],[2,4,6]
    //     ];
    //     for(let i=0;i<lines.length;i++){
    //         let [a,b,c]=lines[i];
    //         if((square[a])&&(square[a]===square[b])&&(square[a]===square[c])){
    //             return square[a]
    //         }
    //     }
    //     return null;
    // }
    render() {
    //     let winner = this.checkWinner(this.state.square);
    //   let status;
    //   if(winner){
    //     status="Winner: "+winner;
    //   }
    //   else{
    //     console.log(this.state.square.filter((x)=>x==null));
    //     if(this.state.square.filter((x)=>(x==null)).length){
    //         status='Next player:'+(this.state.xIsNext?"X":"O");
    //     }
    //     else{
    //         status = 'Match Drawn';
    //     }
    //   }
      return (
        <div>
          <div className="board-row">
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
          </div>
          <div className="board-row">
            {this.renderSquare(3)}
            {this.renderSquare(4)}
            {this.renderSquare(5)}
          </div>
          <div className="board-row">
            {this.renderSquare(6)}
            {this.renderSquare(7)}
            {this.renderSquare(8)}
          </div>
        </div>
      );
    }
  }