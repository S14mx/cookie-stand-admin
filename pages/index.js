import Head from '../components/Head'
import Header from '../components/Header';
import Footer from '../components/Footer';
import CreateForm from '../components/CreateForm';
import ReportTable from '../components/ReportTable';
import { useState } from 'react'
import { data } from 'autoprefixer';


export default function Home() {
  const [initialData, setFormData] = useState([])

  function formSubmitHandler(event) {
    event.preventDefault();
    const location = event.target.location.value
    const minCust = event.target.minCust.value
    const maxCust = event.target.maxCust.value
    const avgCookies = event.target.avgCookies.value
    const store_data = {
      key: Math.floor(Math.random() * 5000) + 1,
      location: `${location}`,
      minCustomers: `${minCust}`,
      maxCustomers: `${maxCust}`,
      avgCookies: `${avgCookies}`,
      hourly: [],
      total_hourly: 0,
      total_per_hour: 0

    }

    for (let i = 0; i < 14; i++) {
      store_data.hourly.push(Math.floor(Math.random() * 100) + 1)
    }
    store_data.total_per_hour = store_data.hourly[0]

    store_data.total_hourly = store_data.hourly.reduce((total, current) => {
      return total + current
    }, 0)


    setFormData([...initialData, store_data]);
    console.log("DATA", initialData)

    for (let i = 0; i < initialData.length; i++) {
      store_data.total_per_hour += initialData[i].hourly[0]
    }
  }

  return (

    <div>
      <Head />
      <body className="h-screen bg-other-green">
        <Header />
        <main className=" h-fit">
          <CreateForm formSubmitHandler={formSubmitHandler} />
          <ReportTable initialData={initialData} />
        </main>
        <Footer locations={initialData} />
      </body>
    </div>
  )
}
