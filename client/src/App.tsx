import { useEffect, useState } from 'react'
import './App.css'
import Typography from '@mui/material/Typography'
import { List, ListItemText } from '@mui/material'
import axios from 'axios'
//import { Activity } from 'react'

function App() {

  const [activities, setActivities] = useState<Activity[]>([])

  useEffect(()=>{
    axios.get<Activity[]>("https://localhost:7067/api/activities")
    .then(response => setActivities(response.data))
  }, [])

  return (
    <>
        <Typography variant='h2'>Reactivities</Typography>
        <List>
          {activities.map((activity)=>(
            <ListItemText key={activity.id}>{activity.title}</ListItemText>
            ))}
        </List>
    </>

    
  )
}

export default App
