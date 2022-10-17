import React from 'react'
import { useForm } from 'react-hook-form'

export const Check = () => {
    const { register, handleSubmit,formState:{errors}, } = useForm()

    console.log(errors)
    const onSubmit = (data) =>{ console.log(data);
    }
  return (
    <div><form onSubmit={handleSubmit(onSubmit)}>
    <input {...register("lastName", {required:true,minLength: 2 })} placeholder="Last name" />
     <input type='submit' />
    </form></div>
  )
}
