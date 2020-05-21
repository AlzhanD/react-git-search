import React, { useEffect, useState } from 'react'
import { Route, useParams } from 'react-router-dom'
import axios from 'axios'
import Head from './head'
import Main from './main'
import RepoList from './repoList'
import RepoView from './nameUser'
import Header from './header'
import Footer from './footer'

const Home = () => {
  const [userRepositories, setUserRepositories] = useState([])
  const [find, setFind] = useState('')
  const [readMe, setReadMe] = useState('')
  const { userName, repositoryName } = useParams()
  const [user, setUser] = useState({})
  const [commit, setCommit] = useState({})
  useEffect(() => {
    axios(`https://api.github.com/users/${userName}/repos`).then(({ data }) =>
      setUserRepositories(data)
    )
  }, [userName])

  useEffect(() => {
    if (repositoryName !== undefined) {
      const headers = { Accept: 'application/vnd.github.VERSION.raw' }
      axios(`https://api.github.com/repos/${userName}/${repositoryName}/readme`, {
        param: {},
        headers
      }).then(({ data }) => {
        setReadMe(data)
      })
    }
  }, [repositoryName, userName])

  useEffect(() => {
    axios(`https://api.github.com/users/${userName}`).then(({ data }) => setUser(data))
  }, [userName])
  useEffect(() => {
    axios(`https://api.github.com/users/${userName}`).then(({ data }) => setCommit(data))
  }, [userName])
  const handleFind = (findStr) => {
    setFind(findStr)
  }
  return (
    <div>
      <Head />
      <Header userName={userName} readMe={readMe} user={user} handleFind={handleFind} />
      <div className="container page-wrap mx-auto pt-20 pb-8">
        <div>
          <Route exact path="/" component={() => <Main />} />
          <Route
            exact
            path="/:userName"
            component={() => (
              <RepoList
                userRepositories={userRepositories}
                userName={userName}
                commit={commit}
                find={find}
              />
            )}
          />
          <Route
            exact
            path="/:userName/:repositoryName"
            component={() => <RepoView readMe={readMe} />}
          />
        </div>
      </div>
      <Footer />
    </div>
  )
}

Home.propTypes = {}

export default Home
