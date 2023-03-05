import React from 'react'

function Display({value,result}) {
  return (
    <div style={{display:"flex",flexDirection:"column",alignItems:"flex-end",justifyContent:"center",border:"solid 1px ",height:"80px",width:"320px",fontSize:"1.4rem",fontWeight:"bold",backgroundColor:"black",color:"whitesmoke"}}>
        <p>{value}</p>
        <p>{result}</p>
    </div>
  )
}

export default Display