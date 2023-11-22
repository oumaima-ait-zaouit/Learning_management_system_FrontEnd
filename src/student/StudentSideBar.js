import { Link } from "react-router-dom";

function StudentSideBar() {
    return (
        <div className="card">
            <h5 className="card-header">Dahboard</h5>
            <div class="list-group">
                <Link to="/student-my-courses" class="list-group-item list-group-item-action">My Courses</Link>
                <Link to="/student-profile" class="list-group-item list-group-item-action">Profile</Link>
                <Link to="/student-change-password" class="list-group-item list-group-item-action">Change password</Link>
                <Link to="/student-logout" class="list-group-item list-group-item-action">Log Out</Link>
                            
            </div>

        </div>
        
    );

}

export default StudentSideBar;