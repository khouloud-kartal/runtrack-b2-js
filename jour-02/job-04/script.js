
const form = document.getElementById('form-add-student');

const myRegisterStudent = async (form)=>{

    // const email = document.getElementById('student-email').value;
    // const fullName = document.getElementById('student-fullname').value;
    // const gender = document.getElementById('student-gender').value;
    // const grade = document.getElementById('student-grade').value;
    // const date = document.getElementById('student-birthdate').value;

    const formData = new FormData(form);

    // formData.append('email', email);
    // formData.append('fullname', fullName);
    // formData.append('gender', gender);
    // formData.append('grade', grade);
    // formData.append('date', date);

    const data = await fetch('request.php',{
        method: "POST",
        body: formData,
    });
    const response = await data.json();
    console.log(response);
}

form.addEventListener('submit',(e) => {
    e.preventDefault();
    myRegisterStudent(form);
});