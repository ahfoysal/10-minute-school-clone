import { Details } from '@mui/icons-material';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import YoutubeEmbed from "../components/ytembed";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Manga = () => {
  const [details , setDetails] = useState([]);
  const [src , setSrc] = useState('');

  let params = useParams();
  useEffect(() => {
 
    fetchDetails()
    }, [])
  
const fetchDetails = async () =>{



  await axios(`https://api.10minuteschool.com/lms-auth-service/api/v4/pro/v3/content/course/${params.name}/enrolled`)
 .then(data2 => { const data = data2.data.data
  console.log(data.steps[0].chapter_content[0].content_details.file_url)
  setSrc(data.steps[0].chapter_content[0].content_details.file_url)
   setDetails(data)
  //  setSrc(data.steps[0].)

  
 

 })  


}


  return (
    <div>
        <div className='container'>
    <div className="load-anime">
        <YoutubeEmbed embedId={src}  />
        </div> </div>
       
       <div className='container'>

       <div className="details">
            <p>CLass: {details?.category?.name} </p>
            <p>Sub: {details?.name} </p>


        </div>

  





       {details?.steps?.map((less) =>{
            return<> 
            
            
            
            <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography> {less.content_details.name} </Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Typography>
        {less?.chapter_content?.map((lss) =>{
              return <> {lss?.content_details.file_url && <> <span className='text-primary' onClick={() => setSrc(lss?.content_details.file_url)}>{lss?.content_details.name} </span><br /></> } </>
            })}
 
          
          </Typography>
        </AccordionDetails>
      </Accordion>

            
            
            
            
            
            <p>       </p>
            <p>          </p>

            
            </>
        })}



 <div>
     

     
    </div>


       </div>
    </div>
  )
}

export default Manga
