function ProfessorLogout (){
    localStorage.removeItem('professorLoginStatus')
    window.location.href='/professor-login';
    
    return(
        
        <div></div>
    );

}

export default ProfessorLogout;