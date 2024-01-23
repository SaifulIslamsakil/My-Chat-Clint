
import { BiMessageRoundedDots } from "react-icons/bi";
const NavBar = () => {
    const manu = <>
    <li>Features</li>
    <li>Privacy</li>
    <li>Help Center</li>
    <li>Blog</li>
    <li>For Business</li>
    <li>MyChat Web</li>
    <li>Register</li>
    </>
    return (
        <div className="navbar bg-blue-900 text-blue-50 p-5">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {manu}
                    </ul>
                </div>
                <div className=" flex items-centers gap-1">
                    <span className=" text-5xl"><BiMessageRoundedDots /></span>
                    <p className=" text-3xl font-semibold">MyChat</p>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 space-x-8 text-lg">
                    {manu}
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn">Download</a>
            </div>
        </div>
    );
};

export default NavBar;