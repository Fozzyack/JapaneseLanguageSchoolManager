'use client'
import React from 'react'

const Balance = () => {
    const [balance, setBalance] = React.useState<number>(0)
    const getBalance = async () => {
        const res = await fetch('/api/balance', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        if (!res.ok) throw new Error('Something went wrong')
        const data = await res.json()
        setBalance(data.balance)
    }
    React.useEffect(() => {
        getBalance()
    })
    return (
        <div className='text-white'>
            <span>${(balance / 100).toFixed(2)}</span>
        </div>
    )
}

export default Balance