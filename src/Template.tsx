import queryString from 'query-string'
import React, { ReactNode } from 'react'
import { Link, useLocation } from 'react-router-dom'

export interface ITemplate {
  children?: ReactNode
}

const List = [
  { title: 'Игровое пространство' },
  { title: 'Супы | Основное | Завтраки' },
  { title: 'Холодные напитки' },
  { title: 'Чай' },
  { title: 'Кофе | Молоко' },
  { title: 'Летнее меню' },
  { title: 'Десерты' },
]

const Template = ({ children }: ITemplate) => {
  const location = useLocation()
  const parseQuery: { page?: string } = queryString.parse(location.search)

  return (
    <>
      <div className="body_fill" />

      <div className="body">
        <div className="w-full flex mt-8 justify-center z-10 relative">
          <img className="w-[200px] h-auto" src="/images/logo.png" alt="GrandLogo" />
        </div>
        <div className="w-full main_body z-10 relative">
          <div className="w-full flex justify-center mt-4">{children}</div>
          <div className="flex justify-center gap-2 mt-2">
            <Link
              className={`border border-[#768b9b] px-1 text-[#768b9b] ${
                !parseQuery.page ? 'border-solid' : 'border-dashed'
              }`}
              to={{ pathname: '/' }}
            >
              Меню
            </Link>
            {List.map((item, index) => {
              return (
                <Link
                  key={`${item.title}${index}`}
                  className={`border border-[#768b9b] px-1 text-[#768b9b] ${
                    parseQuery.page && parseInt(parseQuery.page) === index
                      ? 'border-solid'
                      : 'border-dashed'
                  }`}
                  to={{ search: `page=${index}` }}
                >
                  {index}
                </Link>
              )
            })}
          </div>
        </div>
      </div>
    </>
  )
}

export default Template
