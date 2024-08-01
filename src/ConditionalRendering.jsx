import React from 'react'

const students = []

let ConditionalRendering = () => {
  return (
    <>
    <h2>Conditional rendering</h2> <hr />
    
    <p>
        {students.length && 'student found'}
    </p>
    <p>number of student: {students.length} </p>
    </>
  )
}

export default ConditionalRendering;
