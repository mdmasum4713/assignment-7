// import { useEffect, useState } from "react";



// import Chiken from "../Chiken";






const Body = ({pruduct, handleCart}) => {
const {image, preparation_time, calories,name,ingredients,description, id} = pruduct

// console.log(pruduct)



  return (

 <main> 
  <section className="grid grid-cols-2">
 <div className="card w-96 bg-base-100 shadow-xl">
 <figure className="px-10 pt-10">
  <img src={image} alt="Shoes" className="rounded-xl" />
     </figure>
     <div className="card-body ">
       <h2 className="card-title font-bold">{name}</h2>
       <p>{description}</p>
       <hr />
       <h3 className="font-bold">Ingredients: {id}</h3>
       <li>{ingredients}</li>
       <li>{ingredients}</li>
       <li>{ingredients}</li>
       <hr />
       <div className="flex justify-between">
         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
           <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
         </svg>
         <p>{preparation_time}</p>
         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
           <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z" />
           <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 0 0 .495-7.468 5.99 5.99 0 0 0-1.925 3.547 5.975 5.975 0 0 1-2.133-1.001A3.75 3.75 0 0 0 12 18Z" />
         </svg>
         <p>{calories}calories</p>
       </div>
       <div className="card-actions">
         <button onClick={() => handleCart(pruduct)} className="btn bg-[#0BE58A] border-2">Want to click</button>
       </div>
     </div>
     </div>
  </section>

 </main>

  );
};

export default Body;