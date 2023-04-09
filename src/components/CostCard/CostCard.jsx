import React, { useState } from "react";
import "./style.css";
import food from  "../../assets/food.png";
import transport from "../../assets/transportpng.png";
import purchase from "../../assets/buy.png";
const CostCard = () => {
    const initialCardBlocks = [
        { title: 'Еда', img: food, text: 5000 },
        { title: 'Транспорт', img: transport, text: 5300 },
        { title: 'Покупки', img: purchase, text: 100000 },
    ];
    const [cardBlocks, setCardBlocks] = useState(initialCardBlocks);

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
