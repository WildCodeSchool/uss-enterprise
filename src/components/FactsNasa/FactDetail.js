import React from 'react';

const FactDetail = (fact) => {
    return (
        <div className="FactDetail">
            <h3>{fact.title}</h3>
            <img src={fact.url} alt={fact.title} />
            <p>
                {fact.explanation}
            </p>

        </div>
    );
}

export default FactDetail;