import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import logo from '../../images/logo.png'
import Button from '@mui/material/Button';
import { MdOutlineMenuOpen } from "react-icons/md";
import { MdOutlineMenu } from "react-icons/md";


import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';



const Header = () => {
    const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleMyAccOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCloseMyAcc = () => {
    setAnchorEl(null);
  };
    return (
        <header>
            <div className="d-flex align-items-center">
                <div className="container-fluid w-100">
                    <div className="row d-flex align-items-center ">
                         {/* logowrapper */}
                         <div className="col-sm-2">
                            <Link to={'/'} className="d-flex align-items-center logo"> 

                                <img src={logo} ></img>

                                <div className="logo-title ">
                                    <span className="convo">Convo</span>
                                    <span className="box">Box</span>
                                </div>
                                <div className="d-flex align-items-center pl-4">
                                    <Button className="rounded-circle mr-3 " ><MdOutlineMenuOpen /></Button>
                                </div>
                            </Link> 
                        </div>
                        
                        {/* createbroadcasting part2*/}
                        <div className="part2">
                            <span className="create-broadcasting">Create Broadcasting </span>                  
                        </div>

                        {/* status part3 */}
                        <div className="part3 d-flex justify-content-end">
                            <div>
                                <span className="status">Whatsapp Business API:</span>
                                <span className="live"> LIVE</span>
                            </div>
                            <div>
                                <span className="plan">Current Plan:</span>
                                <span className="active"> TRIAL</span>
                            </div>
                        </div>


                        {/* part4 MY account */}
                        <div className="part4">
                            <button 
                                className="myacc"
                                onClick={handleMyAccOpen}> CA
                            </button>
                        <Menu
                                anchorEl={anchorEl}
                                id="account-menu"
                                open={open}
                                onClose={handleCloseMyAcc}
                                onClick={handleCloseMyAcc}
       
                                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                            >

                            <MenuItem className="pl-2 pb-0" onClick={handleCloseMyAcc}>
                                <Avatar className="avtar " /><span className="font-weight-bold h6">My Account</span>
                            </MenuItem>
                            <Divider className="mb-3"/>
                            <MenuItem onClick={handleCloseMyAcc}>
                                <ListItemIcon>
                                <PersonAdd fontSize="small" />
                                </ListItemIcon>
                                    Add another account
                            </MenuItem>
                            <MenuItem onClick={handleCloseMyAcc}>
                                <ListItemIcon>
                                <Settings />
                                </ListItemIcon>
                                Settings
                            </MenuItem>
                            <MenuItem onClick={handleCloseMyAcc}>
                                <ListItemIcon>
                                <Logout  />
                                </ListItemIcon>
                                Sign Out
                            </MenuItem>
                        </Menu>
                        </div>


                    </div>
                </div>
            </div>
        </header>
    )
}


export default Header