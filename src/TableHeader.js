import React from 'react'
import './Coin.css'

function TableHeader(){
    return (
    <div className='coin-container'>
        <div className="coin-row">
            <div className="coin">
                <h1>Name of the coin</h1>
            </div>
            <div className="coin-data">
                <p className="coin-price">Price</p>
                {(
                    <p className="coin-percent">Percentage change (%)</p>
                )
            }
            <p className="coin-marketcap">
                Market cap
            </p>
            </div>
        </div>
    </div>
    );
}

export default TableHeader;