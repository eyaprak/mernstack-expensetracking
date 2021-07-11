import React, { useState, useContext } from 'react'
import { GlobalContext } from '../context/GlobalState';

export default function AddTransaction() {
    const [text, setText] = useState('')
    const [amount, setAmount] = useState(0);

    const { addTransaction } = useContext(GlobalContext);

    const clickHandler = (e) => {
        e.preventDefault();
        const newTransaction = {
            id: new Date().getTime(), text, amount: +amount
        }
        addTransaction(newTransaction);
        setText('')
        setAmount(0)
    }

    return (
        <>
            <h3>Add new transaction</h3>
            <form>
                <div className="form-control">
                    <label htmlFor="text">Text</label>
                    <input
                        onChange={(e) => setText(e.target.value)}
                        value={text}
                        type="text"
                        placeholder="Enter text..."
                    />
                </div>
                <div className="form-control">
                    <label htmlFor="amount">Amount<br />
                        (negative - expense, posistive - income</label>
                    <input
                        type="number"
                        placeholder="Enter amount..."
                        onChange={(e) => setAmount(e.target.value)}
                        value={amount}
                    />
                </div>
                <button className="btn" onClick={(e) => clickHandler(e)}>Add transaction</button>
            </form>
        </>
    )
}
