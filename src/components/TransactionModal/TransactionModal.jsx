import React, { useState } from "react";
import "./style.css";
function TransactionModal({ isOpen, onClose, onAddTransaction }) {
    const [type, setType] = useState("");
    const [amount, setAmount] = useState("");

    const handleTypeChange = (event) => {
        setType(event.target.value);
    };

    const handleAmountChange = (event) => {
        setAmount(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const newTransaction = { type, amount };
        onAddTransaction(newTransaction);
        setType("");
        setAmount("");
        onClose();
    };

    if (!isOpen) {
        return null;
    }

    return (
        <div className="transaction-modal-overlay">
            <div className="transaction-modal">
                <h2>Add Transaction</h2>
                <form onSubmit={handleSubmit}>
                    <label>
                        Type:
                        <select value={type} onChange={handleTypeChange}>
                            <option value="food">Food</option>
                            <option value="shopping">Shopping</option>
                            <option value="transport">Transport</option>
                        </select>
                    </label>
                    <label>
                        Amount:
                        <input
                            type="number"
                            value={amount}
                            onChange={handleAmountChange}
                        />
                    </label>
                    <button type="submit">Add</button>
                    <button type="button" onClick={onClose}>
                        Cancel
                    </button>
                </form>
            </div>
        </div>
    );
}

export default TransactionModal;
