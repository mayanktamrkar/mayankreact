import { useState } from 'react'
import './To.css'

export default function To() {
	const [inputlist, setinput] = useState("")
	const [items,setitem] = useState([])

	const changeitem = (e) => {
		setinput(e.target.value)
	}
	const enteritem = ()=>{
		
		 
		setinput("")
		
		setitem((olditem)=>{
			return [...olditem,inputlist]
		})
	}
	const deleteitem =(e)=>{
		setitem((olditem)=>{
			return olditem.filter((a,i)=>{
				return e!==i			
			})
		})
	
	 }

	const ed=(index)=>
	{
		//olditem[index]=inputlist
		items.forEach((v,i)=>{
			if(i===index){
				items[index]=inputlist
				
			}
			
		})
        setinput("")
	}
	return (
		<main>
			<div className='Container'>
				<lable className='Space'>Enter the task</lable>
				<input className='Space' value={inputlist} type="text" onChange={changeitem} ></input>
				<button className='Button Space' onClick={enteritem}>ADD</button>
				<li>{items.map((val,index)=>{
			         return <> <span className='Space'>{val}</span>
						 
					        <button className='Buttonn Space' onClick={()=>{
						     deleteitem(index)
							}}>Delete</button>
						 <button className='Buttona Space' onClick={()=>{
						    ed(index)
						  }}>edit</button>
						   
						  
						 <br/>
						  
					        </>
				})}</li>
			</div>
			<div>
				
			</div>
		</main>
	)
}
