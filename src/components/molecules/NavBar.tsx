import styled from '@emotion/styled'
import { NavLink } from 'react-router-dom'

const SNav = styled.nav`
  ul {
    list-style: none;
    width: 300px;
    display: flex;
    justify-content: space-between;
    & > li > a {
      text-decoration: none;
      color: #000;
    }
  }
`

export const NavBar = () => {
  return (
    <SNav>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/products">Products</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact Us</NavLink>
        </li>
        <li>
          <NavLink to="/users">Users</NavLink>
        </li>
      </ul>
    </SNav>
  )
}
