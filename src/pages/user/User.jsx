import { MdCalendarToday, MdLocationSearching, MdMail, MdPermIdentity, MdPhoneAndroid, MdPublish } from 'react-icons/md';
import React from './user.css';
import { Link } from 'react-router-dom';

export default function User() {
  return (
  <div className='user'>
        <div className='userTitleContainer'>
            <h1 className=''>Edit User</h1>
            <Link to={"/newUser" }>
                <button className='userAddButton'>Create</button>
            </Link>
        </div>
        <div className='userContainer'>
            <div className='userShow'>
              <div className='userShowTop'>
                <img className ="usershowimg" src='../../images/toyface5.jpg' alt='' />
                <div className='userShowTopTitle'>
                    <span className='userShowUsername'>Jon Snow</span>
                    <span className='userShowUserTitle'>Software Engineer</span>
                </div>
              </div>    

              <div className='userShowBottom'>
                  <span className='userShowTitle'>Account Details</span>
                  <span className='userSowInfo'>
                      <MdPermIdentity className='userShowIcon'/>
                      <span className='userShowInfoTitle'>Jonsnow99</span>
                  </span>
                  <span className='userSowInfo'>
                      <MdCalendarToday className='userShowIcon'/>
                      <span className='userShowInfoTitle'>10.12.1999</span>
                  </span>
                  <span className='userSowInfo'>
                      <MdPhoneAndroid className='userShowIcon'/>
                      <span className='userShowInfoTitle'>123 456 789</span>
                  </span>
                  <span className='userShowTitle'>Contact Details</span>
                  <span className='userSowInfo'>
                      <MdMail className='userShowIcon'/>
                      <span className='userShowInfoTitle'>josn@gmail.com</span>
                  </span>
                  <span className='userSowInfo'>
                      <MdLocationSearching className='userShowIcon'/>
                      <span className='userShowInfoTitle'>Abuja, Nigeria</span>
                  </span>
              </div>       
            </div>

            <div className='userUpdate'>
              <span className='userUpdateTitle'>Edit</span>
              <form className='userUpdateForm'>
                
                <div className='userUpdateLeft'>
                      <div className='userupdateitem'>
                        <label>UserName</label>
                        <input className="userUpdateInput" type="text" placeholder="jonsnow99" />
                      </div>
                  </div>

                  <div className='userUpdateLeft'>
                      <div className='userupdateitem'>
                        <label>Full Name</label>
                        <input className="userUpdateInput" type="text" placeholder="Jon Snow" />
                      </div>
                  </div>

                  <div className='userUpdateLeft'>
                      <div className='userupdateitem'>
                        <label>Email</label>
                        <input className="userUpdateInput" type="email" placeholder="josn@gmail.com" />
                      </div>
                  </div>

                  <div className='userUpdateLeft'>
                      <div className='userupdateitem'>
                        <label>Phone</label>
                        <input className="userUpdateInput" type="text" placeholder="123 456 789" />
                      </div>
                  </div>

                  <div className='userUpdateLeft'>
                      <div className='userupdateitem'>
                        <label>Adress</label>
                        <input className="userUpdateInput" type="text" placeholder="Abuja, Nigeria" />
                      </div>
                </div>

                <div className='userUpdateRight'>
                    <div className='userUpdateUpload'>
                        <img className='userUpdateImg' src="../../../images/toyface5.jpg" alt=''/>
                        <label htmlFor='file'> <MdPublish className='userUpdateIcon' /> </label>
                        <input type="file" id='file' style={{display: "none" }} />
                    </div>
                    <button className='userUpdateButton'>Update</button>
                </div>

              </form>
            </div>
        </div>
  </div>
  );
}
