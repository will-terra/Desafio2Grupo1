import { Link } from "react-router-dom"

export default function HeaderLoginSignin(){
  return (
    <header className="">
      <img className="w-[202px] h-[140px] ml-6 py-4" src="plantPeace.svg" alt="" />
      <nav className="text-lunar flex flex-row py-2 justify-around">
        <Link className="hover:text-abacate" to="login">Login</Link>
        <Link className="hover:text-abacate" to="signin">Sign in</Link>
        <Link className="hover:text-abacate" to="/">Home</Link>
      </nav>
    </header>
  );
}