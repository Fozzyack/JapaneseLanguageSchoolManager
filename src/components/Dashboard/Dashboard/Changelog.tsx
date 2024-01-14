'use client'
import { log } from '@/types/dashboard'
import React from 'react'

const Changelog = () => {
  const [logs, setLogs] = React.useState<log[]>([])
  const getLogs = async () => {
    const res = await fetch('/api/changelog', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    if (!res.ok) throw new Error('Something went wrong')
    const data = await res.json()
    setLogs(data)

  }

  React.useEffect(() => {
    getLogs()
  }, [])

  return (
    <div className='md:p-4 p-1 bg-eblack rounded-xl flex flex-col items-center w-full'>
      <h2 className='text-2xl p-2 rounded-xl bg-drabbrown border border-saffron shadow-xl mb-3 font-bold text-eorange text-saffron'>Changelog</h2>
      <div className='w-full h-[200px] overflow-x-scroll md:overflow-x-hidden border-collapse border border-saffron rounded-xl'>
        <table className='table-auto border-separate w-full'>
          <thead>
            < tr className='text-saffron'>

              <th className='text-center md:p-1 border border-bronze'>Changes</th>
              <th className='text-center md:p-1 border border-bronze'>Created</th>
              <th className='text-center md:p-1 border border-bronze'>Completed</th>
              <th className='text-center md:p-1 border border-bronze'>Completed At</th>
            </tr>
          </thead>
          <tbody className='text-white'>
            {
              logs.map((log, index) => (
                <tr key={index}>
                  <td className="text-center md:p-1 border border-bronze">{log.change}</td>
                  <td className="text-center md:p-1 border border-bronze">{new Date(log.createdat).toLocaleDateString('en-GB', { day: '2-digit', month: '2-digit', year: '2-digit' })}</td>
                  <td className="text-center md:p-1 border border-bronze">{log.completed ? 'Yes' : 'No'}</td>
                  <td className="text-center md:p-1 border border-bronze">{new Date(log.completedat).toLocaleDateString('en-GB', { day: '2-digit', month: '2-digit', year: '2-digit' })}</td>
                </tr>

              ))
            }
          </tbody>
        </table>
      </div>

    </div>
  )
}

export default Changelog