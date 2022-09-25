export default function CreateForm({ formSubmitHandler }) {
  return (
    <form onSubmit={formSubmitHandler} className="flex flex-col w-2/3 p-2 mx-auto my-4 mt-5 rounded-sm bg-form-green">
      <div className="flex h-10 place-content-center ">
        <h1 className="text-lg font-medium text-center">Create Cookie Stand</h1>
      </div>
      <div className="flex flex-row">
        <p className="w-1/12 text-sm font-semibold">Location</p>
        <input className="w-11/12" name="location" />
      </div>
      <div className="flex flex-row items-center w-full h-10 mt-6 mb-2 space-x-2">
        <div className="w-1/4 rounded-sm h-11 bg-form-input-box-green">
          <p className="mx-auto text-xs font-semibold text-center w-7/8">Minimum Customers per Hour</p>
          <input className="mx-3 w-7/8 max-h-5" name="minCust" />
        </div>
        <div className="w-1/4 rounded-sm h-11 bg-form-input-box-green">
          <p className="mx-auto text-xs font-semibold text-center w-7/8">Maximum Customers per Hour</p>
          <input className="mx-3 w-7/8 max-h-5" name="maxCust" />
        </div>
        <div className="w-1/4 rounded-sm h-11 bg-form-input-box-green">
          <p className="mx-auto text-xs font-semibold text-center w-7/8">Average Cookies per Sale</p>
          <input className="mx-3 w-7/8 max-h-5" name="avgCookies" />
        </div>
        <div className='w-1/4'>
          <button className="w-full text-sm font-semibold align-middle rounded-sm h-11 bg-button-green align-text-middle">Create</button>
        </div>
      </div>
    </form>
  );
}