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

function handeChange(){
    let course = document.getElementById('course');
    let phoneNum = document.getElementById('phoneNum')
    if(course.value == ''){
        alert('Please Select Course first');
        course.style.borderBottom = '1px solid red'
        return false;
    }
}



let headings = document.querySelectorAll('.animate-heading');
let animateBox = document.querySelectorAll('.animat-box')

const observer = new IntersectionObserver((enteries)=>{
    enteries.forEach(heading=>{
    //    heading.target.classList.toggle('animate__fadeInUp',heading.isIntersecting)
    if(heading.isIntersecting == true){
        heading.target.classList.add('animate__fadeInUp')
    }
    })

    enteries.forEach(box=>{
        if(box.isIntersecting == true){
            box.target.classList.add('animate__fadeInUp')
        }
    })
    

},{
    threshold: 0.5
})


headings.forEach(item=>{
    observer.observe(item)
})

animateBox.forEach(box=>{
    observer.observe(box)
})