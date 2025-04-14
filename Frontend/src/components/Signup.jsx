import React from 'react'
import { Link } from 'react-router-dom'
import Login from './Login'
import { useForm } from "react-hook-form"

function Signup() {

       const {
            register,
            handleSubmit,
            formState: { errors },
          } = useForm()
        
          const onSubmit = (data) => console.log(data)

  return (
    <>
    <div  className="flex h-screen items-center justify-center">
        <div className=" modal modal-open w-screen h-screen bg-black bg-opacity-50 fixed top-0 left-0 right-0 bottom-0 z-50">
  <div className="modal-box bg-pink-500 text-white rounded-lg shadow-lg p-8">
    <form  onSubmit={handleSubmit(onSubmit)} method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-white">✕</Link>
   
    <h3 className="font-bold text-lg">Signup!</h3>
    <div className="mt-4 space-y-2">
              <span>Name</span>
              <br />
              <input
                type="text"
                placeholder="Enter your Name"
                className="w-80 px-3 py-1 border rounded-md outline-none"
                {...register("name", { required: true })}
                />
                <br />
                {errors.name && (
                  <span className="text-sm text-red-500">
                    This field is required
                  </span>
                )}
            </div>
    <div className="mt-4 space-y-2">
              <span>Email</span>
              <br />
              <input
                type="email"
                placeholder="Enter your email"
                className="w-80 px-3 py-1 border rounded-md outline-none"
                {...register("email", { required: true })}
                />
                <br />
                {errors.email && (
                  <span className="text-sm text-red-500">
                    This field is required
                  </span>
                )}
            </div>
    <div className="mt-4 space-y-2">
              <span>Password</span>
              <br />
              <input
                type="Password"
                placeholder="Enter your Password"
                className="w-80 px-3 py-1 border rounded-md outline-none"
                {...register("password", { required: true })}
                />
                <br />
                {errors.password && (
                  <span className="text-sm text-red-500">
                    This field is required
                  </span>
                )}
            </div>

            {/* //button */}
             <div className="flex justify-around mt-6">
              <button className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200">
                Login
              </button>
              <p>
                already account?{" "}
                <button to="/ "  
                onClick={()=> document.getElementById("my_modal_3").showModal()}
                className='underline text-blue-500 cursor-pointer'>Login</button>{" "}
                <Login/>
                
              </p>
            </div>
            </form>
              

  </div>
</div>
    </div>
                  </>
  )
}

export default Signup