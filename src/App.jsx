
import { ToastContainer } from 'react-toastify'
import './App.css'
import ContactForm from './ContactForm'
import "react-toastify/dist/ReactToastify.css"

function App() {
 

  return (
    <div className='min-h-screen w-full bg-lgtblue flex justify-center items-center'>
      <ContactForm />
      <ToastContainer />
    </div>
  )
}

export default App
