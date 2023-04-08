import React, { useState } from 'react';

const IncomeCard = () => {
    const [cardBlocks, setCardBlocks] = useState([]);

    const addCardBlock = () => {
        setCardBlocks([
            ...cardBlocks,
            { title: 'МУИТ', img: 'https://itest.kz/uploads/contest/partners/iitu.jpg', text: 'balance' },
        ]);
    };

    return (
        <div className="card">
            <div className="header">
                <h2>Income</h2>
                <p>$1000</p>
            </div>
            <div className="body">
                {cardBlocks.map((block, index) => (
                    <div key={index} className="card-block">
                        <h3>{block.title}</h3>
                        <img src={block.img} alt={block.title} />
                        <span>{block.text}</span>
                    </div>
                ))}
                <button onClick={addCardBlock}>+</button>
            </div>
        </div>
    );
};

export default IncomeCard;
