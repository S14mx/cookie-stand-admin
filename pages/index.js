import Head from '../components/Head'
import Header from '../components/Header';
import Footer from '../components/Footer';
import CookieStandAdmin from '../components/CookieStandAdmin';
import { useAuth } from '../contexts/auth';
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
            ? <CookieStandAdmin />
            : <LoginForm onLogin={loginHandler} />
          }
        </main>
        <Footer />
      </body>
    </div>
  )
}
