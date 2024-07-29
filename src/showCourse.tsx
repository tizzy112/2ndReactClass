interface ShowCourseProps {
    course: string;
    instructor : string;
    description : string;
}
const ShowCourse = (props:ShowCourseProps) =>{
    console.log(props)
    return(
    <>
    <div>Course name:{props.course}</div>
    <div>Course instructor:{props.instructor}</div>
    <div>Course description:{props.description}</div>


    </> )
}

export default ShowCourse;