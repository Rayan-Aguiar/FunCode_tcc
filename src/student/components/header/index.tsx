import { ArrowDown, UserCircle } from "lucide-react";
import { Link } from "react-router-dom";
import Logo from "../../../assets/logo.png";

export default function StudentsHeader() {
  return (
    <div className="flex items-center justify-between">
        <Link to="/students">
            <img src={Logo} alt="Logo funcode" />
        </Link> 
      <div className="flex items-center gap-4">
        <Link to="/students/suport" className="text-white">
          Duvidas?
        </Link>
        <div>
          <div className="rounded-full w-36 h-20 bg-roxo-escuro flex items-center p-2 justify-between">
            <div className="rounded-full bg-roxo h-full w-full flex items-center justify-center">
              <UserCircle className="text-limeyellow w-full" />
            </div>
            <ArrowDown className="text-roxo" />
          </div>
        </div>
      </div>
    </div>
  );
}
