import { Link } from "react-router-dom";
import Logo from "../../assets/logo.png";

export default function Header() {
  return (
    <div className="flex justify-between items-center p-8">
      <div>
        <Link to="/">
            <img src={Logo} alt="Logo FunCode" />
        </Link>
      </div>
      <div className="flex text-white">
        <ul className="flex gap-4 items-center">
          <li className="hover:font-bold duration-150 cursor-pointer">
            <a href="#about">Sobre nós</a></li>
          <li className="font-bold hover:bg-limeyellow hover:text-roxo duration-150 cursor-pointer uppercase border border-limeyellow p-2 rounded-full">
            <Link to="/signup">Cadastrar</Link></li>
          <li className="font-bold hover:bg-limeyellow hover:text-roxo duration-150 cursor-pointer uppercase border border-limeyellow p-2 rounded-full">
            <Link to="../students">Entrar</Link></li>
        </ul>
      </div>
    </div>
  );
}
