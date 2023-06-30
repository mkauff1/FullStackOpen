const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14
  const Content = () => {
    return (
      <div>
        <Part name={part1 + " " + exercises1}/>
        <Part name={part2 + " " + exercises2}/>
        <Part name={part3 + " " + exercises3}/>
      </div>
    )
  }

  return (
    <div>
      <Header course={course}/>
      <Content/>
      {/* <Content name={part2 + " " + exercises2}/>
      <Content name={part3 + " " + exercises3}/> */}
      <Total sum={exercises1 + exercises2 + exercises3}/>
    </div>
  )
}

export default App

function Header(props) {
  return (
    <h1>{props.course}</h1>
  );
}



function Part(props) {
  return (
    <p>{props.name}</p>
  );
}

function Total(props) {
  return (
    <p>TOTAL {props.sum}</p>
  );
}