import { ArrowDown, User } from "lucide-react";
import Logo from "../../assets/logo.png";

export default function HeaderAdmin() {
  return (
    <header className="flex items-center justify-between w-full h-20 p-8 mb-4 ">
      <div>
        <img src={Logo} alt="Logo Fun Code" className="w-16" />
      </div>

      <div className="w-20 h-12 bg-zinc-300 rounded-full flex items-center">
        <div className="w-12 h-12 bg-zinc-100 rounded-full flex items-center justify-center">
          <User className="text-roxo" />
        </div>
        <ArrowDown className="text-roxo" />
      </div>
    </header>
  );
}
