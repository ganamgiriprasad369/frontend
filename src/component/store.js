import React, {useState, useEffect} from "react";
import axios from "axios";

function Store(){

    let [datas, setDatas] = useState([]);
  
  useEffect(()=>{
      axios.get('https://backend-u6s4.onrender.com/notes')
      .then(response=>{
        console.log(response.data)
        setDatas(response.data);
        
      })
      .catch((err)=>{
        console.log(err);
      })
  },[])

  

    return(
        <>
        
        <div id='contentStore'>
            {
                datas.map((item)=>(
                    <div id="items" key={item._id}>
                        <h2 id="titles">
                            {item.title}
                        </h2>
                        <p id="contents">
                            {item.content}
                        </p>
                        <p id="dates">
                            Date: {' '}{
                                item.createAtTime.slice(0,10)
                            }
                        </p>
                    </div>
                ))
            }
        </div>
        </>
    )
}

export default Store;