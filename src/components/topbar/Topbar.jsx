import React from 'react'
import './topbar.css'
import { MdNotificationsNone, MdSettings } from 'react-icons/md';




const style = { color: "whitesmoke", fontSize: "30px" }



export default function Topbar() {
    return (
        <div className='topbar'>
            <div className='topbarwrapper'>
                    <div className='left'>
                        <span className="logo1">GRAN<span className="logo2">VALOR</span></span>
                    </div>
                    
                    <div className='right'>
                    <img src="../images/toyface2.jpg" className='profileAvatar'/>
                        <div className='topiconcontainer'>
                                <MdSettings style={style} />
                                
                        </div>
                        <div className='topiconcontainer'>
                                <MdNotificationsNone style={style} />
                                <span className='topiconbadge'>2</span>
                        </div>
                        
                    </div>
            </div>  
        </div>
    )
}
