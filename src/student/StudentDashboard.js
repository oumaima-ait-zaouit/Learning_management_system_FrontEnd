import { Link } from "react-router-dom";
import StudentSideBar from "./StudentSideBar";


function StudentDashboard() {
    return (
        <div className="container mt-4">       
            <div className="row">
                <aside className="col-md-3">
                <StudentSideBar />
                    

                </aside>

                
            

               
                
            </div>
        </div>
            

        
    )

}

export default StudentDashboard;