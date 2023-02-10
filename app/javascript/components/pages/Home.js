import React from "react"
import { useNavigate, NavItem, Nav } from "react-router-dom"

const Home = ({ current_user, logged_in }) => {
  if (logged_in) {
    return (
      <>
        <h3>{`Welcome, ${current_user.email}!`}</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non accumsan cursus tristique parturient faucibus cras non amet lectus. Placerat netus viverra tincidunt sed enim varius volutpat sed. Commodo arcu mauris nisl malesuada tincidunt enim. Amet, mauris scelerisque morbi penatibus sodales scelerisque sed. Adipiscing purus aliquam dui mi, sit dui lorem sit mattis. Consequat nunc congue arcu tempor ut iaculis risus nunc consectetur.
        </p>
      </>
    )
  }
  if (!logged_in) {
    return (
      <>
        <h3>{"Welcome, Guest!"}</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non accumsan cursus tristique parturient faucibus cras non amet lectus. Placerat netus viverra tincidunt sed enim varius volutpat sed. Commodo arcu mauris nisl malesuada tincidunt enim. Amet, mauris scelerisque morbi penatibus sodales scelerisque sed. Adipiscing purus aliquam dui mi, sit dui lorem sit mattis. Consequat nunc congue arcu tempor ut iaculis risus nunc consectetur.
        </p>
      </>
    )
  }
}

export default Home
