import { Details, PlayArrow } from '@mui/icons-material';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import YoutubeEmbed from "../components/ytembed";
import Accordion from 'react-bootstrap/Accordion';  
const Manga = () => {
  const [details , setDetails] = useState([]);
  const [src , setSrc] = useState('');
  const [np , setNp] = useState('');

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

setSrc(url) 
setNp(name)
}


  return (
    <div>
        <div className='container'>
    <div className="load-anime">
        <YoutubeEmbed embedId={src}  />
        </div> </div>
       
       <div className='container'>

       <div className="details">
        <p>Now Playing: {np}</p>
            <p>CLass: {details?.category?.name} </p>
            <p>Sub: {details?.name} </p>


        </div>

  





       {details?.steps?.map((less, index) =>{
            return<> 
             <Accordion  defaultActiveKey="0" flush>



      <Accordion.Item eventKey={index+1}>
        <Accordion.Header>{less.content_details.name}</Accordion.Header>
        <Accordion.Body>
        {less?.chapter_content?.map((lss, index) =>{
              return <> {lss?.content_details.file_url && <> <span className={`sub-span ${np === lss?.content_details.name && 'text-danger'}`} onClick={() => getEp(lss?.content_details.file_url, lss?.content_details.name)}> {np === lss?.content_details.name && <PlayArrow /> } {index +1}. {lss?.content_details.name} </span><br /></> } </>
            })}
        </Accordion.Body>
      </Accordion.Item>
      


    </Accordion>
            
{/*             
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
       
 
          
          </Typography>
        </AccordionDetails>
      </Accordion> */}

            
            
            
            
      

            
            </>
        })}



 {/* <div> */}
     
 {/* <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>
            General settings
          </Typography>
          <Typography sx={{ color: 'text.secondary' }}>I am an accordion</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.
            Aliquam eget maximus est, id dignissim quam.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>Users</Typography>
          <Typography sx={{ color: 'text.secondary' }}>
            You are currently not an owner
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus,
            varius pulvinar diam eros in elit. Pellentesque convallis laoreet
            laoreet.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>
            Advanced settings
          </Typography>
          <Typography sx={{ color: 'text.secondary' }}>
            Filtering has been entirely disabled for whole web server
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
            amet egestas eros, vitae egestas augue. Duis vel est augue.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>Personal data</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
            amet egestas eros, vitae egestas augue. Duis vel est augue.
          </Typography>
        </AccordionDetails>
      </Accordion>
     
    </div> */}


       </div>
    </div>
  )
}

export default Manga
