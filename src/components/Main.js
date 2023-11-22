import { Routes as Switch,Route} from 'react-router-dom';

import Home from './Home'
import Header from './Header'
import Footer from './Footer';
import About from './About';
import CourseDetail from './CourseDetail';
import ProfessorDetail from './ProfessorDetail';
import CategoryCourseList from './CategoryCourseList';
import Faq from './Faq';

import StudentRegister from '../student/StudentRegister';
import StudentLogin from '../student/StudentLogin';
import StudentDashboard from '../student/StudentDashboard';
import StudentMyCourses from '../student/StudentMyCourses';
import StudentProfile from '../student/StudentProfile';
import StudentChangePassword from '../student/StudentChangePassword';
import StudentLogout from '../student/StudentLogout';

import ProfessorLogin from '../professor/ProfessorLogin';
import ProfessorLogout from '../professor/ProfessorLogout';
import ProfessorRegister from '../professor/ProfessorRegister';
import ProfessorDashboard from '../professor/ProfessorDashboard';
import ProfessorProfile from '../professor/ProfessorProfile';
import ProfessorMyCourses from '../professor/ProfessorMyCourses';
import ProfessorChangePassword from '../professor/ProfessorChangePassword';
import ProfessorAddCourse from '../professor/ProfessorAddCourse';
import ProfessorUpdateCourse from '../professor/ProfessorUpdateCourse';
import Users from '../professor/Users';
import ProfessorMyQuizes from '../professor/ProfessorMyQuizes';
import ProfessorAddQuiz from '../professor/ProfessorAddQuiz';
import ProfessorUpdateQuiz from '../professor/ProfessorUpdateQuiz';
import ProfessorManageCategory from '../professor/ProfessorManageCategory';






function Main() {
  return (
    <div className="App">
      <Header />   
      <Switch>
        
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/course-detail/:course_id' element={<CourseDetail/>} />
        <Route path='/professor-detail/:professor_id' element={<ProfessorDetail/>} />
        <Route path='/category-course-list' element={<CategoryCourseList/>} />
        <Route path='/faq' element={<Faq/>} />


        <Route path='/student-login' element={<StudentLogin/>} />
        <Route path='/student-logout' element={<StudentLogout/>} />
        <Route path='/student-register' element={<StudentRegister/>} />
        <Route path='/student-dashboard' element={<StudentDashboard/>} />
        <Route path='/student-my-courses' element={<StudentMyCourses/>} />
        <Route path='/student-profile' element={<StudentProfile/>} />
        <Route path='/student-change-password' element={<StudentChangePassword/>} />


        <Route path='/professor-login' element={<ProfessorLogin/>} />
        <Route path='/professor-logout' element={<ProfessorLogout/>} />
        <Route path='/professor-register' element={<ProfessorRegister/>} />
        <Route path='/professor-dashboard' element={<ProfessorDashboard/>} />
        <Route path='/professor-profile' element={<ProfessorProfile/>} />
        <Route path='/professor-my-courses' element={<ProfessorMyCourses/>} />
        <Route path='/professor-change-password' element={<ProfessorChangePassword/>} />
        <Route path='/professor-add-course' element={<ProfessorAddCourse/>} />
        <Route path='/professor-update-course' element={<ProfessorUpdateCourse/>} />
        <Route path='/professor-quiz-list' element={<ProfessorMyQuizes/>} />
        <Route path='/professor-add-quiz' element={<ProfessorAddQuiz/>} />
        <Route path='/professor-update-quiz' element={<ProfessorUpdateQuiz/>} />
        <Route path='/professor-add-category' element={<ProfessorManageCategory/>} />
        <Route path='/users' element={<Users/>} />
       
      </Switch>  
      <Footer />
      
      
    </div>
  );
}

export default Main;
