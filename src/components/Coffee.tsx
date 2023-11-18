import React from 'react'

export interface ICoffee {}

const List1 = [
  {
    title: 'Эспрессо',
    subtitle: '30мл',
    price: '3',
  },
  {
    title: 'Двойной Эспрессо',
    subtitle: '60мл',
    price: '4',
  },
  {
    title: 'Американо',
    subtitle: '200мл',
    price: '3',
  },
  {
    title: 'Двойной Американо',
    subtitle: '300мл',
    price: '4',
  },
  {
    title: 'Флэт Уайт',
    subtitle: '200мл',
    price: '4',
  },
  {
    title: 'Мокачино',
    subtitle: '200мл',
    price: '5',
  },
  {
    title: 'Двойной Мокачино',
    subtitle: '300мл',
    price: '6',
  },
  {
    title: 'Капучино',
    subtitle: '200мл',
    price: '4',
  },
  {
    title: 'Двойной Капучино',
    subtitle: '300мл',
    price: '5',
  },
  {
    title: 'Латте',
    subtitle: '200мл',
    price: '4',
  },
  {
    title: 'Большой Латте',
    subtitle: '390мл',
    price: '5',
  },
  {
    title: 'Раф',
    subtitle: '200мл',
    price: '5',
  },
  {
    title: 'Большой Раф',
    subtitle: '300мл',
    price: '6',
  },
  {
    title: 'Альтернативное молоко',
    price: '+2',
  },
  {
    title: 'Сироп',
    price: '+1',
  },
]

const List2 = [
  {
    title: 'Бэбичино',
    subtitle: '300мл | взбитое теплое молоко с сиропом',
    price: '3',
  },
  {
    title: 'Шокочино',
    subtitle: '300мл | взбитое теплое молоко с Nutella',
    price: '4',
  },
  {
    title: 'Какао',
    subtitle: '300мл',
    price: '4',
  },
  {
    title: 'Большой Какао',
    subtitle: '400мл',
    price: '5',
  },
  {
    title: 'Матча Латте',
    subtitle: '300мл | голуюая или зелёная',
    price: '6.5',
  },
]

const Coffee = ({}: ICoffee) => {
  return (
    <article className="max-w-[320px] flex flex-col items-center max-h-[calc(100dvh_-_450px)] overflow-auto gap-4">
      <div className="w-[250px]">
        <h2 className="text-lg text-[#d27760] font-bold tracking-wider uppercase">Кофе</h2>
        <table className="w-full flex flex-col gap-1 text-[#768b9b]">
          {List1.map((item, index) => {
            return (
              <tr key={`Coffee${index}`} className="w-full">
                {item.title && (
                  <td className="w-full">
                    <p className="">{item.title}</p>
                    <p className="text-sm leading-[0.8] opacity-90">{item.subtitle}</p>
                  </td>
                )}
                <td>{item.price}</td>
              </tr>
            )
          })}
        </table>
      </div>
      <div className="w-[250px]">
        <h2 className="text-lg text-[#d27760] font-bold tracking-wider uppercase">Молоко</h2>
        <table className="w-full flex flex-col gap-1 text-[#768b9b]">
          {List2.map((item, index) => {
            return (
              <tr key={`Coffee${index}`} className="w-full">
                {item.title && (
                  <td className="w-full">
                    <p className="">{item.title}</p>
                    <p className="text-sm leading-[0.8] opacity-90">{item.subtitle}</p>
                  </td>
                )}
                <td>{item.price}</td>
              </tr>
            )
          })}
        </table>
      </div>
    </article>
  )
}

export default Coffee
