import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
const IconHolder = () => {
  return (
    <div class="relative h-32 w-32 ml-4">
  <div class="fixed bottom-0 left-10 h-20 w-20 ...">
    <div>
      <i><GitHubIcon /></i>
      <i><LinkedInIcon /></i>
    </div>
  </div>
</div>
  )
}

export default IconHolder