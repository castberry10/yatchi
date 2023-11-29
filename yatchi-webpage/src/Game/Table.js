import React from "react";

import './Table.css'

/* 

이 컴포넌트는 2가지 역할만 수행.
1. 실제 게임이 돌아가고 있을때 점수를 보여준다.
2. 사용자의 입력을 받아서(어떤 점수로 턴을 끝낼지에 대해서만) MainGame 컴포넌트에 전송

나중에 좀더 작은 컴포넌트로 쪼갤 수 있지만 지금은 이렇게 놔둘 예정

*/

function Table(props) {
    const numberPairScore = props.currentGameState.numberPairScore;
    const choice = props.currentGameState.choice;
    const specialPairScore = props.currentGameState.specialPairScore;
    console.log(numberPairScore);

    let numberTableList = [];
    let mySubTotal = 0, opponentSubTotal = 0;
    let myTotal = 0, opponentTotal = 0;
    for(let i = 0; i < numberPairScore.length; i++){
        const { diceNumber, myScore, opponentScore } = numberPairScore[i];
        mySubTotal += myScore;
        opponentSubTotal += opponentScore;
        numberTableList.push(
            <tr key={ diceNumber }>
                <td>{ diceNumber }</td>
                <td>{ myScore }</td>
                <td>{ opponentScore }</td>
            </tr>
        );
    }
    myTotal += mySubTotal + (mySubTotal >= 63 ? 35 : 0);
    opponentTotal += opponentSubTotal + (opponentSubTotal >= 63 ? 35 : 0);

    let specialTableList = [];
    for(let i = 0; i < specialPairScore.length; i++){
        const { pairName, myScore, opponentScore } = specialPairScore[i];
        myTotal += myScore;
        opponentTotal += opponentScore;
        specialTableList.push(
            <tr key={ pairName }>
                <td>{ pairName }</td>
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
                    <tr className="tableBlack">
                        <td>SubTotal</td>
                        <td><span>{ mySubTotal }</span> / 63</td>
                        <td><span>{ opponentSubTotal }</span> / 63</td>
                    </tr>
                    <tr className="tableBlack">
                        <td>Bouns</td>
                        <td>{ mySubTotal >= 63 ? "+35" : "0" }</td>
                        <td>{ opponentSubTotal >= 63 ? "+35" : "0" }</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Choice</td>
                        <td>{ choice.myScore }</td>
                        <td>{ choice.opponentScore }</td>
                    </tr>
                </tbody>
                <tfoot>
                    { specialTableList }
                    <tr>
                        <td>Total</td>
                        <td>{ myTotal }</td>
                        <td>{ opponentTotal }</td>
                    </tr>
                </tfoot>
            </table>
        </div>
    );
}

export default Table;