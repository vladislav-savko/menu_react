import React from 'react'

export interface ITea {}

const List1 = [
  {
    title: 'Изысканный бергамот',
    subtitle:
      'чай черный индийский, кожура шиповника, рябина черноплодная, лепестки василька, ароматизатор',
    price: '3',
    bigPrice: '6.5',
  },
  {
    title: 'Чёрный с пряностями',
    subtitle:
      'чай черный индийский, кусочки яблок, корица, кардамон, корочки апельсина, лепестки календулы, ароматизатор',
    price: '3',
    bigPrice: '6.5',
  },
  {
    title: 'Жасминовый чай',
    subtitle: 'зелёный чай с жасмином',
    price: '3',
    bigPrice: '6.5',
  },
  {
    title: 'Улун земляника',
    subtitle: 'китайский час улун с земляникой',
    price: '3',
    bigPrice: '6.5',
  },
  {
    title: 'Ройбос яблоко-корица',
    subtitle:
      'ройбос, кусочки яблок, корица, семена фенхеля, гвоздика, лепестки календулы, ароматизатор',
    price: '3',
    bigPrice: '6.5',
  },
  {
    title: 'Моринга',
    subtitle:
      'листья моринги, засахарнные кусочки папайи, лемонграсс, листья клубники, вербена, зерна граната, листья цветущей розы, цветки граната, красная смородина',
    price: '3',
    bigPrice: '6.5',
  },
  {
    title: 'Мелисса-мята-лимонник',
    subtitle:
      'мелисса, зверобой, лимонник, листья ежевики, листья мяты, цветки ромашки, василек',
    price: '3',
    bigPrice: '6.5',
  },
  {
    title: 'Фруктовый с гибискусом',
    subtitle:
      'гибискус, кусочки ананаса и малины, кусочки папайи, лепестки календулы, кожура шиповника, кусочки яблок, листья смородины, ароматизатор',
    price: '3',
    bigPrice: '6.5',
  },
  {
    title: 'Фруктовый на цукатах',
    subtitle:
      'напиток на основе натуральных кусочков фруктов и цветов в ассортименте',
    price: '4',
    bigPrice: '7.5',
  },
  {
    title: 'Гречишный чай',
    price: '3',
    bigPrice: '6.5',
  },
  {
    title: 'Домашний на пюре',
    subtitle:
      'напиток на фруктово-ягодном пюре в ассортименте',
    price: '5',
    bigPrice: '10',
  },
]

const Tea = ({}: ITea) => {
  return (
    <article className="max-w-[320px] flex flex-col items-center max-h-[calc(100dvh_-_450px)] overflow-y-auto gap-4 p-2">
      <div className="w-[280px]">
        <table className="w-full flex flex-col gap-1 text-[#768b9b] px-4">
          <tr className="text-xs">
            <th className="w-full">
              <h2 className="text-lg text-[#d27760] font-bold text-left tracking-wider uppercase">
                Чай
              </h2>
            </th>
            <th className="font-normal text-[.875rem]">
              <img src="/images/tea300.png" alt="tea 300ml" className="w-8" />
              300мл
            </th>
            <th className="font-normal text-[.875rem]">
              <img src="/images/tea900.png" alt="tea 900ml" className="w-8" />
              900мл
            </th>
          </tr>
          {List1.map((item, index) => {
            return (
              <tr key={`Tea${index}`} className="">
                {item.title && (
                  <td className="w-full">
                    <p className="">{item.title}</p>
                    <p className="text-sm leading-[0.8] opacity-90">{item.subtitle}</p>
                  </td>
                )}
                <td className="min-w-[42.77px] text-center">{item.price}</td>
                <td className="min-w-[42.77px] text-center">{item.bigPrice}</td>
              </tr>
            )
          })}
        </table>
      </div>
    </article>
  )
}

export default Tea
