import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";


export default function CookieStandRow({ info, deleteStand }) {

  const tableStyle1 = 'border border-green-700'
  const tableStyle2 = 'border border-green-700 bg-form-input-box-green'

  function clickHandler() {
    deleteStand(info.id);

  }

  if (info.hourly_sales.length == 0) {
    // bunk data
    info.hourly_sales = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  }

  return (
    <tr className={`${tableStyle2}`}>

      <td className={`${tableStyle1}`}>
        <div className="flex flex-row justify-between">
          <p className="ml-3 font-bold w-max">{info.location}</p>
          <button onClick={clickHandler}>
            <FontAwesomeIcon icon={faTrashCan} style={{ color: "red", fontSize: "12", marginRight: "0.5rem" }} />
          </button>
        </div>
      </td>

      {info.hourly_sales.map((slot, index) => <td className="h-8 pr-2 font-semibold text-right border border-green-700" key={index}>{slot}</td>)}
      <td className="pr-2 font-semibold text-right">{info.hourly_sales.reduce((num, sum) => num + sum, 0)}</td>
    </tr >
  );
}