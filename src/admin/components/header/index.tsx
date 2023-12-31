import { ArrowDown, User } from "lucide-react";
import Logo from "../../../assets/logo.png";
import { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@material-tailwind/react";

export default function StudentsHeader() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const closeDropdown = () => {
    setDropdownOpen(false);
  };

  const handleArrowDownClick = () => {
    toggleDropdown();
  };


  const handleLogout = (e) => {
    e.preventDefault();
    navigate("/");
  };

  const handleClickInside = (e) => {
    if (dropdownRef.current.contains(e.target)) {
      return;
    }

    closeDropdown();
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickInside);
    return () => {
      document.removeEventListener("mousedown", handleClickInside);
    };
  }, []);

  return (
    <header className="flex items-center justify-between w-full h-20 p-8 mb-4 ">
      <div>
        <Link to="/students">
          <img src={Logo} alt="Logo Fun Code" className="w-16" />
        </Link>
      </div>

      <div className="relative " ref={dropdownRef}>
        <div
          className="w-20 h-12 bg-zinc-200 rounded-full flex items-center cursor-pointer relative shadow-md"
          onClick={handleArrowDownClick}
          tabIndex={0}
        >
          <div className="w-12 h-12 bg-zinc-300 rounded-full flex items-center justify-center">
            <User className="text-roxo" />
          </div>
          <ArrowDown
            className={`text-roxo-light duration-300 transition-transform ${
              dropdownOpen ? "rotate-180 duration-300" : ""
            }`}
          />
        </div>

        {dropdownOpen && (
          <div className="absolute top-14 right-0 bg-zinc-400 p-2 shadow-md rounded-md flex flex-col justify-center items-center">
            
            <div>
              <Button
                onClick={handleLogout}
                variant="text"
                className="hover:text-roxo text-white duration-150 p-2"
              >
                Logout
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
