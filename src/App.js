import { Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';
import './App.css';
import Students from './Components/Students';
import Teachers from './Components/Teachers';
import Addstudents from './Components/Addstudents';
import Addteacher from './Components/Addteacher';
import UpdateStudents from './Components/UpdateStudents';
import Updateteacher from './Components/Updateteacher';
import data from './Data/Data';
import { useContext, useEffect, useState } from 'react';
import Nopage from './Components/Nopage';
import Dashboard from './Components/Dashboard';
import { BrowserRouter } from 'react-router-dom';
import teacherdata from './Data/Teacherdata';
import { Appstates } from './Context/Appprovider';


function App() {
  const [teachers, setTeachers] = useState([])
  useEffect(()=>{
    const getTeacher = async () => {
        const response = await fetch("https://644e0cb61b4567f4d57eddcf.mockapi.io/student", {
          method : "GET",
        })
        const teacherdata = await response.json()
        if (teacherdata){
          setTeachers(teacherdata)
        }
    }
    getTeacher()
  },[])

  return (
    <div className="App">
       <BrowserRouter>
     <Switch>
      <Route exact path="/">
        <Dashboard/>
      </Route >

      <Route path="/student">
      <Students/>
      </Route>

      <Route  path="/add">
         <Addstudents/>
      </Route>

      <Route  path="/edit/:id">
         <UpdateStudents/>
      </Route>

      <Route path="/987">
        <Nopage/>
      </Route>

      <Route path="/teacher">
        <Teachers
        teachers = {teachers}
        setTeachers = {setTeachers}
        />
      </Route>

      <Route  path="/tadd">
         <Addteacher
         teachers = {teachers}
         setTeachers = {setTeachers}
         />
      </Route>

      <Route  path="/tedit/:id">
         <Updateteacher
         teachers = {teachers}
         setTeachers = {setTeachers}
         />
      </Route>

     </Switch>
     </BrowserRouter>
    </div>
  );
}
export default App