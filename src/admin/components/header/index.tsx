import { useState } from "react";
import { ArrowDown, User } from "lucide-react";
import Logo from "../../assets/logo.png";

export default function HeaderAdmin() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const closeDropdown = () => {
    setDropdownOpen(false);
  };

  const handleArrowDownClick = () => {
    toggleDropdown();
  };

  return (
    <header className="flex items-center justify-between w-full h-20 p-8 mb-4 ">
      <div>
        <img src={Logo} alt="Logo Fun Code" className="w-16" />
      </div>

      <div
        className="relative"
        onBlur={closeDropdown} 
      >
        <div
          className="w-20 h-12 bg-zinc-300 rounded-full flex items-center cursor-pointer"
          onClick={handleArrowDownClick}
          tabIndex={0}
        >
          <div className="w-12 h-12 bg-zinc-100 rounded-full flex items-center justify-center">
            <User className="text-roxo" />
          </div>
          <ArrowDown className="text-roxo" />
        </div>

        {dropdownOpen && (
          <div className="absolute top-14 right-0 bg-white p-2 shadow-md rounded-md">
            <ul>
              <li>
                
                <button className="hover:text-roxo p-2">Sair</button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}
