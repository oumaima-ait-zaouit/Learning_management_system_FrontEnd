import { Link } from "react-router-dom";

function ProfessorSideBar() {
    return (
        <div className="card">
            <h5 className="card-header">Dashboard</h5>
            <div class="list-group">
                <Link to="/professor-my-courses" class="list-group-item list-group-item-action">My Courses</Link>
                <Link to="/professor-quiz-list" class="list-group-item list-group-item-action">Quizes List</Link>
                <Link to="/users" class="list-group-item list-group-item-action">Users</Link> 
                <Link to="/professor-add-course" class="list-group-item list-group-item-action">Add Course</Link>                                      
                <Link to="/professor-add-quiz" class="list-group-item list-group-item-action">Add Quiz</Link>  
                <Link to="/professor-add-category" class="list-group-item list-group-item-action">Add Category</Link> 
                <Link to="/professor-profile" class="list-group-item list-group-item-action">Profile</Link>
                <Link to="/professor-change-password" class="list-group-item list-group-item-action">Change password</Link>
                <Link to="/professor-logout" class="list-group-item list-group-item-action">Log Out</Link>
                            
            </div>

        </div>
        
    );

}

export default ProfessorSideBar;