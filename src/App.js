import React from 'react';
import IncomeCard from './components/IncomeCard/IncomeCard';
import CostCard from './components/CostCard/CostCard';

const App = () => {
    return (
        <div className="container">
            <div className="cards">
                <IncomeCard />
                <CostCard />
            </div>
        </div>
    );
};

export default App;

