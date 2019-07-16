import React from "react"
import Main from '../tamplets/Main'



const headerProps = {
    icon: "phone",
    title:"Contatos",
    subtitle:"Entre em contato  por meio de nossas mídias sociais"
}


export default props =>
<Main icon="home" title="Início"{...headerProps} 
subtitle="Entre em contato por meio de nossas mídias sociais">
    
<div className="display -4"align-items="center"><h1>CONTATOS!</h1></div>
<p className="mb-0" align-items="center">Entre em contato</p>
 
<div>

<h7>
  
    <li> 
      
      <i>  Facebook: 23</i>
    </li>
    <li>
       Instagram:@murillomms
    </li>
    <li>
       Wathsapp: 62 909090090
    </li>
</h7> 
<iframe width="100%" height="315" src="https://www.youtube.com/embed/watch?v=7G9pTbBerB0&list=RD7G9pTbBerB0&start_radio=1" frameborder="0" allowfullscreen></iframe>
</div>
       
</Main>
