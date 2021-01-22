import React, { useState ,useEffect} from "react";
import api from './Services/api';
export default function Home(){
    const [type, settype] = useState("Name");
    const [name, setname] = useState("");
    const [data,setdata]=useState([]);
   
    const HandleSelect=(e)=>{
        console.log(e.target.value)
    settype(e.target.value)
    }
   const checkobject=(response)=>{
    if(Array.isArray((response.data))){
        setdata([...response.data])
      }else{
       setdata([response.data])
      }
   }
    const submithandler=async()=>{
        console.log("click");
        if(type==="Name"){
            const response=await api.get(`/name/${name}`);
             checkobject(response)
             setname("")
        }else if(type==="Code"){
            const response=await api.get(`/alpha/${name}`);
            checkobject(response)
            setname("")
        }else if(type==="Currency"){
            const response=await api.get(`/currency/${name}`);
            checkobject(response)
            setname("")
        }else if(type==="Language"){
            const response=await api.get(`/lang/${name}`);
            checkobject(response)
            setname("")
        }else if(type==="Callingcode"){
            const response=await api.get(`/callingcode/${name}`);
            checkobject(response)
            setname("")
        }else if(type==="Region"){
            const response=await api.get(`/region/${name}`);
            checkobject(response)
            setname("")
        }
    }
    return(
        <div className="Main-container">
        <div>
          <h1> Country Search Box:</h1>
        </div>
        <div>
        <select name="SEARCH BY:" id="cars" onChange={(e)=>HandleSelect(e)}>
           <option value="Name">Name</option>
           <option value="Code">Code</option>
           <option value="Currency">Currency</option>
           <option value="Language">Language</option>
           <option value="Callingcode">Callingcode</option>
           <option value="Region">Region</option>
         </select>
        </div>
        <div>
            <div>
           <input type="text" value={name} onChange={(e)=>setname(e.target.value)}/>
           </div>
            <div>
                <button onClick={()=>submithandler()}>Search</button>
            </div>
        </div>
        <div>
            {data.map(data=><div>
                   <h1>{data.name}</h1>
                   <img style={{width:"30%"}}src={data.flag}/>
                   {data.borders.map((p,i)=>
                    <p>Border {i}:{p}</p>)}
            </div>)}
        </div>
        </div>
    )
}
// const top100Films = [
//     { title: "Name"},
//     { title: "Full Name"},
//     { title: "Code" },
//     { title: "List of codes" },
//     { title: "Currency" },
//     { title: "Language"},
//     { title: "Capital city" },
//     { title: "Calling code" },
//     { title: "Region" },
//     { title: "Regional Bloc" },
//     { title: "Region" },
//   ];
  