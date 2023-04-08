import React, { useState } from "react";
import TransactionTable from "../TransactionTable/TransactionTable";
import TransactionModal from "../TransactionModal/TransactionModal";
import "./style.css";
function TransactionBlock() {
    const [transactions, setTransactions] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const handleAddTransaction = (newTransaction) => {
        setTransactions([...transactions, newTransaction]);
    };

    return (
        <div className="transaction-block">
            <TransactionTable transactions={transactions} />
            <button
                className="add-transaction-button"
                onClick={() => setIsModalOpen(true)}
            >
                Add Transaction
            </button>
            <TransactionModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onAddTransaction={handleAddTransaction}
            />
        </div>
    );
}

export default TransactionBlock;
