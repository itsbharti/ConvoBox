import React from "react";
import './Dashboard.css';
import StepIndicator from "./StepIndicator";
import Footer from "./Footer";


const Dashboard = () => {
    return (
            <div className="dashboard">
                 <div className="stepIndicator d-flex align-items-center justify-content-center">  <StepIndicator ></StepIndicator>   </div>
                    {/* <div className="footer"><Footer></Footer></div> */}
                
            </div>

        
    )
}

export default Dashboard