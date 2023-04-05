import React, { useState } from "react";
import "./style.css";

const CostCard = () => {
    const [cardBlocks, setCardBlocks] = useState([]);

    const addCardBlock = () => {
        setCardBlocks([
            ...cardBlocks,
            { title: 'Покупки', img: 'https://w7.pngwing.com/pngs/34/771/png-transparent-computer-icons-retail-supermarket-shopping-retail-white-text-rectangle.png', text: 'Balance' },
        ]);
    };

    return (
        <div className="card">
            <div className="header">
                <h2>Cost</h2>
                <p>$500</p>
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

export default CostCard;
