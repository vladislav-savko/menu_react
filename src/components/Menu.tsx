import React from 'react'
import { Link } from 'react-router-dom'

export interface IMenu {}

const List = [
  { title: 'Игровое пространство' },
  { title: 'Супы | Основное | Завтраки' },
  { title: 'Холодные напитки' },
  { title: 'Чай' },
  { title: 'Кофе | Молоко' },
  { title: 'Летнее меню' },
  { title: 'Десерты' },
]

const Menu = ({}: IMenu) => {
  return (
    <>
      <article className="max-w-[320px] flex flex-col items-center">
        <h2 className="text-lg text-[#d27760] font-bold tracking-wider uppercase">Меню</h2>
        <section className="w-full flex flex-col text-[#768b9b] text-center">
          {List.map((item, index) => {
            return (
              <Link key={`${item.title}${index}`} to={`/?page=${index}`}>
                {item.title}
              </Link>
            )
          })}
        </section>
      </article>
    </>
  )
}

export default Menu
