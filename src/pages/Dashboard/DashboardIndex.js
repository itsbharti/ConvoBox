import React, { useState } from "react";
import './Dashboard.css';
import StepIndicator from "./StepIndicator";
import Footer from "./Footer";
import SearchBox from "./SearchBox";
import TemplateCard from "./TemplateCard";
import { Grid } from '@mui/material';
import templates from "../../data/TemplateData";
import MapTemplateVariable from './MapTemplateVariable';

const Dashboard = () => {

    const [selectedCard, setSelectedCard] = useState(null);
    const [searchName, setSearchName] = useState("")
    const [activeStep, setActiveStep] = useState(0);

    const handleSelect = (index) => {
        setSelectedCard(index);
        
    };

    const handleSearch = (search) => {
        setSearchName(search.toLowerCase());
    }

    const filteredTemplates = templates.filter(template =>
        template.title.toLowerCase().includes(searchName)
    );

 
    return (
      <div className="dashboard-container">
      <div className="stepIndicator d-flex align-items-center justify-content-center">
      <StepIndicator activeStep={activeStep} setActiveStep={setActiveStep} />
      </div>
        <div className="dashboard">
          
          <div className="s-c-f">
            {activeStep === 0 ? (
              <>
                <SearchBox onSearch={handleSearch} className="searchBox" />
                <div className="templateArea">
                  <Grid container spacing={2} className="templateCards" justifyContent="center">
                    {filteredTemplates.map((template, index) => (
                      <Grid item key={index}>
                        <TemplateCard
                          {...template}
                          selected={index === selectedCard}
                          onSelect={() => handleSelect(index)}
                        />
                      </Grid>
                    ))}
                  </Grid>
                </div>
                <div className="footer">
                  <Footer setActiveStep={setActiveStep} />
                </div>
              </>
            ) : (
              <MapTemplateVariable />
            )}
          </div>
        </div>
        </div>
      );
    };
    
    export default Dashboard;