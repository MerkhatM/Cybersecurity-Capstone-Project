import React, { useState } from "react";
import "./style.css";
import food from  "../../assets/food.png";
import transport from "../../assets/transportpng.png";
import purchase from "../../assets/buy.png";
import TransactionBlock from "../TransactionBlock/TransactionBlock";
const CostCard = () => {
    function sumBalance(cards) {
        return cards.reduce((total, card) => total + parseFloat(card.price), 0);
    }
    const initialCardBlocks = [
        { title: 'Еда', img: food, price: 5000 },
        { title: 'Транспорт', img: transport, price: 5300 },
        { title: 'Покупки', img: purchase, price: 100000 },
    ];
    const [cardBlocks, setCardBlocks] = useState(initialCardBlocks);

    const addCardBlock = () => {
        setCardBlocks([
            ...cardBlocks,
            { title: 'Покупки', img: 'https://w7.pngwing.com/pngs/34/771/png-transparent-computer-icons-retail-supermarket-shopping-retail-white-text-rectangle.png', price: 50000 },
        ]);
    };

    return (
        <div>
            <div className="cardCost">
                <div className="header">
                    <h2>Cost</h2>
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
            <TransactionBlock cardBlocks={cardBlocks}/>
        </div>

    );

};

export default CostCard;
