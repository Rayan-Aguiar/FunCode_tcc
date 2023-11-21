import { useLocation } from "react-router-dom";
import HeaderAdmin from "../../components/header";
import Navigation from "../../components/navegation";

export default function CoursesAdmin() {
  const location = useLocation();
  const currentPath = location.pathname;
  return (
    <div className="bg-gradient-to-br from-gray-100 to-gray-300 w-screen h-screen ">
      <HeaderAdmin />
      <Navigation currentPath={currentPath}/>
    </div>
  );
}
