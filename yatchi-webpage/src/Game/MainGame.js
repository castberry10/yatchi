import React, { useState } from "react";
import './MainGame.css'

function MainGame() {
    return (
        <div className="MainGame">
            <div className="Table">
                표나오는 곳
            </div>
            <div className="DiceRoll">
                주사위 던져지는곳
            </div>
        </div>
    );
}

export default MainGame;