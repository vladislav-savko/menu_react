import React from 'react'

export interface IDessert {}

const List1 = [
  {
    title: 'Медовик',
    subtitle: '130гр',
    price: '7',
  },
  {
    title: 'Наполеон',
    subtitle: '165гр',
    price: '9',
  },
  {
    title: 'Торт Фисташка',
    subtitle: '121гр',
    price: '7',
  },
  {
    title: 'Чизкейк карамель',
    subtitle: '86гр',
    price: '7',
  },
]

const List2 = [
  {
    title: 'Гурман',
    subtitle: '110гр',
    price: '7',
  },
  {
    title: 'Творожное кольцо',
    subtitle: '90гр',
    price: '8',
  },
  {
    title: 'Тарталетка Лимонная',
    subtitle: '88гр',
    price: '8',
  },
  {
    title: 'Тарталетка Карамель-орехи',
    subtitle: '62гр',
    price: '7',
  },
  {
    title: 'Морковный кекс',
    subtitle: '90гр',
    price: '5',
  },
]

const List3 = [
  {
    title: 'Орешки (2шт)',
    subtitle: '35гр',
    price: '7',
  },
  {
    title: 'Кукис с шоколадом',
    subtitle: '58гр',
    price: '8',
  },
  {
    title: 'Овсяное (2шт)',
    subtitle: '88гр',
    price: '70гр',
  },
]

const Dessert = ({}: IDessert) => {
  return (
    <article className="max-w-[320px] flex flex-col items-center max-h-[calc(100dvh_-_290px)] overflow-auto gap-4">
      <div className="w-[250px]">
        <h2 className="text-lg text-[#d27760] font-bold tracking-wider uppercase">Торты</h2>
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
        <h2 className="text-lg text-[#d27760] font-bold tracking-wider uppercase">Пирожные</h2>
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
      <div className="w-[250px]">
        <h2 className="text-lg text-[#d27760] font-bold tracking-wider uppercase">Печенье</h2>
        <table className="w-full flex flex-col gap-1 text-[#768b9b]">
          {List3.map((item, index) => {
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

export default Dessert
