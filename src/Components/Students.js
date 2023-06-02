import React, { useState, } from 'react'
import Base from '../Base/Base'
import { useHistory } from 'react-router-dom'
import { Button, Card, CardActions, CardContent, Typography, } from '@mui/material'
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { Appstates } from '../Context/Appprovider';

const Students = () => {
    const {students, setStudents} = Appstates();
    const history = useHistory()
    const [editidx, setEditidx] = useState({})
    const deleteStudent = async(studId) => {

        const response = await fetch(`https://644e0cb61b4567f4d57eddcf.mockapi.io/users/${studId}`,{
            method: "DELETE"
        });
        
        const data = await response.json()
       if (data){
        const remainingstud = students.filter((stud, idx) => stud.id !== studId)
        setStudents(remainingstud)
    }
}
    return (
        <Base
            title={"Students Dashboard📃"}
            description={"The page containes all students data"} >
            <div className='card-container'>
                {students.map((stud, idx) => (
                    <Card sx={{ maxWidth: 350, heigth: 400 }} key={idx}>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Name : {stud.name}
                            </Typography>
                            <Typography variant="body2" color="text.primary">
                                Batch : {stud.batch}
                            </Typography>
                            <Typography variant="body2" color="text.primary">
                                Gender : {stud.gender}
                            </Typography>
                            <Typography variant="body2" color="text.primary">
                                Qualification : {stud.qualification}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small" variant="outlined"
                                onClick={() => history.push(`/edit/${stud.id}`)}
                            >Edit<EditIcon/></Button>
                            <Button size="small" color="error" variant="outlined"
                                onClick={() => deleteStudent(stud.id)}
                            >delete<DeleteForeverIcon/></Button>
                        </CardActions>
                    </Card>

                ))}

            </div>
        </Base>
    )
}

export default Students