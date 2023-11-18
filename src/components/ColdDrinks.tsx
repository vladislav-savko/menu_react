import React from 'react'

export interface IColdDrinks {}

const List1 = [
  { title: 'Лимонад', subtitle: '400мл', price: '7' },
  { title: 'Молочный коктейл', subtitle: '400мл', price: '7' },
  { title: 'Coca-cola, Fanta, Sprite', subtitle: '500мл', price: '7' },
  { title: 'Вода питьевая бутилированная', subtitle: '330мл', price: '2' },
  { title: 'Сок или нектар', subtitle: '200мл', price: '2.5' },
  { title: 'Пюре фруктовое', subtitle: '90гр', price: '2.5' },
  { title: 'Пюре фруктовое', subtitle: '210гр', price: '3' },
]

const ColdDrinks = ({}: IColdDrinks) => {
  return (
    <article className="max-w-[320px] flex flex-col items-center max-h-[calc(100dvh_-_290px)] gap-4">
      <div className="w-[250px]">
        <h2 className="text-lg text-[#d27760] font-bold tracking-wider uppercase">
          Холодные напитки
        </h2>
        <table className="w-full flex flex-col gap-1 text-[#768b9b]">
          {List1.map((item, index) => {
            return (
              <tr key={`ColdDrinks${index}`} className="w-full">
                {item.title && (
                  <td className="w-full">
                    <p className="">{item.title}</p>
                    <p className="text-sm leading-[0.5] opacity-90">{item.subtitle}</p>
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

export default ColdDrinks
