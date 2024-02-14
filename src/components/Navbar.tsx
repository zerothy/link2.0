import NavbarButton from "./NavbarButton";
import Logo from "./Logo";

export default function Navbar() {
    return (
        <div className="w-1/5 min-w-max h-svh border-solid border-r-2 border-slate-100 font-montserrat font-bold z-10">
            <Logo />
            <NavbarButton />
        </div>
    );
}