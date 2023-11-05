import { Route, Routes } from 'react-router-dom'
import SignInForm from './_auth/forms/SignInForm'
import SignUpForm from './_auth/forms/SignUpForm'
import { Home } from './_root/pages'
import './globals.css'
import AuthLayout from './_auth/AuthLayout'
import RootLayout from './_root/RootLayout'
import { Toaster } from './components/ui/toaster'


const App = () => {
  return (
    <main className='flex h-screen'>
       <Routes>
            <Route element={<AuthLayout />}>
            {/* public routes */}
             <Route  path='/sign-in' element={<SignInForm />}/>
             <Route  path='/sign-up' element={<SignUpForm />}/>
            </Route>
          
            {/* private routes */}
            <Route element={<RootLayout />}>
              <Route index element={<Home />}/>
            </Route>
       </Routes>

       <Toaster />
    </main>
  )
}

export default App
