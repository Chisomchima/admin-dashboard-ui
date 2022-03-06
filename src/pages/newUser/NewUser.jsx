import './newuser.css';

export default function NewUser() {
  return (
        <div className='newUser'>
            <h1 className='newUserTitle'>New User</h1>
            <form className='newUserForm'>
                <div className='newUserItem'>
                    <label>Username</label>
                    <input type="text" placeholder="John"/>
                </div>
                <div className='newUserItem'>
                    <label>Full Name</label>
                    <input type="text" placeholder="John Smith"/>
                </div>
                <div className='newUserItem'>
                    <label>Email</label>
                    <input type="email" placeholder="JohnS@gmail.com"/>
                </div>
                <div className='newUserItem'>
                    <label>Password</label>
                    <input type="password" placeholder="password"/>
                </div>
                <div className='newUserItem'>
                    <label>phoneNumber</label>
                    <input type="text" placeholder="+123 456 789"/>
                </div>
                <div className='newUserItem'>
                    <label>Address</label>
                    <input type="text" placeholder="Abuja Nigeria"/>
                </div>
                <div className='newUserItem'>
                    <label >Gender</label>
                    <div className='newUserGender'>
                        <input type="radio" id='male' value="male"/>
                        <label for="male">Male</label>
                        <input type="radio" id='female' value="female"/>
                        <label for="female">Female</label>
                        <input type="radio" id='other' value="other"/>
                        <label for="others">Other</label>
                    </div>
                </div>
                <div className='newUserItem'>
                    <label>Active</label>
                    <select className='newUserSelect' name="active" id="active">
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                </div>
            </form>
            <button className='newUserButton'>Create</button>
        </div>
        );
}
