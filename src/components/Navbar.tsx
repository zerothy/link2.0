import NavbarButton from "./NavbarButton";
import Logo from "./Logo";

export default function Navbar() {
    return (
        <div className="w-1/5 h-svh border-solid border-r-4 border-slate-300 font-montserrat font-bold">
            <Logo />
            <NavbarButton />
        </div>
    );
}