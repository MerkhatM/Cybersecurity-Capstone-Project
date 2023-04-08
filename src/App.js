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
           <TransactionBlock />
       </div>
    );
};

export default App;

