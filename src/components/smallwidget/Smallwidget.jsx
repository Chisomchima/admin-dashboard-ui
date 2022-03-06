import './smallwidget.css';
import {MdVisibility}from 'react-icons/md';

export default function SmallWidget() {
  return (
  
  <div className='smallwidget'>
    <span className='smallwidgettitle'>New Members</span>
    <ul className='smalllist'>
        <li className='smalllistitem'>
            <img className="image" src='../../images/toyface1.jpg' alt='' />
            <div className='smalluser'>
                <span className='smallusername'>John Doe</span>
                <span className='smallusertitle'>Engineer</span>
            </div>
            <button className='smallbutton'>
                <MdVisibility className='smallicon'/>
                Display
            </button>
        </li>
        <li className='smalllistitem'>
            <img className="image" src='../../images/toyface2.jpg' alt='' />
            <div className='smalluser'>
                <span className='smallusername'>John Doe</span>
                <span className='smallusertitle'>Engineer</span>
            </div>
            <button className='smallbutton'>
                <MdVisibility className='smallicon'/>
                Display
            </button>
        </li>
        <li className='smalllistitem'>
            <img className="image" src='../../images/toyface1.jpg' alt='' />
            <div className='smalluser'>
                <span className='smallusername'>John Doe</span>
                <span className='smallusertitle'>Engineer</span>
            </div>
            <button className='smallbutton'>
                <MdVisibility className='smallicon'/>
                Display
            </button>
        </li>
        <li className='smalllistitem'>
            <img className="image" src='../../images/toyface4.jpg' alt='' />
            <div className='smalluser'>
                <span className='smallusername'>John Doe</span>
                <span className='smallusertitle'>Engineer</span>
            </div>
            <button className='smallbutton'>
                <MdVisibility className='smallicon'/>
                Display
            </button>
        </li>
        <li className='smalllistitem'>
            <img className="image" src='../../images/toyface5.jpg' alt='' />
            <div className='smalluser'>
                <span className='smallusername'>John Doe</span>
                <span className='smallusertitle'>Engineer</span>
            </div>
            <button className='smallbutton'>
                <MdVisibility className='smallicon'/>
                Display
            </button>
        </li>
    </ul>
  </div>
  );
}
