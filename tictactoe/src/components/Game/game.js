import React from 'react';
import "../style.css";
import {Board} from '../Board/board';
function Move(props){
    let col = props.pos%3 + 1;
    let row = Math.floor(props.pos/3)+1;
    return(
        <p>{props.player} is placed at col: {col} Row: {row}</p>
    );
}
export default class Game extends React.Component {
    constructor(props){
        super(props);
        this.state={
            history:[{ square: Array(9).fill(null),pos:null,player:null}],
            xIsNext: true,
            stepNumber:0,
        };
        
    }
    handleClick(i){
        let history=this.state.history;
        let current = history[history.length-1];
        let square=current.square.slice();
        let player=current.player;
        let position=current.position;
        if(this.checkWinner(square)||square[i]){
            return;
        }
        square[i]=this.state.xIsNext?"X":"O";
        player=square[i];
        position=i;
        this.setState({history:history.concat([{square:square,player:player,pos:position}]),
            xIsNext:!this.state.xIsNext,stepNumber:history.length});
        return(<Move player={square[i]} pos={i}/>);
    }
    checkWinner(square){
        let lines=[
            [0,1,2],[3,4,5],[6,7,8],
            [0,3,6],[1,4,7],[2,5,8],
            [0,4,8],[2,4,6]
        ];
        for(let i=0;i<lines.length;i++){
            let [a,b,c]=lines[i];
            if((square[a])&&(square[a]===square[b])&&(square[a]===square[c])){
                return square[a]
            }
        }
        return null;
    }
    jumpTo(move){
      this.setState({
        xIsNext:(move%2===0),
        stepNumber:move,
      });
    }
    render() {
        let history=this.state.history.slice(0,this.state.stepNumber+1);
        let current = history[history.length-1];
        let winner = this.checkWinner(current.square);
        let col = current.pos%3 + 1;
        let row = Math.floor(current.pos/3)+1;
        let moves=history.map((step,move)=>{
            let des = move?"Go to move "+move:"Go to game start";
            return(
                <li key={move}>
                    <button onClick={()=>this.jumpTo(move)}>{des}</button>
                </li>
            );
        });
      let status;
      if(winner){
        status="Winner: "+winner;
      }
      else{
        if(current.square.filter((x)=>(x==null)).length){
            status='Next player:'+(this.state.xIsNext?"X":"O");
        }
        else{
            status = 'Match Drawn';
        }
      }
      return (
        <div className="game">
          <div className="game-board">
            <Board square={current.square} onClick={(i)=>this.handleClick(i)}/>
          </div>
          <div className="game-info">
            <div>{status}</div>
            <ol>
                {moves}
                <p>{current.player} is placed at col: {col} Row: {row}</p>
            </ol>
          </div>
        </div>
      );
    }
  }