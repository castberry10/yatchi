import React, { useState } from "react";
import './MainGame.css'

import Table from './Table';

function MainGame() {
    let [ currentGameState, setCurrentGameState ] = useState(
        {
            currentTurn: 1,
            numberPairScore : [
                { diceNumber: 'Aces', myScore: 5, opponentScore: 5 },
                { diceNumber: 'Dueces', myScore: 10, opponentScore: 10 },
                { diceNumber: 'Threes', myScore: 15, opponentScore: 15 },
                { diceNumber: 'Fours', myScore: 20, opponentScore: 20 },
                { diceNumber: 'Fives', myScore: 25, opponentScore: 25 },
                { diceNumber: 'Sixes', myScore: 30, opponentScore: 30 }
            ],
            choice : { myScore: 20, opponentScore: 20 },
            specialPairScore : [
                { pairName: '4 of a Kind', myScore: 0, opponentScore: 0 },
                { pairName: 'Full House', myScore: 0, opponentScore: 0 },
                { pairName: 'S. straight', myScore: 15, opponentScore: 15 },
                { pairName: 'L. straight', myScore: 30, opponentScore: 30 },
                { pairName: 'Yatchi', myScore: 50, opponentScore: 50 }
            ]
        }
    );

    console.log(currentGameState);

    return (
        <div className="MainGame">
            <Table currentGameState={currentGameState}></Table>
            <div className="DiceRoll">
                주사위 던져지는곳
            </div>
        </div>
    );
}

export default MainGame;