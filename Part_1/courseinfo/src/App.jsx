
const Header = (props) =>  {
  console.log("HEADER: ", props.course)
  return (
    <h1>
      {props.course}
    </h1>
  )
}

const Content  = (props) =>  {
  return (
    <div>
      <Part part ={props.part[0]}/>
      <Part part ={props.part[1]}/>
      <Part part ={props.part[2]}/>
    </div>
  )
}

const Part = (props) =>  {
  return (
    <p>
      {props.part.name} {props.part.exercises} 
    </p>
  )
}

const Total  = (props) =>  {
  let sum = Number(props.part[0].exercises) + Number(props.part[1].exercises) + Number(props.part[2].exercises)
  return (
  <p>Number of exercises {sum}</p>
  )
}

const App = () => {
  
  const course =  {
    name : 'Half Stack application development',
    parts: [
      {
      name :  'Fundamentals of React',
      exercises : 10
    },
    {
      name : 'Using props to pass data',
      exercises : 7
    },
    {
      name : 'State of a component',
      exercises : 14
    }
  ]
  }
  console.log(course.parts[0].name)
  return (
    <div> 
      <Header course = {course.name}/>
      <Content part = {course.parts}/>
      <Total part = {course.parts}/>
    </div>
    
  )
}

export default App