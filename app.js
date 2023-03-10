let teachers = document.getElementById('teachers');
let students = document.getElementById('students');
let classRooms = document.getElementById('classRooms');
let awards = document.getElementById('awards');
let interval;
let teacher = 0;
let student = 0;

function teacherCount(){
   teacher++;
   teachers.innerHTML = teacher;
   if(teacher === 200){
    clearInterval(interval);
    teachers.innerHTML = '20';
    
    
}

}

function studentCount(){
    student++;
    students.innerHTML = student;
    if(student == 200){
        clearInterval(interval)
    }
}



// interval = setInterval(teacherCount,5);

// interval = setInterval(studentCount,5)

