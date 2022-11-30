
import PlayArrow from '@mui/icons-material/PlayCircleFilledWhite';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Accordion from 'react-bootstrap/Accordion';  
import YouTube from "react-youtube";
const Manga = () => {
  const [details , setDetails] = useState([]);
  const [src , setSrc] = useState('');
  const [np , setNp] = useState('');
  const [loading3 , setLoading3] = useState(true);

  

  let params = useParams();
  useEffect(() => {
 
    fetchDetails()
    }, [])
  
const fetchDetails = async () =>{

  await axios(`https://api.10minuteschool.com/lms-auth-service/api/v4/pro/v3/content/course/${params.name}/enrolled`)
 .then(data2 => { const data = data2.data.data
  console.log(data.steps[0])
  setSrc(data.steps[0].chapter_content[0].content_details.file_url)
  setNp(data.steps[0].chapter_content[0].content_details.name )
   setDetails(data)

 })  }

 const getEp = (url, name) => {
  // setLoading3(false)
setSrc(url) 
setNp(name)



 
  // setTimeout(() => setLoading3(true) , 100)
}
const videoOptions = {
  playerVars: {
    autoplay: 1,
    controls: 1,
    rel: 0,
    showinfo: 1,
    mute: 0,
    loop: 1
  }
};

  return (
    <div className='container'>
        <div >
     
    <div  className='productSingle__inner'>
      <div className='embedss'>
<div className='embed3 container'>
    {loading3 ?  <> <YouTube videoId={src} opts={videoOptions} className='emded2' />  <p>Now Playing: {np}</p></> : <></>}</div>
  
     
      </div>
  

      <div  className='options'>

       

  


      <Accordion  defaultActiveKey="0" flush>


{details?.steps?.map((less, index) =>{
     return<> 
     



<Accordion.Item eventKey={index+1}>
 <Accordion.Header>{less.content_details.name}</Accordion.Header>
 <Accordion.Body>
 {less?.chapter_content?.map((lss, index) =>{
       return <> {lss?.content_details.file_url && <div className='titles-span'> 
       <span className={`sub-span ${np === lss?.content_details.name && 'red'}`}
        onClick={() => getEp(lss?.content_details.file_url, lss?.content_details.name)}>
        <PlayArrow /> {index +1}. {lss?.content_details.name} </span><br /></div> } </>
     })}
 </Accordion.Body>
</Accordion.Item>





     
     </>
 })}
</Accordion>




</div>
        </div>
        
            
         </div>
       
     
    </div>
  )
}

export default Manga
