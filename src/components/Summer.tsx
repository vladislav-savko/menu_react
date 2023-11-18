import React from 'react'

export interface ISummer {}

const List1 = [
  {
    title: 'Айс Латте',
    subtitle: '300мл | кофе, молоко, лёд, сироп карамельный',
    price: '7',
  },
  {
    title: 'Айс Капучино',
    subtitle: '300мл | кофе, молоко, лёд, сироп груша и сироп кленовый',
    price: '7',
  },
  {
    title: 'Айс Мокко',
    subtitle: '300мл | кофе, молоко, лёд, сироп лесной орех или каштан',
    price: '7',
  },
  {
    title: 'Бамбл',
    subtitle: '300мл | кофе, лёд, апельсиновый сок',
    price: '7',
  },
  {
    title: 'Эспрессо Тоник',
    subtitle: '300мл | кофе, лёд, тоник',
    price: '7',
  },
]

const List2 = [
  {
    title: 'Малина Мята',
    subtitle: '400мл',
    price: '7',
  },
  {
    title: 'Лайм Мята',
    subtitle: '400мл',
    price: '7',
  },
  {
    title: 'Клубника-Фейхоа',
    subtitle: '400мл',
    price: '7',
  },
  {
    title: 'Гранат Смородина',
    subtitle: '400мл',
    price: '7',
  },
  {
    title: 'Апельсин Огурец',
    subtitle: '400мл',
    price: '7',
  },
  {
    title: 'Земляника-Ананас',
    subtitle: '400мл',
    price: '7',
  },
]

const Summer = ({}: ISummer) => {
  return (
    <article className="max-w-[320px] flex flex-col items-center max-h-[calc(100dvh_-_290px)] overflow-auto gap-4">
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
        <h2 className="text-lg text-[#d27760] font-bold tracking-wider uppercase">Лимонады</h2>
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

export default Summer
