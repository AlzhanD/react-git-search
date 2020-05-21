import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Loader from 'react-loader-spinner'

const RepoList = (props) => {
  const [search, setSearch] = useState('')
  const filteredList = props.userRepositories.filter((el) => el.name.toLowerCase().includes(search))
  return (
    <div>
      <div className="max-w-xl mx-auto mb-20 border-b border-b-2 border-teal-500 py-2">
        <input
          className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
          type="text"
          placeholder="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <table className="min-w-full">
        <thead>
          <tr>
            <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
              NAME
            </th>
            <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
              DEPLOYMENT
            </th>
            <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
              README
            </th>
            <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
              LAST COMMIT
            </th>
          </tr>
        </thead>
        <tbody>
          {filteredList.map((el) => (
            <tr>
              <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">{el.name}</td>

              <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                <a
                  className={`${el.homepage ? 'text-green-500 ' : 'text-red-500 '} font-semibold`}
                  href={el.homepage ? el.homepage : undefined}
                >
                  Go
                </a>
              </td>
              <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                <Link to={`/${props.userName}/${el.name}`}>View readme</Link>
              </td>
              <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                {new Date(el.updated_at).toLocaleString()}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {!props.userRepositories.length && (
        <div className="flex items-center justify-center mt-20">
          <Loader type="Puff" color="#00BFFF" height={70} width={70} timeout={3000} />
        </div>
      )}
    </div>
  )
}

RepoList.propTypes = {}
export default RepoList
