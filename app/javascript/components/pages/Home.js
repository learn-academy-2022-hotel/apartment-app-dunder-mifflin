import React from "react"
import { useNavigate, NavItem, Nav } from "react-router-dom"

const Home = ({ devProps }) => {
  console.log("logged_in:", devProps.logged_in)
  console.log("current_user:", devProps.current_user)
  console.log("new_user_route:", devProps.new_user_route)
  console.log("sign_in_route:", devProps.sign_in_route)
  console.log("sign_out_route:", devProps.sign_out_route)
  const navigate = useNavigate ()
  const viewAlllistings =() => {
    navigate ("/apartmentindex")
  }
  const viewMylistings = () => {
    navigate ("/")
  }

  if (devProps.logged_in) {
    return (
      <> 
        
        <h3>{`Welcome, ${ devProps.current_user.id }!`}</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non accumsan cursus tristique parturient faucibus cras non amet lectus. Placerat netus viverra tincidunt sed enim varius volutpat sed. Commodo arcu mauris nisl malesuada tincidunt enim. Amet, mauris scelerisque morbi penatibus sodales scelerisque sed. Adipiscing purus aliquam dui mi, sit dui lorem sit mattis. Consequat nunc congue arcu tempor ut iaculis risus nunc consectetur.
        </p>
      
        <button onClick={viewMylistings}>My Listings</button>
        <button onClick ={viewAlllistings}>View Listings</button>
      </>
    )

  }
   if (!devProps.logged_in) {
    return (
      <>
        <h3>{`Welcome, Guest!`}</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non accumsan cursus tristique parturient faucibus cras non amet lectus. Placerat netus viverra tincidunt sed enim varius volutpat sed. Commodo arcu mauris nisl malesuada tincidunt enim. Amet, mauris scelerisque morbi penatibus sodales scelerisque sed. Adipiscing purus aliquam dui mi, sit dui lorem sit mattis. Consequat nunc congue arcu tempor ut iaculis risus nunc consectetur.
        </p>

      </>
    )
   }

   }


export default Home
