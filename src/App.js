import React from 'react';
import IncomeCard from './components/IncomeCard/IncomeCard';
import CostCard from './components/CostCard/CostCard';
import TransactionBlock from "./components/TransactionBlock/TransactionBlock";



const App = () => {
    return (
       <div>
        <div className="container">
            <div className="cards">
                <IncomeCard />
                <CostCard />
            </div>

        </div>
           <TransactionBlock transactions={transactions}
                             onUpdateTransactions={handleUpdateTransaction}
                             onOpenModal={() => setIsModalOpen(true)}
                             onEdit={handleEdit}
                             onDelete={handleDelete}/>
       </div>
    );
};

export default App;

