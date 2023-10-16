import { Link } from "react-router-dom";
import Logo from "../../assets/logo.png"

export default function Header(){
    return(
        <div className="flex justify-between items-center p-8">
            <div>
                <img src={Logo} alt="Logo FunCode" />
            </div>
            <div className="flex text-white">
                <ul className="flex gap-12 items-center">
                    <li className="hover:font-bold duration-150 cursor-pointer"><Link to="/"/>Home</li>
                    <li className="hover:font-bold duration-150 cursor-pointer"><Link to="/about"/>Sobre nós</li>                    
                    <li className="font-bold hover:bg-limeyellow hover:text-roxo duration-150 cursor-pointer uppercase border border-limeyellow p-2 rounded-full"><Link to="/signIn"/>Cadastrar</li>
                    <li className="font-bold hover:bg-limeyellow hover:text-roxo duration-150 cursor-pointer uppercase border border-limeyellow p-2 rounded-full"><Link to="/signIn"/>Entrar</li>
                </ul>                
            </div>
        </div>
    )
}