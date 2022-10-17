import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";

export const Form = () => {
  const { register, handleSubmit,formState:{errors},reset } = useForm();
  


  // const may = (e) => {
  //   // const v=validate()
  //   // if(v==false){
  //   //   alert('enter value')
  //   // }
  //   alert("v");
  // };
  console.log(errors)
  const onSubmit = (data) => {
    console.log(data)
    if(data.cpassword==data.password){
      reset()
      alert('success')

    }else{
      console.log('d')
      alert('enter correct password')
    }
    
  //
};

  // const form = (e) => {
  //   setdata({ ...data, [e.target.id]: e.target.value });
  // };
  return (
    <div className="center">
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("firstname", { required: {value:true,message:"enter value"},minLength:{value:3,message:"min 3 char"}
        ,pattern:{value:/[A-Za-z]{3}/,message:"valid value"}
         
      
      })}
          className="sa"
          placeholder="firstname"
          id="firstname"
        
          type="text"
        />
        {errors.firstname && <small className="p"><p>{errors.firstname.message}</p></small>}
        <br />

        <input
          id="lastname"
          {...register("lastname", { required: {value:true,message:"enter lastname"} ,pattern:{value:/[A-Za-z]{3}/,message:"valid value"}})}
          placeholder="Enter your lastname"
       
          type="text"
        />
        {errors.lastname && <small className="p"><p>Lastname is required </p></small>}
        <br />

        <input
          class="space"
          placeholder="Enter email"
          id="email"
          name="email"
          type="email"
          {...register("email", { required: true })}
        />
         {errors.email && <small className="p"><p>Email is required </p></small>}
        <br />
        <input id="city" {...register("city", { required: {value:true,message:"enter city"},minLength:{value:3,message:"min 3 char"},pattern:{value:/[A-Za-z]{3}/,message:"valid value"} })} placeholder="Enter city"  type="text" />
        {errors.city && <small className="p"><p>City is required </p></small>}
  
        <br />
        <input
          id="address"
          placeholder="Enter address"
        
          type="text"
          {...register("address", { required: {value:true,message:"enter address"},minLength:{value:3,message:"min 3 char"}})}
        />
         {errors.address && <small className="p"><p>Address is required </p></small>}
        <br />

        <input
          id="password"
          
          placeholder="Enter Password"
          type="password"
          {...register("password", { required: {value:true,message:"enter password"},minLength:{value:5,message:"min 5 char"}})}
        />
         {errors.password && <small className="p"><p>Password is required </p></small>}
        <br />
        <input
          id="cpassword"
        
          placeholder="Enter Confirm-Password"
          type="password"
          {...register("cpassword", { required:{value:true,message:"enter cpassword"},minLength:{value:5,message:"minlength must 5"} })}
        />
        {errors.cpassword && <small className="p"><p>Cpassword is required </p></small>}
        <br />
        <label class="space g"> State</label>
        <select {...register("state",{ required: {value:true,message:"enter state"} })}  name="state" id="state" class="space">
          <option value="">Select</option>
          <option value="mp">Madhya Pradesh</option>
          <option value="up">Utter Pradesh</option>
          <option value="maharashtra">Maharashtra</option>
          <option value="bihar">Bihar</option>
          <option value="rajasathan">Rajasathan</option>
          <option value="gujrat">Gujrat</option>
        </select>
        {errors.state && <small className="p"><p>state is required </p></small>}
        <br />
        <label class="g">Gender :</label>
        <label class="g">Male</label>
        <span>
          <input {...register("gender")} checked={true}  class="g" name="gender" type="radio" value="male" />
        </span>
        <label class="space">Female</label>
        <span>
          <input {...register("gender")} class="g" name="gender" type="radio" value="female" />
        </span>
        <br />
        <label class="space g">Hobby</label>
        <br />
        <span>
          <input  {...register("hobby")}  class="hobby" name="hobby" type="checkbox" value="reading" />
         
        </span>

        <span>
      
          <label class="space g">Reading</label>
        </span>

        <span>
      
          <input {...register("hobby")} class="hobby" name="hobby" type="checkbox" value="Listening" />
        </span>
        <span></span>
        <span>
          
          <label class="space g">Listening</label>
        </span>

        <span>
          <input  {...register("hobby")}  class="hobby" name="hobby" type="checkbox" value="singing" />
        </span>

        <label class="space g">singing</label>
        <br />

        <span>
        
          <input  {...register("hobby")}  class="hobby" name="hobby" type="checkbox" value="watching" />
        </span>
        <span>
          <label class="space g">watching</label>
        </span>
        <span>
         
          <input  {...register("hobby")}  class="hobby" name="hobby" type="checkbox" value="cooking" />
        </span>
        <span>
         
          <label class="space g">cooking</label>
        </span>

        <span>
          
          <input  {...register("hobby", { required: {value:true,message:"enter hobby"} })}  class="hobby" name="hobby" type="checkbox" value="writing" />
        </span>
        <span>
        
          <label class="space g">writing</label>
        </span>
        {errors.hobby && <small className="p"><p>{errors.hobby.message}</p></small>}

        <br />

        <br />
        <input className="butt" type="submit" />
      </form>
    </div>
  );
};
