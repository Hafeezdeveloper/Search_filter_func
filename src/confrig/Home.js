import { Grid } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Cards from '../comp/Cards'

const Home = () => {
  const [data,setData] = useState([])
  // const [txt,setTxt] = useState('')

  const dataRen = () =>{
    axios.get('https://fakestoreapi.com/products')
    .then((succ) => 
    {setData(succ.data)}
      )
    .catch((err) => console.log(err))
  }

  useEffect( ()=>{
    dataRen()
  },[])

  const getdata = (e) =>{
    console.log(e)
  }
  return (
    <div>
      <Grid container>
        {data.map( (value,i)=>{
          return(
            <Grid key={i} item md={3} sm={4} xs={6}>
              <Cards getdata={getdata} data={value}  />
            </Grid>
          )
        })}

      </Grid>
    </div>
  )
}

export default Home
