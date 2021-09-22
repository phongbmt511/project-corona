import React from 'react'
import "./LiveCase.css"

export const LiveCase = ({ getsummary }) => {

  console.log("sumary", getsummary)
  return (
    <div className="LiveCase-container">
      <h3>Live Cases by Country</h3>
      <div className="Container_case">
        <table >
          <tbody>
          
            {getsummary.map((item, index) => {
              getsummary.sort((a,b) => b.TotalConfirmed - a.TotalConfirmed);
              const { Country, TotalConfirmed } = item;
             
              return (
                <tr key={index}>
                  <td>{Country}</td>
                  <td>{TotalConfirmed}</td>
                </tr>
              );

            })}
          </tbody>
        </table >

      </div>
    </div>
  )
}
