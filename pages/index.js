import Head from '../components/Head'
import Header from '../components/Header';
import Footer from '../components/Footer';
import CreateForm from '../components/CreateForm';
import ReportTable from '../components/ReportTable';
import { useState } from 'react'
import { useAuth } from '../contexts/auth';
import { data } from 'autoprefixer';
import LoginForm from '../components/LoginForm';


export default function Home() {
  const { user, login, logout } = useAuth();

  function loginHandler(newUser) {
    login(newUser.username, newUser.password)
  }


  return (

    <div>
      <Head />
      <body className="h-screen bg-other-green">
        <Header user={user} onLogout={logout} />
        <main className=" h-fit">
          {user
            ? <div>
              <CreateForm />
              <ReportTable user={user} />
            </div>
            : <div>
              <LoginForm onLogin={loginHandler} />
            </div>
          }
        </main>
        <Footer />
      </body>
    </div>
  )
}
