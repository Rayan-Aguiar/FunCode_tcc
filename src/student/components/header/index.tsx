import { ArrowDown, User } from "lucide-react";
import Logo from "../../../assets/logo.png";
import { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button, Typography } from "@material-tailwind/react";

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

  const handlePerfilClick = () => {
    closeDropdown();
  };

  const handleLogout = (e) => {
    e.preventDefault();
    localStorage.removeItem("token");
    navigate("/signin");
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

      <div className="relative flex items-center gap-4" ref={dropdownRef}>
        <Link to="/students/suport">
          <Typography variant="text" color="white" className="hover:text-limeyellow duration-150">Duvidas?</Typography>
        </Link>
        <div
          className="w-20 h-12 bg-roxo-escuro rounded-full flex items-center cursor-pointer relative"
          onClick={handleArrowDownClick}
          tabIndex={0}
        >
          <div className="w-12 h-12 bg-roxo rounded-full flex items-center justify-center">
            <User className="text-limeyellow" />
          </div>
          <ArrowDown
            className={`text-roxo-light duration-300 transition-transform ${
              dropdownOpen ? "rotate-180 duration-300" : ""
            }`}
          />
        </div>

        {dropdownOpen && (
          <div className="absolute top-14 right-0 bg-roxo-escuro p-2 shadow-md rounded-md flex flex-col justify-center items-center">
            <div>
              <Link
                to="/students/edit-perfil"
                className="hover:text-limeyellow text-white duration-150 p-2"
                onClick={handlePerfilClick}
              >
                Perfil
              </Link>
            </div>
            <div>
              <Button
                onClick={handleLogout}
                variant="text"
                className="hover:text-limeyellow text-white duration-150 p-2"
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
