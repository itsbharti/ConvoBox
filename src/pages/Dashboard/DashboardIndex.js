import React, { useState } from "react";
import './Dashboard.css';
import StepIndicator from "./StepIndicator";
import Footer from "./Footer";
import SearchBox from "./SearchBox";
import TemplateCard from "./TemplateCard";
import { Grid } from '@mui/material';
import templates from "../../data/TemplateData";

const Dashboard = () => {
    const [selectedCard, setSelectedCard] = useState(null);

    const handleSelect = (index) => {
        setSelectedCard(index);
    };

    return (
        <div className="dashboard">
            <div className="stepIndicator d-flex align-items-center justify-content-center">
                <StepIndicator />
            </div>
            <SearchBox className="searchBox" />
           <div className="templateArea">
           <Grid container spacing={2} className="templateCards" justifyContent="center">
                {templates.map((template, index) => (
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
                <Footer />
            </div>
        </div>
    );
}

export default Dashboard;
