import React, { useState } from 'react';
import "./style.css";
const IncomeCard = () => {
    const [showModal, setShowModal] = useState(false);
    const [title,setTitle]=useState("");
    const [img,setImage]=useState("https://itest.kz/uploads/contest/partners/iitu.jpg");
    const [price,setPrice]=useState(0);
    const [id,setId]=useState(1)
    function sumBalance(cards) {
        return cards.reduce((total, card) => total + parseFloat(card.price), 0);
    }
    const [cardBlocks, setCardBlocks] = useState([]);

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

    const handleAddIncomeCard = () => {
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
        handleAddIncomeCard();
        handleModalOpen();
    }

    const handleDeleteIncomeCard=(cardId)=>{
        setCardBlocks(cardBlocks.filter((card)=> card.id !== cardId))
    }

    return (
        <div className="cardIncome">
            <div className="header">
                <h2>Income</h2>
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

export default IncomeCard;