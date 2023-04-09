import React, { useState } from 'react';
import "./style.css";
const IncomeCard = () => {
    function sumBalance(cards) {
        return cards.reduce((total, card) => total + parseFloat(card.price), 0);
    }
    const [cardBlocks, setCardBlocks] = useState([]);

    const addCardBlock = () => {
        setCardBlocks([
            ...cardBlocks,
            {title: 'МУИТ', img: 'https://itest.kz/uploads/contest/partners/iitu.jpg', price:36000},

        ]);
    };

    return (
        <div className="card">
            <div className="header">
                <h2>Income</h2>
                <p>{sumBalance(cardBlocks)} KZT</p>
            </div>
            <div className="body">
                {cardBlocks.map((block, index) => (
                    <div key={index} className="card-block">
                        <h3>{block.title}</h3>
                        <img src={block.img} alt={block.title} />
                        <span>{block.price} KZT</span>
                    </div>
                ))}
                <button onClick={addCardBlock}>+</button>
            </div>
        </div>
    );
};

export default IncomeCard;
