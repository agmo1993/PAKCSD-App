import Data from "./data.json";
import {useState} from "react";
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import CompanyCard from '../components/CompanyCard';
import Box from '@mui/material/Box';


export default function Search (){
  const [query, setQuery] = useState("")
  return (
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
            sector={post.Sector}
          />
          )
        })
      }
      </Box>
    </Container> 
)
}