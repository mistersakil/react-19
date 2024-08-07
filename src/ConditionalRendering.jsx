import React from 'react'

const students = []

let ConditionalRendering = () => {
  return (
    <>
    <h2>Conditional rendering</h2> <hr />
    <p> if condition returns  zero '0' and empty string '' , it throws an exception and return 0, '' as an output. see example below...</p>
    <p>
        condition 1: {students.length  && 'student found'}
        <br />
        condition 2 (solution): {students.length !=0 && 'student found'}
        { null && 'students found'}
    </p>
    <p>number of student: {students.length} </p>
    </>
  )
}

export default ConditionalRendering;
