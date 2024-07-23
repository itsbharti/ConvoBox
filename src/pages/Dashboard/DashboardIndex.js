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

    const [searchName, setSearchName] = useState("")

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
        <div className="dashboard">
        <div className="stepIndicator d-flex align-items-center justify-content-center">
            <StepIndicator />
        </div>
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
            <Footer />
        </div>
    </div>

    );
}

export default Dashboard;
