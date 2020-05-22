import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './main.scss'

const Header = (props) => {
  const [search, setSearch] = useState('')
  props.handleFind(search)
  return (
    <nav className="flex items-center flex-wrap justify-between bg-gray-900 h-24 pr-20 pl-20 header-bg-cl">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        {props.userName && <img className="w-16 mx-2" src={props.user.avatar_url} alt="" />}
        {props.userName && <span className="text-3xl mx-2">{props.user.login}</span>}
      </div>
      <div>
        {!props.readMe && (
          <input
            className="placeholder-white appearance-none bg-transparent border-none w-full text-gray-800 mr-3 py-1 px-2 leading-tight focus:outline-none"
            type="text"
            placeholder="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        )}
      </div>
      <div id="menu" className="flex space-x-4">
        <div>
          {props.userName && (
            <Link to="/">
              <button
                type="button"
                className="btnClass mx-2 transition duration-500 ease-in-out bg-blue-500 hover:bg-red-500 transform hover:-translate-y-1 hover:scale-110 ... bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded"
              >
                Main
              </button>
            </Link>
          )}
        </div>
        <div>
          {props.readMe && (
            <Link to={`/${props.userName}`}>
              <button
                type="button"
                className="btnClass mx-2 transition duration-500 ease-in-out bg-blue-500 hover:bg-red-500 transform hover:-translate-y-1 hover:scale-110 ... bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded"
              >
                Repositories
              </button>
            </Link>
          )}
        </div>
      </div>
    </nav>
  )
}

export default React.memo(Header)
