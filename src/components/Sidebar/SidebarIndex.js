import Button from '@mui/material/Button';
import { RxDashboard } from "react-icons/rx";

const Sidebar = () => {
    return(
        <>
            <div className="sidebar">
                <ul>
                    <li>
                        <Button className='w-100 sidebarmenu'><span className='icon'><RxDashboard /></span> Dashboard</Button>
                    </li>

                    <li>
                        <Button className='w-100 sidebarmenu'><span className='icon'><RxDashboard /></span> Conversation</Button>
                    </li>

                    <li>
                        <Button className='w-100 sidebarmenu'><span className='icon'><RxDashboard /></span> Broadcasting</Button>
                    </li>
                    <li>
                        <Button className='w-100 sidebarmenu'><span className='icon'><RxDashboard /></span> Template</Button>
                    </li>
                    <li>
                        <Button className='w-100 sidebarmenu'><span className='icon'><RxDashboard /></span> Contact</Button>
                    </li>

                    <li>
                        <Button className='w-100 sidebarmenu'><span className='icon'><RxDashboard /></span> Setting</Button>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default Sidebar