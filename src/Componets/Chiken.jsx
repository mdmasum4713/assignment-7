// import { useState } from "react";

import { useState } from "react";
import { toast } from "react-toastify";


const Chiken = ({ cart, setCart }) => {

  //     const [cart,setCart] = useState[{}]
  console.log(cart)

  const [preparing, setPreparing] = useState([])

  const handlepreparing = (item) => {
    console.log(item)
  
    const filterData = cart.filter((prer) => prer.id !==item.id )

  toast.success('choking added')

    setCart(filterData) 
    setPreparing([...preparing, item])
  }

  console.log(preparing)
  // const handleCart = (p) =>{
  //   setCart([p]);
  // };
  // console.log(cart)


  return (


    <main>

      <div className="card w-96 bg-base-100 shadow-xl ml-20">
        <h2 className="text-4xl text-center font-bold  ">Want to cook: {cart.length}</h2>
        <hr className="mt-4" />
        <div className="grid grid-cols-3 mt-4 gap-6 ml-4">


        </div>

        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>Name</th>
                <th>Time</th>
                <th>Calories</th>
                <th></th>

              </tr>
            </thead>
            <tbody>
              {
                cart.map(item => (
                  <>
                    <tr>
                      <td>
                        {
                          item.name
                        }
                      </td>
                      <td >
                        {
                          item.preparation_time
                        }
                      </td>
                      <td>
                        {
                          item.calories
                        }
                      </td>
                      <td>
                        <button onClick={() => handlepreparing(item)} className="btn btn-accent">prparing</button>
                      </td>
                    </tr>
                  </>
                ))
              }
            </tbody>
          </table>
        </div>


        <div className="card w-96 bg-base-100 shadow-xl">
          <h2 className="text-4xl text-center font-bold  ">Currntly cooking: {preparing.length}</h2>
          <hr className="mt-4" />
          <div className="grid grid-cols-3 mt-4 gap-6 ml-4">


          </div>

          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th></th>
                  <th>Name</th>
                  <th>Time</th>
                  <th>Calories</th>
                </tr>
              </thead>
              <div>
                {
                  preparing.map(preper => (
                    <>
                      <tr>
                        <td>
                          {
                            preper.name
                          }
                        </td>
                        <td >
                          {
                            preper.preparation_time
                          }
                        </td>
                        <td>
                          {
                            preper.calories
                          }
                        </td>

                      </tr>
                    </>
                  ))
                }
              </div>
            </table>
          </div>
          <div className="mt-10 space-y-5">
                <h1>Total Time = </h1>
                <h1>Total Calories =  </h1>
            </div>
        </div>
      </div>
    </main>

  );
};

export default Chiken;