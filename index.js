/*
const colors = {
    'red': '#ff00ff00',
    'green': '#00ff00',
    'blue': '#0000ff'
}

console.log(colors['green'])
*************************************************************************
const students = {
    "Amit": 123,
    "shital": 456,
    "shweta": 789,
    "shanak": 231
}
console.log(students['Amit'])

**********************************************************************
const student = {
    name: 'john',
    age: 25,
    isActive: true,
    courses: ['html', 'c', 'cpp', 'js']
}

console.log(student['courses'][0])

const studentCourses = student["courses"]
studentCourses.push("icp")

console.log(studentCourses)
***********************************************************************
const students = [
{
    name: "shweta",
    age: 20,
    courses: ["React", "node", "MongoDB"]
}, 
{
    name: "datta",
    age: 21,
    courses: ["c", "cpp", "java"]
}, 
{
    name: "shital",
    age: 19,
    courses: ["python", "c#", "php"]
}]


students.forEach((student)=>{
    console.log(`Hello ${student['name']}, ${student['age']}`)
})
**********************************************************************

*/
const courses = [ 
    {
    title: 'javascript',
    price: 1000,
    instructor: "suraj",
    duration: "2 Months",
    timing: "7 pm",
    isStarted: true
} ,
{
    title: 'React',
    price: 200,
    instructor: "Anand",
    duration: "2 Months",
    timing: "8 pm",
    isStarted: false
} ,
{
    title: 'MonogoDB',
    price: 300,
    instructor: "Yash",
    duration: "2 Months",
    timing: "9 pm",
    isStarted: false
} 
]

let highestPrice = -1;
courses.map((course)=>{
   if(course['price'] > highestPrice)
   {
    highestPrice = course['price'];
    courseName = course['title'];
   }
})


console.log(courseName)
console.log(highestPrice);
