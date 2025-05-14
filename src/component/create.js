import React, {useState } from 'react';
import axios from 'axios';

function Create()
{
    
    let [title, setTitle] = useState('');
    let [content, setContent] = useState('');

    

    const handleSave = async()=>{
        const data = {
            title:title,
            content:content
        }
        try{
            let response = await axios.post('https://backend-u6s4.onrender.com/notes', data)
            console.log(response.data)
            alert('create note successfully....')
        }
        catch (error) {
            console.error('Error saving note:', error);
        }
        setTitle('');
        setContent('');
        
    }


    return(
        <>
        
        <div style={{display:'flex', justifyContent:'center', alignItems:'center', width:'100%', height:'100vh', backgroundColor:'blueviolet'}}>
            <div style={{display:'flex', flexDirection:'column', gap:'1rem'}}>
                <input id='title' type='text' placeholder='Title Name' name='text' value={title} onChange={(event)=>setTitle(event.target.value)}/>
                <textarea id='content' cols={40} rows={3} placeholder='Content/Description' value={content} onChange={(event)=>setContent(event.target.value)}></textarea>
                <button onClick={handleSave} id='addNote'>Add Note</button>
            </div>
        </div>
        </>
        
    )
}



export default Create;