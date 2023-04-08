import React, { useState } from "react";
import "./style.css"
function TransactionTable(props) {
    const [editingTransaction, setEditingTransaction] = useState(null);

    const handleDelete = (id) => {
        const updatedTransactions = props.transactions.filter(
            (transaction) => transaction.id !== id
        );
        props.onUpdateTransactions(updatedTransactions);
    };

    const handleEdit = (transaction) => {
        setEditingTransaction(transaction);
        props.onOpenModal();
    };

    return (
        <table className="transaction-table">
            <thead>
            <tr>
                <th>Type</th>
                <th>Amount</th>
                <th>Action</th>
            </tr>
            </thead>
            <tbody>
            {props.transactions.map((transaction) => (
                <tr key={transaction.id}>
                    <td>{transaction.type}</td>
                    <td>{transaction.amount}</td>
                    <td>
                        <button
                            className="delete-transaction-btn"
                            onClick={() => handleDelete(transaction.id)}
                        >
                            Delete
                        </button>
                        <button
                            className="edit-transaction-btn"
                            onClick={() => handleEdit(transaction)}
                        >
                            Edit
                        </button>
                    </td>
                </tr>
            ))}
            </tbody>
        </table>
    );
}

export default TransactionTable;
