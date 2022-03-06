import "./sidebar.css"
import {MdLineStyle, MdTimeline, MdTrendingUp, MdEventNote, MdAttachMoney, MdSwapVert, MdQuickreply, MdQuestionAnswer, MdRedeem, MdMailOutline, MdReport, MdAccountCircle} from 'react-icons/md';
import { Link } from 'react-router-dom';

export default function Sidebar() {
  return (

    <div className="sidebar">
      <div className="sidebarwrapper">
      <div className="menu">
          <h3 className="title">Dashboard</h3>
          <ul className="list">
          <Link to={"/" } className="link">
              <li className="listitem active">
                   <MdLineStyle className="icons"/>
                   Home
              </li>
          </Link>
              <li className="listitem">
                   <MdTimeline className="icons"/>
                   Analytics
              </li>
              <li className="listitem">
                   <MdTrendingUp className="icons"/>
                   Sales
              </li>
          </ul>

          <h3 className="title">Quick Menu</h3>
          <ul className="list">
               <Link to={"/users" } className="link">
                    <li className="listitem">
                         <MdAccountCircle className="icons"/>
                         Users
                    </li>
               </Link>

               <Link to={"/products" }  className="link">
                    <li className="listitem">
                         <MdRedeem className="icons"/>
                         Products
                    </li>
               </Link>
              
               <li className="listitem">
                    <MdAttachMoney className="icons"/>
                    Transaction
               </li>
             
              
              
              <li className="listitem">
                   <MdSwapVert className="icons"/>
                   Reports
              </li>
          </ul>

          <h3 className="title">Notification</h3>
          <ul className="list">
              <li className="listitem ">
                   <MdMailOutline className="icons"/>
                   Mail
              </li>
              <li className="listitem">
                   <MdQuickreply className="icons"/>
                   Feedback
              </li>
              <li className="listitem">
                   <MdQuestionAnswer className="icons"/>
                   Messages
              </li>
          </ul>

          <h3 className="title">staff</h3>
          <ul className="list">
              <li className="listitem">
                   <MdEventNote className="icons"/>
                   Manage
              </li>
              <li className="listitem">
                   <MdTimeline className="icons"/>
                   Analytics
              </li>
              <li className="listitem">
                   <MdReport className="icons"/>
                   Reports
              </li>
          </ul>
      </div>
      
      </div>
    </div>
  );
} 
