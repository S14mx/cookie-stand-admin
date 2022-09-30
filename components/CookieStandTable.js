import { hours } from "../pages/data";
import useResource from '../hooks/useResource';
import CookieStandRow from "./CookieStandRow";
import { useState } from 'react';

const tableStyle2 = 'border border-gray-700 bg-th-green text-left pl-1 h-7'
'// @refresh reset'

export default function CookieStandTable() {


  const { resources, deleteResource } = useResource()
  console.log("!!!!!!", resources)
  function getHourlyTotals(resources) {
    if (!resources) return

    const totalsArr = []
    for (let i = 0; i < resources[0].hourly_sales.length; i++) {
      let total = 0
      for (let j = 0; j < resources.length; j++) {

        total += resources[j].hourly_sales[i]
      }
      totalsArr.push(total)
      total = 0
    }
    console.log(totalsArr)

    return totalsArr

  }

  const hourlyTotals = getHourlyTotals(resources)

  function sortResources(a, b) {
    return a.id - b.id
  }

  return (
    <div>
      {!resources
        ? <h2 className="my-6 text-sm text-center"> No Cookie Stands Available </h2>
        : <table className="w-4/5 mx-auto mb-12 text-sm text-center">
          <thead className="mx-auto text-sm text-center">
            <tr>
              <th className={`${tableStyle2}`}>Location</th>
              {hours.map(item => {
                return (<th key={item.key} className={`${tableStyle2}`}> {item} </th>)
              })}
              <th className={`${tableStyle2}`}>Totals</th>
            </tr>
          </thead>
          <tbody>
            {resources.sort(sortResources).map(stand => {
              return (<CookieStandRow key={stand.id} info={stand} deleteStand={deleteResource} />)
            })}
            <tr>
              <th className={`${tableStyle2}`}>Totals</th>
              {hourlyTotals.map((item, index) => {
                return (<th key={index} className="h-8 pr-2 font-semibold text-right border border-gray-700 bg-th-green">{item}</th>)
              })}
              <th className="pr-2 font-semibold text-right border border-gray-700 bg-th-green h-7">{hourlyTotals.reduce((sum, total) => sum + total, 0)}</th>
            </tr>
          </tbody>
        </table>
      }
    </div >
  );
}