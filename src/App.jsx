import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
  const [render,setRender] = useState(true);

  useEffect(() => {
    setTimeout(()=>{
      setRender(false);

    },10000)

  }, []);
  

  return (
    <>
      { render ?  <MyComponent/>: <div></div>}
    </>
  )
}

function MyComponent() {
    useEffect(()=>{
      console.error("component mounted")
      
      return () => {
        console.log("component unmounted");
        
      };
    },[])

  return <div>
    From inside my component
  </div>
}


export default App
