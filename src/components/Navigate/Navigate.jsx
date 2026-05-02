import authNav from "../../data/authNav.json"
import mainNav from "../../data/mainNav.json"
import { NavLink } from "react-router-dom"

export const Navigate = () => {
    return <>
        <nav> <ul>
            {
                mainNav.map(({ id, title, href }) => <li key={id}> <NavLink to={href}> {title} </NavLink> </li>)
            }
            {
                authNav.map(({ id, title, href }) => <li key={id}> <NavLink to={href}> {title} </NavLink> </li>)
            }
        </ul>
        </nav>
        <button type="button">logout</button>
    </>

}