import './App.css'
import Greet from './greet'
import GreetTwo  from './greetTwo'
import ShowCourse from './showCourse' 
const  App=()=> {
 const courseInfo=[
  {course:'software development', instructor:'oni usman', description: 'how to build website'},
{course:'software development', instructor:'oni usman',description:'how to build website'},
  { course:'data management',instructor:'sodiq' ,description:'how data was been manage'}
  
 ];

  return (
    //react fragment
    <> 
      {courseInfo.map((course)=>(
        <ShowCourse course={course.course} instructor={course.instructor} description={course.description}/>
      ))}
       <h1>my fellow agbero</h1>
     <Greet name="bisola" mornringOrAternoon='morning' time = "10:05am">
      <p>how are you doing today</p>
      </Greet>
    {/*
    <Greet name="ayoola" mornringOrAternoon='afternoon' time="12:00 pm"/>
     <Greet name="adeola" mornringOrAternoon='afternoon' time="1 : 00 pm"/>
     <Greet name="biola" mornringOrAternoon='morning' time="7am"/>
      */} 
      <GreetTwo/>

    </>
  )
}

export default App;
