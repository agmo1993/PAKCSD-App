import Data from "./companyData.json";
import {useState} from "react";
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import CompanyCard from '../components/CompanyCard';
import Box from '@mui/material/Box';
import Header from '../components/header';
import ResponsiveAppBar from '../components/appBar';
import { Link } from 'react-router-dom';

export default function Search (){
  const [query, setQuery] = useState("")
  return (
    <div>
    <ResponsiveAppBar />
    <Container fixed>
     <TextField 
        id="filled-basic" 
        label="Search Company" 
        variant="filled" 
        onChange={event => setQuery(event.target.value)} 
        sx={{ width : '100%' }}
      />
      <Box
        sx={{
          display : 'flex' ,
          flexWrap : 'wrap'
        }}
        >
      {
      Data.filter(post => {
        if (query === '') {
          return post;
        } else if (post.name.toLowerCase().includes(query.toLowerCase())) {
          return post;
        }
      }).map((post, index) => {
        return (
            <CompanyCard 
              name={post.name}
              sector={post.sector}
              img={post.img}
              index={post.id}
            />
          )
        })
      }
      </Box>
    </Container> 
  </div>
)
}