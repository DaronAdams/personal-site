import React,{ useState } from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';




const IconHolder = () => {
  const [effect, setEffect] = useState(false);

  const handleScrollBtn = () => {
    
  }

  const scrollToTop = () =>{
    window.scrollTo({
      top: 0, 
      behavior: 'smooth'
      /* you can also use 'auto' behaviour
         in place of 'smooth' */
    });
  };


  return (
    <>
    <div class="relative h-32 w-32 ml-4">
      <div class="fixed bottom-0 left-10 h-20 w-20 ...">
        <div>
          <i><GitHubIcon /></i>
          <i><LinkedInIcon /></i>
        </div>
      </div>
    </div>
    <div class="relative h-32 w-32 ml-50">
        <div class="fixed bottom-0 right-10 h-20 w-20">
          <div>
            <i
            className=''
            onClick={scrollToTop}
            >
            <ArrowCircleUpIcon fontSize='large'/></i>
          </div>
        </div>
      </div>
    </>
  )
}

export default IconHolder