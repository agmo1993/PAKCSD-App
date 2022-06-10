import Data from "./companyData.json";
import {useState} from "react";
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import CompanyCard from '../components/CompanyCard';
import Box from '@mui/material/Box';
import ResponsiveAppBar from '../components/appBar';
import FilterSelect from '../components/select';

export default function Search (){
  const [query, setQuery] = useState("");
  const [sdg, setSDG] = useState([]);

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
          flexWrap : 'wrap',
          paddingLeft : '7.5%',
          paddingRight : '5%'
        }}
        >
      <FilterSelect
        items={[3, 4, 5, 6]}
        selectValue={setSDG}
        title={"SDG"}
      />
      <FilterSelect
        items={[3, 4, 5, 6]}
        selectValue={setSDG}
        title={"ESG"}
      />
      <FilterSelect
        items={[3, 4, 5, 6]}
        selectValue={setSDG}
        title={"Topic"}
      />
      <FilterSelect
        items={[3, 4, 5, 6]}
        selectValue={setSDG}
        title={"Category"}
      />
      <FilterSelect
        items={[3, 4, 5, 6]}
        selectValue={setSDG}
        title={"Management Approach"}
      />
      <FilterSelect
        items={[3, 4, 5, 6]}
        selectValue={setSDG}
        title={"Data public?"}
      />
      <FilterSelect
        items={[3, 4, 5, 6]}
        selectValue={setSDG}
        title={"Framework signatory"}
      />
      <FilterSelect
        items={[3, 4, 5, 6]}
        selectValue={setSDG}
        title={"Relevant certification"}
      />
      </Box>
      <Box
        sx={{
          display : 'flex' ,
          flexWrap : 'wrap'
        }}
        >
      {
      Data.filter(post => {
        if (query === '') {
          if (sdg.length === 0){ 
            return post;
          }
          else if (sdg.includes(post.SDG)){
            return post
          }
        } else if (post.name.toLowerCase().includes(query.toLowerCase())) {
          if (!sdg){ 
              return post;
          }
          else if (sdg.includes(post.SDG)){
              return post
            }
{}        }
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