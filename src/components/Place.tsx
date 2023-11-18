import React from 'react'

export interface IPlace {}

const List = [
  { title: '30 минут', price: '10' },
  { title: '1 час', price: '13' },
  { title: '2 часа', price: '20' },
  { title: '3 часа', price: '26' },
  { subtitle: 'каждый следующий час', price: '5' },
]

const Place = ({}: IPlace) => {
  return (
    <article className="max-w-[320px] flex flex-col items-center">
      <div className="w-[250px]">
        <h2 className="text-lg text-[#d27760] font-bold tracking-wider uppercase">
          Игровое пространство
        </h2>
        <table className="w-full flex flex-col text-[#768b9b]">
          {List.map((item, index) => {
            return (
              <tr key={`Place${index}`} className="w-full">
                {item.title && <td className="w-full">{item.title}</td>}
                {item.subtitle && <td className="w-full text-sm">{item.subtitle}</td>}
                <td>{item.price}</td>
              </tr>
            )
          })}
        </table>
      </div>
    </article>
  )
}

export default Place
