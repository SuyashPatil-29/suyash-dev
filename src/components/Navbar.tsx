import MobileNavbar from "./MobileNavbar";
import NavItem from "./NavItem";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <div className="flex items-center justify-between mt-8 mx-auto w-full max-w-screen-xl px-4 md:px-20 md:mb-20 mb-14">
      <div>
        <NavItem href="/" className=" text-3xl text-white font-bold">
          Suyash Patil
        </NavItem>
      </div>
      <div className="md:flex hidden items-center justify-between gap-6">
        <NavItem href="/archive" linkto="/archive">Archive</NavItem>
        <NavItem href="/projects" linkto="/projects" >Projects</NavItem>
        <NavItem href="/achievements" linkto="/achievements">Achievements</NavItem>
      </div>
      <MobileNavbar />
    </div>
  );
};

export default Navbar;
