import { useEffect, useState } from "react";

export default function UserForm({userInfo , addOrEdit , setFormStatus , formStatus}) {
    const [data,setData] = useState({firstName:"",lastName:"",age:null,mobile:null,email:''})
    const saveData = (e)=> {
        let {name,value} = e.target
            setData({...data , [name]:value})
    }
    useEffect(()=>{
        if(formStatus === 'edit')
            setData(userInfo)
    },[formStatus])
    return (
        <div className="flex justify-center items-center fixed inset-0 bg-black bg-opacity-50">
        <div className="w-2/5 h-96 rounded-xl flex flex-col justify-around items-center bg-slate-200">
            <div>
                <form className="flex flex-col">
                    <label htmlFor="firstName">firstName:</label>
                    <input className="inputs" defaultValue={data.firstName} id="firstName" placeholder="firstName" name="firstName" type="text" onChange={saveData} />
                    <label htmlFor="lastName">lastName:</label>
                    <input className="inputs" defaultValue={data.lastName} id="lastName" placeholder="lastName" name="lastName" type="text" onChange={saveData} />
                    <label htmlFor="age">age:</label>
                    <input className="inputs" defaultValue={data.age} id="age" placeholder="age" name="age" type="number" onChange={saveData} />
                    <label htmlFor="mobile">mobile:</label>
                    <input required className="inputs" defaultValue={data.mobile} id="mobile" placeholder="mobile" name="mobile" type="text" onChange={saveData} />
                    <label htmlFor="email">email:</label>
                    <input className="inputs" defaultValue={data.email} id="email" placeholder="email" name="email" type="text" onChange={saveData} />
                </form>
            </div>
            <div>
                <button className="btn" onClick={()=>addOrEdit(data)}>submit</button>
                <button className="btn" onClick={()=>setFormStatus('hide')}>close</button>
            </div>
        </div>
        </div>
    )
}

// for inputs we can use defaultValue as well