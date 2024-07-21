import React, {useState} from "react";
import Button from '@mui/material/Button';
import { BsFillGridFill } from "react-icons/bs";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { CiSettings } from "react-icons/ci";
import { IoPeopleOutline } from "react-icons/io5";
import { PiTelevision } from "react-icons/pi";
import { CgFormatLeft } from "react-icons/cg";

import { IoCallOutline } from "react-icons/io5";
import { IoLogOutOutline } from "react-icons/io5";



const Sidebar = () => {
    const [activeItem, setActiveItem] = useState('/');

    const handleItemClick = (path) => {
        setActiveItem(path);
    }
    return(
        <>
            <div className="sidebar">
                <ul>
                    <li>
                        <Button className= {`w-100 sidebarmenu ${activeItem === '/' ? 'active' : ''}`} 
                            onClick={() => handleItemClick('/')}>
                            <span className='icon'><BsFillGridFill className="icn" ></BsFillGridFill></span>
                             Dashboard
                        </Button>
                    </li>

                    <li>
                        <Button className={`w-100 sidebarmenu ${activeItem === '/conversation' ? 'active' : ''}`} 
                            onClick={() => handleItemClick('/conversation')}>
                            <span className='icon'> <IoChatbubbleEllipsesOutline className="icn"></IoChatbubbleEllipsesOutline>
                            </span> 
                            Conversation
                        </Button>
                    </li>

                    <li>
                        <Button className={`w-100 sidebarmenu ${activeItem === '/broadcasting' ? 'active' : ''}`} 
                            onClick={() => handleItemClick('/broadcasting')}>
                            <span className='icon'> <PiTelevision className="icn"></PiTelevision></span> 
                            Broadcasting
                        </Button>
                    </li>

                    <li>
                        <Button className={`w-100 sidebarmenu ${activeItem === '/template' ? 'active' : ''}`} 
                            onClick={() => handleItemClick('/template')}>
                            <span className='icon'><CgFormatLeft className="icn" ></CgFormatLeft></span>
                            Template
                        </Button>
                    </li>
                    <li>
                        <Button  className={`w-100 sidebarmenu ${activeItem === '/contact' ? 'active' : ''}`} 
                            onClick={() => handleItemClick('/contact')}>
                            <span className='icon'><IoPeopleOutline className="icn" ></IoPeopleOutline></span> 
                            Contact
                        </Button>
                    </li>

                    <li>
                        <Button 
                            className={`w-100 sidebarmenu ${activeItem === '/setting' ? 'active' : ''}`} 
                            onClick={() => handleItemClick('/setting')}>
                            <span className='icon'><CiSettings className="icn"></CiSettings> </span>
                             Setting
                        </Button>
                    </li>
                </ul>

                <ul className="ul-2">
                    <li>
                        <Button 
                            className={`w-100 sidebarmenu `}>
                            <span className='contactIcon'><IoCallOutline className="icnC"></IoCallOutline> </span>
                             Contact Us
                        </Button>
                    </li>
                    <li>
                        <Button 
                            className={`w-100 sidebarmenu `}>
                            <span className='logOutIcon'><IoLogOutOutline className="icnL"></IoLogOutOutline> </span>
                             Log Out
                        </Button>
                    </li>
                </ul>

             
            </div>
        </>
    )
}

export default Sidebar