import React from "react";

import pic from './img/download.jpg'
import { useForm } from "react-hook-form";


export const Neww = (props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();



 
  const may = (data) => {
 
   
      const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: data.username,
        phoneno: data.phoneno,
        email: data.email,
        password: data.password,
        address:data.address
      }),
    };
    fetch("http://localhost:8000/register", requestOptions)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
    
      }); 
    
  };




  return (
    <div>
        <img  id='may' src={pic}></img>
      <div className="center">
        <form onSubmit={handleSubmit(may)}>
          <input
          
            placeholder="Enter your Name"
            {...register("username", { required: {value:true,message:"enter username"} ,minLength:{value:3,message:"minlength 3 "} ,pattern:{value:/[A-Za-z]{3}/,message:"valid value"}})}
            id="username"
          
            type="text"
          />
          {errors.username && (
            <small >
              <p>{errors.username.message} </p>
            </small>
          )}
          <br />

          <input
            id="phoneno"
            {...register("phoneno", { required:{value:true,message:"enter phoneno"},minLength:{value:10,message:"minlength must 10 "} ,pattern:{value:/[0-9]/,message:"valid value"}})}
            placeholder="Enter your phoneno ."
            
            type="text"
          />
             {errors.phoneno && (
            <small >
              <p>{errors.phoneno.message}</p>
            </small>
          )}
          <br />

          <input
            id="email"
            type="email"
            {...register("email", { required:{value:true,message:"enter email"},minLength:{value:3,message:"minlength must 3 "} })}
            placeholder="email "
           />
             {errors.email && (
            <small >
              <p>{errors.email.message}</p>
            </small>
          )}
           
          <br />

          <input
            id="password"
            {...register("password", { required:{value:true,message:"enter password"},minLength:{value:5,message:"minlength must 5"} })}
           
            placeholder="Enter Password"
            type="password"
          />
           {errors.password && (
            <small >
              <p>{errors.password.message} </p>
            </small>
          )}
          <br />
          <input
            id="address"
            placeholder="Enter address"
            type="text"
            {...register("address", {
              required: { value: true, message: "enter address" },
              minLength: { value: 5, message: "minlength must 5" },
            })}
          />
          {errors.address && (
            <small >
              <p>{errors.address.message}</p>
            </small>
          )}
          <br />

          <input type='submit' />
          
     
        </form>
      </div>
    </div>
  );
}