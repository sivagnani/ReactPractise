import ReactDOM from 'react-dom/client';
import React from 'react';
import './index.css';
import {Board} from './index';
class Game extends React.Component {
    constructor(props){
        super(props);
        this.state={
            history:[{ square: Array(9).fill(null)}],
            xIsNext: true,
            stepNumber:0,
        };
        
    }
    handleClick(i){
        let history=this.state.history;
        let current = history[history.length-1];
        let square=current.square.slice();
        if(this.checkWinner(square)||square[i]){
            return;
        }
        square[i]=this.state.xIsNext?"X":"O";
        this.setState({history:history.concat([{square:square,}]),
            xIsNext:!this.state.xIsNext,stepNumber:history.length});
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
            <ol>{moves}</ol>
          </div>
        </div>
      );
    }
  }
  
  // ========================================
  
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(<Game />);