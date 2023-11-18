import React from 'react'

export interface ISoup {}

const List1 = [
  { title: 'Борщ с говядиной', price: '7' },
  { title: 'Суп куриный', subtitle: 'c фрикадельками', price: '6' },
  { title: 'Тыквенный суп-пюре', price: '7' },
]

const List2 = [
  { title: 'Голубцы с курицей', price: '7' },
  { title: 'Драники', subtitle: 'с курицей или со свининой', price: '8' },
  { title: 'Шницель свиной', subtitle: 'с картофельными дольками', price: '9' },
  { title: 'Спагетти Карбонара', price: '8.5' },
  { title: 'Котлета по-киевски', subtitle: 'куриная котлета с пюре', price: '10' },
  { title: 'Паровая котлета', subtitle: 'куриная котлета с рисом', price: '9' },
  { title: 'Рыбная котлета', subtitle: 'с пюре', price: '9' },
  { title: 'Филе в сыре', subtitle: 'куриное филе с пюре', price: '10' },
]

const List3 = [
  { title: 'Блинчики', suttitle: 'с ветчиной и рысор', price: '8.5' },
  { title: 'Сырники', subtitle: 'со сметаной или джемом', price: '7.5' },
  { title: 'Блинчики', subtitle: 'с рикоттой или грушей', price: '7.5' },
]

const Soup = ({}: ISoup) => {
  return (
    <article className="max-w-[320px] flex flex-col items-center max-h-[calc(100dvh_-_290px)] overflow-y-auto gap-4">
      <div className="w-[250px]">
        <h3 className="text-lg text-[#d27760] font-bold tracking-wider uppercase">Супы</h3>
        <table className="w-full flex flex-col gap-1 text-[#768b9b]">
          {List1.map((item, index) => {
            return (
              <tr key={`Soup${index}`} className="w-full">
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
      <div className="w-[250px]">
        <h3 className="text-lg text-[#d27760] font-bold tracking-wider uppercase">Основное</h3>
        <table className="w-full flex flex-col gap-1 text-[#768b9b]">
          {List2.map((item, index) => {
            return (
              <tr key={`General${index}`} className="w-full">
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
      <div className="w-[250px]">
        <h3 className="text-lg text-[#d27760] font-bold tracking-wider uppercase">Завтраки</h3>
        <table className="w-full flex flex-col gap-1 text-[#768b9b]">
          {List3.map((item, index) => {
            return (
              <tr key={`Breakfast${index}`} className="w-full">
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

export default Soup
