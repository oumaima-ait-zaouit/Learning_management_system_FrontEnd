import { Link } from "react-router-dom";

import ProfessorSideBar from "./ProfessorSideBar";


function ProfessorDashboard() {
    return (
        <div className="container mt-4">       
            <div className="row">
                <aside className="col-md-3">
                <ProfessorSideBar />
                    

                </aside>

                <section className="col-md-9">
                    
                </section>
            

               
                
            </div>
        </div>
            

        
    )

}

export default ProfessorDashboard;