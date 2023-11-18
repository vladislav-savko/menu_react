import React from 'react'
import { Routes, Route } from 'react-router-dom'
import App from './App'
import Template from './Template'

export interface IRoute {
  Component: any
  title: string
  path: string
  url: string
}

const routes: IRoute[] = [
  {
    Component: App,
    title: 'General',
    path: '/:slug?',
    url: '/',
  },
]

const Routers = () => {
  return (
    <>
      <Routes>
        {routes.map(({ title, path, Component }) => {
          return (
            <Route
              key={title + path}
              path={path}
              element={
                <Template>
                  <Component />
                </Template>
              }
            />
          )
        })}
      </Routes>
    </>
  )
}

export default Routers
