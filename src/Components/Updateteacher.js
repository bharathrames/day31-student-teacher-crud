import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Base from '../Base/Base'
import { useHistory } from 'react-router-dom'
import { Button, TextField } from '@mui/material'

const Updateteacher = ({ teachers, setTeachers, edittidx }) => {
  const history = useHistory()
  const { id } = useParams()
  const editteacher = teachers[id]
  // console.log(editteacher)
  const [tname, setTName] = useState("")
  const [tbatch, setTBatch] = useState("")
  const [tgender, setTGender] = useState("")
  const [jobrole, setJobrole] = useState("")

  useEffect(() => {
    setTName(editteacher.tname)
    setTBatch(editteacher.tbatch)
    setTGender(editteacher.tgender)
    setJobrole(editteacher.jobrole)
  }, [editteacher])


  async function Updateteacher() {
    const updatedobjt = {
      tname,
      tbatch,
      tgender,
      jobrole
    }
    const response = await fetch(`https://644e0cb61b4567f4d57eddcf.mockapi.io/student/${editteacher.id}`,{
        method: "PUT",
        body: JSON.stringify(updatedobjt),
        headers:{
          "content-Type": "application/json" 
        }
       })
       const teacherdata = await response.json()
       if(teacherdata){
    teachers[id] = updatedobjt
    setTeachers([...teachers])
    history.push("/teacher")
  }
}
  return (
    <Base
      title={"Edit a Teachers"}
      description={"We can Edit a Teachers data"}
    >
      <div className='addTextField'>
        <TextField   id="filled-basic" label="Enter Name" variant="filled"
          type='text'
          value={tname}
          fullWidth sx={{ m: 1 }}
          onChange={(e) => setTName(e.target.value)}
        />
        <TextField   id="filled-basic" label="Enter Batch" variant="filled"
          type='text'
          value={tbatch}
          fullWidth sx={{ m: 1 }}
          onChange={(e) => setTBatch(e.target.value)}
        />
        <TextField   id="filled-basic" label="Enter Gender" variant="filled"
          type='text'
          value={tgender}
          fullWidth sx={{ m: 1 }}
          onChange={(e) => setTGender(e.target.value)}
        />
        <TextField   id="filled-basic" label="Enter Jobrole" variant="filled"
          type='text'
          value={jobrole}
          fullWidth sx={{ m: 1 }}
          onChange={(e) => setJobrole(e.target.value)}
        />{" "}

        <Button variant="contained" color='success'
          onClick={Updateteacher}
        >Update Teachers</Button>
      </div>
    </Base>
    
  )
}

export default Updateteacher