import React, { useState } from 'react'
import Base from '../Base/Base'
import teacherdata from '../Data/Teacherdata';
import { useHistory } from 'react-router-dom'
import { Button, Card, CardActions, CardContent, Typography } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

const Teachers = ({ teachers, setTeachers }) => {
  const history = useHistory()
  const [teditidx, setTEditidx] = useState({})
  const deleteTeacher = async(teachid) => {

      const response = await fetch(`https://644e0cb61b4567f4d57eddcf.mockapi.io/student/${teachid}`,{
            method: "DELETE"
        });
        
        const teacherdata = await response.json()
       if (teacherdata){
    const remainingteach = teachers.filter((teach, idx) => teach.id !== teachid)
    setTeachers(remainingteach)
       }
  }
  return (
    <Base
      title={'Teacher Dashboard'}
      description={"This page containes all Teachers data"}>
      <div className='card-container'>
        {teachers.map((teach, id) => (
            <Card sx={{ maxWidth: 350, heigth: 400 }} key={id}>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Name :{teach.tname}
                </Typography>
                <Typography variant="body2" color="text.primary">
                  Batch :{teach.tbatch}
                </Typography>
                <Typography variant="body2" color="text.primary">
                  Gender :{teach.tgender}
                </Typography>
                <Typography variant="body2" color="text.primary">
                  Jobrole :{teach.jobrole}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" variant="outlined"
                  onClick={() => history.push(`/tedit/${teach.id}`)}
                >Edit<EditIcon /></Button>
                <Button size="small" color="error" variant="outlined"
                  onClick={() => deleteTeacher(teach.id)}
                >delete<DeleteForeverIcon /></Button>
              </CardActions>
            </Card>
        ))}

      </div>
    </Base>
  )
}

export default Teachers