const course = {
    coursename : "js",
    price: "999",
    courseInstructor: "name"
}

console.log(course.courseInstructor)

const {courseInstructor} = course;          //destructuring

const {courseInstructor : instructor} = course;         //aliasing

console.log(instructor)

console.log(courseInstructor)

// The code is extracting the courseInstructor property from the course object. After this line of code is executed, there will be a new constant variable called courseInstructor that holds the value of the courseInstructor property from the course object.