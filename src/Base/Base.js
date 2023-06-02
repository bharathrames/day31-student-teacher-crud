import React from 'react'
import { useHistory } from 'react-router-dom'
import { AppBar, Button, Toolbar } from '@mui/material'

const Base = ({ title, description, children }) => {
    const history = useHistory()
    return (
        <div className='container'>
            <div className='main-component base-component'>
                <div className='topbutton'>
                    <AppBar position="static">
                        <Toolbar>
                            <Button color="inherit"
                                onClick={() => history.push("/")}
                            >Dashboard</Button>

                            <Button color="inherit"
                                onClick={() => history.push("/student")}
                            >Students-List</Button>

                            <Button color="inherit"
                                onClick={() => history.push("/add")}
                            >Add-Student</Button>

                            <Button color="inherit"
                                onClick={() => history.push("/teacher")}
                            >Teacher-List</Button>

                            <Button color="inherit"
                                onClick={() => history.push("/tadd")}
                            >Add-Teachers</Button>
                        </Toolbar>
                    </AppBar>
                </div>

                <header>
                    <h1 className='heading'>{title}</h1>
                </header>
                <main className='main-segment'>
                    <h2>{description}</h2>
                    <div className='child-component'>
                        {children}
                    </div>
                </main>
            </div>
        </div>
    )
}

export default Base