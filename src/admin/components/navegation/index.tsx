import { NavLink } from "react-router-dom";
import { PieChart, GraduationCap, Coins, HelpCircle } from "lucide-react";

interface NavigationProps {
  currentPath: string;
}

const Navigation: React.FC<NavigationProps> = ({ currentPath }) => {
  return (
    <nav className="w-full h-10 bg-roxo flex items-center px-10 gap-8">
      <NavItem
        to="/admin/dashboard"
        icon={<PieChart className="text-limeyellow" />}
        label="Dashboard"
        currentPath={currentPath}
      />
      <NavItem
        to="/admin/students"
        icon={<GraduationCap className="text-limeyellow" />}
        label="Alunos"
        currentPath={currentPath}
        dynamicPattern="/admin/students/edit/"
        
      />
      
      <NavItem
        to="/admin/financial"
        icon={<Coins className="text-limeyellow" />}
        label="Financeiro"
        currentPath={currentPath}
      />
      <NavItem
        to="/admin/courses"
        icon={<Coins className="text-limeyellow" />}
        label="Cursos"
        currentPath={currentPath}
      />
      <NavItem
        to="/admin/suport"
        icon={<HelpCircle className="text-limeyellow" />}
        label="Suporte"
        currentPath={currentPath}
        dynamicPattern="/admin/suport/"
      />
    </nav>
  );
};

interface NavItemProps {
  to: string;
  icon: JSX.Element;
  label: string;
  currentPath: string;
  dynamicPattern?: string;
}

const NavItem: React.FC<NavItemProps> = ({
  to,
  icon,
  label,
  currentPath,
  dynamicPattern,
}) => {
  const isActive =
    currentPath === to || (dynamicPattern && currentPath.startsWith(to || dynamicPattern));

  return (
    <NavLink
      to={to}
      className={`text-zinc-50 font-semibold w-fit h-full flex items-center gap-2 p-2 ${
        isActive ? "bg-roxo-light" : ""
      }`}
    >
      {icon}
      {label}
    </NavLink>
  );
};

export default Navigation;
