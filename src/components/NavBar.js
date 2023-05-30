import { Link, useMatch, useResolvedPath } from "react-router-dom"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import HomeIcon from '@mui/icons-material/Home';
import "./style.css";

export default function Navbar() {
    return (
        <nav className="nav">
            <ul className='items'>
                <HomeIcon fontSize="medium"/> <CustomLink to="/" className='CustomLink'>Home</CustomLink>
                <ShoppingCartIcon fontSize="medium"/> <CustomLink to="/myshopping" className='CustomLink'>My Shopping</CustomLink>
            </ul>
            <Link to="/" className="site-title">VMS</Link>
        </nav>
    )
}

export function CustomLink({ to, children, ...props }) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true })

    return (
        <li style={{ listStyleType: "none" }} className={isActive ? "active" : ""}>
            <Link to={to} {...props} style={{ background: isActive ? 'deepskyblue' : 'dodgerblue', color: 'black', borderRadius: '5px', outline: 'none' }}>
                {children}
            </Link>
        </li>
    )
}