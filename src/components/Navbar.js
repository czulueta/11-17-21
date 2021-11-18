import React from "react" 
import { Link } from "react-router-dom"

export default function Navbar(){
  return(
    <div>
      <Link>Profile</Link>
      <Link>Public</Link>
      <button>Logout</button>
    </div>
  )
}