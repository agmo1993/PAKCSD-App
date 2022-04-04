import {useState} from "react";
import Search from './pages/search';
import CompanyPage from './pages/companyPage';
import { Route, Routes } from "react-router-dom";


export default function App (){
  return (
    <Routes>
        <Route path="/" element={<Search />}/>
        <Route path="/project/:id" element={<CompanyPage />} />
    </Routes>

 )
}