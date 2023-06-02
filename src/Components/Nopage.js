import React from 'react'
import Base from '../Base/Base'
import { useHistory } from 'react-router-dom'

const Nopage = () => {
 const   history = useHistory()
  return (
<Base
title={"404 Error No Page Found"}
description={" Wrong URL Please click below button"}
>
<button 
onClick={()=>history.push("/")}
>Go to Dashboard</button>
</Base>
    )
}

export default Nopage