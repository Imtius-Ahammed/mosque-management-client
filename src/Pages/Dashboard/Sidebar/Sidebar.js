
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import StoreIcon from "@mui/icons-material/Store";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SettingsSystemDaydreamOutlinedIcon from "@mui/icons-material/SettingsSystemDaydreamOutlined";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";

import "./Sidebar.css"
import { Link, Outlet } from 'react-router-dom';
import useAdmin from "../../../hooks/useAdmin";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { signOut } from "firebase/auth";
const Sidebar = () => {


    const handleSignOut = () => {
        signOut(auth);
        localStorage.removeItem('accessToken');
    }

    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user);
    return (
        <div className="sidebar toggle">

            <div className="top">
                <Link to="/" style={{ textDecoration: "none" }}>
                    <img height={60} src="https://i.ibb.co/hBkDVR6/3-logo.png" alt="" />
                </Link>
            </div>
            <hr />
            <div className="center">
                <ul>
                    <p className="title">MAIN</p>
                    <li>
                        <DashboardIcon className="icon" />
                        <span>Dashboard</span>
                    </li>

                    {admin && <>
                        <p className="title">LISTS</p>
                        <Link to="/dashboard/users" style={{ textDecoration: "none" }}>
                            <li>
                                <PersonOutlineIcon className="icon" />
                                <span>Users</span>
                            </li>
                        </Link>



                        <Link to="/dashboard/products" style={{ textDecoration: "none" }}>
                            <li>
                                <StoreIcon className="icon" />
                                <span>Products</span>
                            </li>
                        </Link>



                        <li>
                            <CreditCardIcon className="icon" />
                            <span>Orders</span>
                        </li>
                        <Link to="/dashboard/imam" style={{ textDecoration: "none" }}>
                            <li>
                                <InsertChartIcon className="icon" />
                                <span>Add Imam</span>
                            </li>
                        </Link>

                        <Link to="/dashboard/addscolar" style={{ textDecoration: "none" }}>
                            <li>
                                <InsertChartIcon className="icon" />
                                <span>Add Scolar</span>
                            </li>
                        </Link>


                        <p className="title">USEFUL</p>
                        <Link to="/dashboard/addnewproduct" style={{ textDecoration: "none" }}>
                            <li>
                                <InsertChartIcon className="icon" />
                                <span>Stats</span>
                            </li>
                        </Link>
                        <li>
                            <NotificationsNoneIcon className="icon" />
                            <span>Notifications</span>
                        </li>
                        <p className="title">Campaigns</p>
                        <Link to="managecampaign" style={{ textDecoration: "none" }}>
                            <li>
                                <SettingsSystemDaydreamOutlinedIcon className="icon" />
                                <span>Manage Campaigns</span>
                            </li>
                        </Link>

                        <Link to="addcampaign" style={{ textDecoration: "none" }}>
                            <li>
                                <PsychologyOutlinedIcon className="icon" />
                                <span>Add Campaign </span>
                            </li>
                        </Link>
                        <Link to="addKhutba" style={{ textDecoration: "none" }}>
                            <li>
                                <PsychologyOutlinedIcon className="icon" />
                                <span>Add Khutba </span>
                            </li>
                        </Link>
                        <Link to="manageKhutba" style={{ textDecoration: "none" }}>
                            <li>
                                <PsychologyOutlinedIcon className="icon" />
                                <span>ManageKhutba</span>
                            </li>
                        </Link>




                        {/* Event */}
                        <p className="title">Events</p>
                        <Link to="manageevent" style={{ textDecoration: "none" }}>
                            <li>
                                <SettingsSystemDaydreamOutlinedIcon className="icon" />
                                <span>Manage Event</span>
                            </li>
                        </Link>

                        <Link to="addevent" style={{ textDecoration: "none" }}>
                            <li>
                                <PsychologyOutlinedIcon className="icon" />
                                <span>Add Event </span>
                            </li>
                        </Link>

                    </>
                    }

                    <p className="title">USER</p>
                    <Link to="/dashboard/profile" style={{ textDecoration: "none" }}>
                        <li>
                            <AccountCircleOutlinedIcon className="icon" />
                            <span>Profile</span>
                        </li>

                    </Link>

                    <li>
                        <ExitToAppIcon className="icon" onClick={handleSignOut} />
                        {

                            <span onClick={handleSignOut}>Logout</span>

                        }
                    </li>

                    {

                        <span className='icon' onClick={handleSignOut}>Logout</span>

                    }




                </ul>
            </div>
            <div className="bottom">

            </div>
        </div>


    );
};

export default Sidebar;