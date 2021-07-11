import { createContext, useReducer } from 'react'
import { AppReducer } from './AppReducer'
import React from 'react'
import axios from 'axios'

export const GlobalContext = createContext();

const initialState = {
    transactions: [],
    error: null,
    loading: true
}


const GlobalState = (props) => {
    const [state, dispatch] = useReducer(AppReducer, initialState)


    //Actions
    async function getTransactions() {
        try {
            const res = await axios.get('/api/v1/transactions');
            dispatch({
                type: 'GET_TRANSACTIONS',
                payload: res.data.data
            })
        } catch (err) {
            dispatch({
                type: 'TRANSACTION_ERROR',
                payload: err.response.data.error
            })
        }
    }



    async function deleteTransaction(id) {
        try {
            await axios.delete(`/api/v1/transactions/${id}`);
            dispatch({
                type: 'DELETE_TRANSACTION',
                payload: id
            })
        } catch (err) {
            dispatch({
                type: 'TRANSACTION_ERROR',
                payload: err.response.data.error
            })
        }

    }

    async function addTransaction(data) {
        const config = {
            headers: {
                'Context-Type': 'application/json'
            }
        }
        try {
            const res = await axios.post('/api/v1/transactions', data, config)
            dispatch({
                type: 'ADD_TRANSACTION',
                payload: res.data.data
            })
        } catch (err) {
            dispatch({
                type: 'TRANSACTION_ERROR',
                payload: err.response.data.error
            })
        }


    }


    return (
        <GlobalContext.Provider value={{
            transactions: state.transactions,
            error: state.error,
            loading: state.loading,
            getTransactions,
            addTransaction,
            deleteTransaction
        }}>
            {props.children}
        </GlobalContext.Provider>
    )
}

export default GlobalState;