import React, { useState } from "react";
import "./style.css";
import food from  "../../assets/food.png";
import transport from "../../assets/transportpng.png";
import purchase from "../../assets/buy.png";
import TransactionBlock from "../TransactionBlock/TransactionBlock";
const CostCard = () => {
    const [showModal, setShowModal] = useState(false);
    const [title,setTitle]=useState("");
    const [img,setImage]=useState("https://itest.kz/uploads/contest/partners/iitu.jpg");
    const [price,setPrice]=useState(0);
    const [id,setId]=useState(1)
    function sumBalance(cards) {
        return cards.reduce((total, card) => total + parseFloat(card.price), 0);
    }
    const initialCardBlocks = [
        { id:1, title: 'Еда', img: food, price: 5000 },
        { id:2, title: 'Транспорт', img: transport, price: 5300 },
        { id:3, title: 'Покупки', img: purchase, price: 100000 },
    ];
    const [cardBlocks, setCardBlocks] = useState(initialCardBlocks);
    const handleDeleteIncomeCard=(cardId)=>{
        setCardBlocks(cardBlocks.filter((card)=> card.id !== cardId))
    }
    const addCardBlock = () => {
        setCardBlocks([
            ...cardBlocks,
            { id:id, title: title, img: img, price:price},

        ]);
        setId(id+1)
        setTitle("")
        setImage("https://itest.kz/uploads/contest/partners/iitu.jpg")
        setPrice(0)
        handleModalClose()
    };
    const handleAddCostCard = () => {
        setShowModal(true);
    };
    const handleModalClose=()=>{
        setShowModal(false);
        document.body.style.overflow = 'auto';
    }
    const handleModalOpen = () => {

        setShowModal(true);
        document.body.style.overflow = 'hidden';
    }
    const handlAddAndModalOpen = () => {
        handleAddCostCard();
        handleModalOpen();
    }
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
                            <button  className="delete-button" onClick={()=>handleDeleteIncomeCard(block.id)}> X</button>
                            <h3>{block.title}</h3>
                            <img src={block.img} alt={block.title} />
                            <span>{block.price} KZT</span>
                        </div>
                    ))}
                    <button onClick={handlAddAndModalOpen}>+</button>
                </div>

            </div>
            <TransactionBlock cardBlocks={cardBlocks}/>

            {showModal && (
                <div className="modal">
                    <div className="modal-content">

                        <form >
                            <div className="form-control">
                                <label>Title</label>
                                <input
                                    type="text"
                                    placeholder="Add Title"
                                    value={title}
                                    onChange={e => setTitle(e.target.value)}
                                />
                            </div>
                            <div className="form-control">
                                <label>image url</label>
                                <input
                                    type="url"
                                    placeholder="Add image"
                                    value={img}
                                    onChange={e => setImage(e.target.value)}
                                />
                            </div>
                            <div className="form-control">
                                <label>Price</label>
                                <input
                                    type="number"
                                    placeholder="Add price"
                                    value={price}
                                    onChange={e => setPrice(e.target.value)}
                                />
                            </div>

                            <button type="submit" className="submit_modal_button" onClick={addCardBlock}  >Submit</button>
                            <button className="close-button" onClick={handleModalClose}>
                                X
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </div>

    );

};

export default CostCard;