import React, { useState } from "react";
import "./style.css";

const TransactionBlock = (props) => {
    const [transactions, setTransactions] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [selectedOption, setSelectedOption] = useState("");
    const [inputValue, setInputValue] = useState("");

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    };

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleAddTransaction = () => {
        setShowModal(true);
    };

    const handleModalClose = () => {
        setShowModal(false);
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();
        const newTransaction = {
            id: Date.now(),
            category: selectedOption,
            amount: inputValue
        };
        setTransactions([...transactions, newTransaction]);
        setShowModal(false);
    };

    const handleDeleteTransaction = (id) => {
        const filteredTransactions = transactions.filter((transaction) => {
            return transaction.id !== id;
        });
        setTransactions(filteredTransactions);
    };

    const handleEditTransaction = (id) => {
        const editedTransaction = transactions.find((transaction) => {
            return transaction.id === id;
        });
        setSelectedOption(editedTransaction.category);
        setInputValue(editedTransaction.amount);
        handleDeleteTransaction(id);
        setShowModal(true);
    };

    return (
        <div className="transaction-block">
            <table>
                <thead>
                <tr>
                    <th>КАТЕГОРИЯ</th>
                    <th>СЧЕТ</th>
                    <th>ДЕЙСТВИЕ</th>
                </tr>
                </thead>
                <tbody>
                {transactions.map((transaction) => {
                    return (
                        <tr key={transaction.id}>
                            <td>{transaction.category}</td>
                            <td>{transaction.amount}</td>
                            <td>
                                <button className="editButton" onClick={() => handleEditTransaction(transaction.id)}>Edit</button>
                                <button className="deleteButton" onClick={() => handleDeleteTransaction(transaction.id)}>Delete</button>
                            </td>
                        </tr>
                    );
                })}
                </tbody>
            </table>
            <button className="add-transaction-button" onClick={handleAddTransaction}>
                Add Transaction
            </button>
            {showModal && (
                <div className="modal">
                    <div className="modal-content">

                        <form onSubmit={handleFormSubmit}>
                            <label>
                                КАТЕГОРИЯ:
                                <select value={selectedOption} onChange={handleOptionChange}>
                                    {props.cardBlocks.map(item => (
                                        <option key={item.id} value={item.id}>{item.title}</option>
                                    ))}
                                </select>
                            </label>
                            <label>
                                СЧЁТ:
                                <input type="number" value={inputValue} onChange={handleInputChange} />
                            </label>
                            <button type="submit">Submit</button>
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

export default TransactionBlock;
