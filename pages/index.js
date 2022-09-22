import Head from 'next/head'
import { useState } from 'react'


export default function Home() {
  const [initialData, formData] = useState('')

  function formSubmitHandler(event) {
    event.preventDefault();
    const location = event.target.location.value
    const minCust = event.target.minCust.value
    const maxCust = event.target.maxCust.value
    const avgCookies = event.target.avgCookies.value
    const data = {
      location: `${location}`,
      minCustomers: `${minCust}`,
      maxCustomers: `${maxCust}`,
      avgCookies: `${avgCookies}`,

    }

    formData(JSON.stringify(data));



  }
  return (
    <div>
      <Head>
        <title>Cookie Stand Admin</title>
      </Head>
      <body className="bg-other-green h-screen">
        <header className="bg-lab-green h-12 flex items-center">
          <p1 className="ml-4 font-semibold text-2xl">Cookie Stand Admin</p1>
        </header>
        <main className=" h-fit">
          <form onSubmit={formSubmitHandler} className="flex flex-col w-2/3 p-2 mx-auto my-4 bg-form-green rounded-md mt-5">
            <div className="h-10 flex place-content-center ">
              <h1 className="text-center font-medium text-lg">Create Cookie Stand</h1>
            </div>
            <div className="flex flex-row">
              <p className="w-1/12 font-semibold text-sm">Location</p>
              <input className="w-11/12" name="location" />
            </div>
            <div className="flex flex-row space-x-5 items-center h-16">
              <div>
                <p className="font-semibold text-xs text-center">Minimum Customers per Hour</p>
                <input className="w-full max-h-5" name="minCust" />
              </div>
              <div>
                <p className="font-semibold text-xs text-center">Maximum Customers per Hour</p>
                <input className="w-full max-h-5" name="maxCust" />
              </div>
              <div className="">
                <p className="font-semibold text-xs text-center">Average Cookies per Sale</p>
                <input className="w-full max-h-5" name="avgCookies" />
              </div>
              <div>
                <button className="bg-button-green w-56 h-12 align-text-middle align-middle font-semibold text-sm">Create</button>
              </div>
            </div>
          </form>
          <div>
            <p className="text-center my-6 text-sm">Report Table Coming Soon...</p>
            <p className="text-center my-6 text-sm"> {initialData} </p>
          </div>
        </main>
        <footer className="bg-lab-green h-8 flex items-center">
          <p1 className="ml-4 text-sm font-medium">©2021</p1>
        </footer>
      </body>
    </div>
  )
}
