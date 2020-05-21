import React from 'react'
import Markdown from 'markdown-to-jsx'
import './readme.scss'
import Loader from 'react-loader-spinner'

const RepoView = (props) => {
  return (
    <div className="markdown-body relative">
      <Markdown>{props.readMe}</Markdown>
      {!props.readMe && (
        <div className="flex items-center justify-center mt-20">
          <Loader type="Puff" color="#00BFFF" height={70} width={70} timeout={3000} />
        </div>
      )}
    </div>
  )
}

RepoView.propTypes = {}
export default RepoView
