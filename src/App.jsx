import { useEffect, useState } from "react";

import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

import './App.css'
import Body from './Componets/Body/Body'
import Header from './Componets/Header/Header'
import Section from './Componets/Section'
import Chiken from "./Componets/Chiken";

function App() {

  const [chiken, setChiken] = useState([]);
  const [cart,setCart] = useState([]);
  
  
  useEffect(()=>{
      fetch("./Chiken.json")
      .then(res => res.json())
      .then(data => setChiken(data));
  },[])
console.log(chiken)

const handleCart = (p) =>{
const isExist = cart.find((pd) => pd.id == p.id);
if(!isExist) {
  setCart([...cart,p]),
  toast.success('item added')
}
else{
  toast.error('item already added')
}
  
};
console.log(cart)
  return (
    <>
<Header></Header>
<Section></Section>
<div className="flex justify-between p-10 gap-10">
<div className="w-2/3 grid lg:grid-cols-2 md:grid-cols-1 items-center ">
{
  chiken.map(pd=>
   <Body handleCart={handleCart}  pruduct={pd}></Body>)
}
</div>
<div className="w-1/3 mr-10">
<Chiken setCart={setCart} cart={cart}></Chiken>
<ToastContainer />

</div>
</div>
    </>
  )
}

export default App
