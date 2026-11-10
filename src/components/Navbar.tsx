import {items} from '../data/navItems'
 
const Navbar = () => {
    return (
        <nav className="pt-8 sticky top-0">
            <ul className="flex justify-around font-jomhuria text-5xl">
                {items.map( (item : string) => <li key={item}>{item}</li>)}
            </ul>
        </nav>
    )
} 

export default Navbar;