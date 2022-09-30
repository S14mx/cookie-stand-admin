import { useAuth } from "../contexts/auth";
import useResource from '../hooks/useResource';

export default function CreateForm({ handleSubmit }) {

  console.log("hello")

  return (
    <form onSubmit={handleSubmit} className="flex flex-col w-4/5 p-10 mx-auto my-4 mt-5 border border-green-900 rounded-md bg-form-input-box-green">
      <div className="flex flex-row mt-6">
        <div className="flex flex-col w-2/3 h-20 text-center">
          <p className="w-full text-xs font-bold">ADD LOCATION</p>
          <input className="w-11/12 mt-2 h-7" name="location" placeholder=" Cookie Stand Location" />
        </div>
        <button className="w-1/3 mt-2 text-sm font-semibold align-middle rounded-sm h-11 bg-button-green align-text-middle">CREATE STAND</button>
      </div>
      <div className="flex flex-row items-center justify-between w-full h-10 mt-2 mb-2 space-x-4 ">
        <div className="text-center rounded-sm h-11 bg-form-input-box-green">
          <p className="w-full mx-auto mb-2 text-xs font-bold">MINIMUM CUSTOMERS PER HOUR</p>
          <input className="w-64 max-h-10" name="minimum" />
        </div>
        <div className="text-center rounded-sm h-11 bg-form-input-box-green">
          <p className="w-full mx-auto mb-2 text-xs font-bold">MAXIMUM CUSTOMERS PER HOUR</p>
          <input className="w-64 max-h-10" name="maximum" />
        </div>
        <div className="text-center rounded-sm h-11 bg-form-input-box-green">
          <p className="w-full mx-auto mb-2 text-xs font-bold ">AVERAGE COOKIES PER SALE</p>
          <input className="w-64 max-h-10" name="average" />
        </div>
      </div>
    </form>
  );
}