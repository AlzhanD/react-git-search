import React, { useState } from 'react'
import { history } from '../redux'
import Head from './head'
import './main.scss'

const Main = () => {
  const [userValue, setUserValue] = useState('')
  return (
    <div className="main-bg flex justify-center items-center h-screen background-image">
      <Head title="Hello" />
      <div />
      <div className=" div-bg border-solid border-2 border-orange-600 p-20">
        <img
          className="relative mx-auto h-12 w-auto"
          src="https://image.flaticon.com/icons/svg/25/25231.svg"
          alt="Workflow"
        />
        <h2 className="z-10 relative mt-6 mb-6 text-center text-3xl leading-9 font-extrabold text-gray-900">
          Users repository search
        </h2>
        <input
          onKeyPress={(ev) => {
            if (ev.key === 'Enter') {
              history.push(`/${userValue}`)
            }
          }}
          type="text"
          id="input-field"
          className="inputClass bg-gray-400 mr-4 relative appearance-none border-2 border-gray-400 rounded py-2 px-4 text-black-800 leading-tight focus:outline-none focus:bg-white focus:border-orange-500"
          value={userValue}
          onChange={(event) => setUserValue(event.target.value)}
        />
        <button
          type="button"
          id="search-button"
          className="btnClass transition duration-500 ease-in-out bg-blue-500 hover:bg-red-500 transform hover:-translate-y-1 hover:scale-110 ... bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => history.push(`/${userValue}`)}
        >
          View repositories
        </button>
      </div>
    </div>
  )
}

Main.propTypes = {}

export default Main
