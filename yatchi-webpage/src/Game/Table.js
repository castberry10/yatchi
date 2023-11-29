import React from "react";

import './Table.css'

/* 

이 컴포넌트는 2가지 역할만 수행.
1. 실제 게임이 돌아가고 있을때 점수를 보여준다.
2. 사용자의 입력을 받아서(어떤 점수로 턴을 끝낼지에 대해서만) MainGame 컴포넌트에 전송

*/

function Table(props) {
    const numberPairScore = props.currentGameState.numberPairScore;
    console.log(numberPairScore);

    let numberTableList = []
    for(let i = 0; i < numberPairScore.length; i++){
        const { diceNumber, myScore, opponentScore } = numberPairScore[i];
        numberTableList.push(
            <tr key={ diceNumber }>
                <td>{ diceNumber }</td>
                <td>{ myScore }</td>
                <td>{ opponentScore }</td>
            </tr>
        );
    }

    return (
        <div className="Table">
            <table className="ScoreTable">
                <colgroup>
                    <col></col>
                    <col></col>
                    <col></col>
                </colgroup>
                <thead>
                    <tr>
                        <td>Turn { props.currentGameState.currentTurn }/12</td>
                        <td rowSpan="2">MyThumbNail</td>
                        <td rowSpan="2">OpponentThumbNail</td>
                    </tr>
                    <tr>
                        <td>Categories</td>
                    </tr>
                    { numberTableList }
                </thead>
                <tbody>
                    <tr>
                        <td>Choice</td>
                        <td>hi!</td>
                        <td>hi!</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default Table;