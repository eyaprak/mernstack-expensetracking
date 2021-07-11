import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'
import { numberWithCommas } from '../utils/format'
export default function Transaction({ trans }) {
    const { deleteTransaction } = useContext(GlobalContext)
    return (
        <li className={Math.sign(trans.amount) === -1 ? "minus" : "plus"}>
            {trans.text} <span>${numberWithCommas(trans.amount)}</span><button className="delete-btn" onClick={() => deleteTransaction(trans._id)}>x</button>
        </li>
    )
}
