import React from 'react'

import { Link } from 'react-router-dom'
import Head from './head'

const Dummy = () => {
  return (
    <div>
      <Head title="Hello" />
      <div className="flex items-center justify-center h-screen">
        <div className="bg-indigo-800 text-white font-bold rounded-lg border shadow-lg p-10">
          <div className="transition ease-in-out bg-blue-500 hover:bg-red-500 transform hover:-translate-y-1 hover:scale-110 ...">
            <Link to="/dashboard">
              <p className="font-sans text-lg text-red-400 text-center">Go To Dashboard</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

Dummy.propTypes = {}

export default Dummy
