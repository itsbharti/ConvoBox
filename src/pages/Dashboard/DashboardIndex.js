import React from "react";
import './Dashboard.css';
import StepIndicator from "./StepIndicator";
import Footer from "./Footer";
import SearchBox from "./SearchBox";
import templates from "../../data/TemplateData";
import { Grid } from '@mui/material';
import TemplateCard from "./TemplateCard";


const Dashboard = () => {
    return (
            <div className="dashboard">
                 <div className="stepIndicator d-flex align-items-center justify-content-center">  <StepIndicator ></StepIndicator>   </div>
                     <SearchBox className="searchBox" ></SearchBox>
                     <div className="templateArea">
                        <Grid container spacing={2} className="templateCards" justifyContent="center">
                          {templates.map((template, index) => (
                        <Grid item key={index}>
                             <TemplateCard {...template} />
                        </Grid>
                    ))}
                    </Grid>
                     </div>
                 <div className="footer"><Footer></Footer></div>
                
            </div>

        
    )
}

export default Dashboard