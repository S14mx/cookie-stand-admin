import { hours } from "../pages/data";
const tableStyle1 = 'border border-gray-700'
const tableStyle2 = 'border border-gray-700 bg-th-green'

export default function ReportTable({ user }) {


  return (
    <div>
      {user
        ? <h2 className="my-6 text-sm text-center"> No Cookie Stands Available </h2>
        : <table className="w-2/3 mx-auto mb-12 text-sm text-center">
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
            {initialData.map(item => {
              return (<tr key={item.key} className="bg-table-cell-darker-green">
                <td className={`${tableStyle1}`}> {item.location} </td>
                {item.hourly.map(item => {
                  return (<td key={item.key} className={`${tableStyle1}`}>{item}</td>
                  )
                })}
                <td className={`${tableStyle1}`}>{item.total_hourly}</td>
              </tr>)
            })}
            <tr>
              <th className={`${tableStyle2}`}>Totals</th>
              {hours.map(item => {
                return (<th key={item.key} className={`${tableStyle2}`}>Many</th>)
              })}
              <th className={`${tableStyle2}`}>Many</th>
            </tr>
          </tbody>
        </table>
      }
    </div >
  );
}