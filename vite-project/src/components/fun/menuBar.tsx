import {  useNavigate } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

const Navbar = () => {

    const navigate = useNavigate();


  return (
    <div className=" shadow-md bg-white grid grid-cols-2 gap-2">
        <div><img className="w-[120px] h-[100px]" src="../public/snow.png" alt="logo"/></div>
      <NavigationMenu>
        <div className="pl-[200px]">
          <NavigationMenuList className="">
            <NavigationMenuItem>
              <NavigationMenuLink
              onClick={() => navigate("/home/")} 
              className="modelCk1 inline-block w-16 text-center cursor-pointer border-b-2 hover:border-red-600 mx-4 py-2">
                Home
              </NavigationMenuLink>
              <NavigationMenuLink className="modelCk1 inline-block w-16 text-center cursor-pointer border-b-2 hover:border-red-600 mx-4 py-2"
              onClick={() => navigate("/products/")} 
              >
                Products
              </NavigationMenuLink>
              <NavigationMenuLink className="modelCk1 inline-block w-16 text-center cursor-pointer border-b-2 hover:border-red-600  mx-4 py-2">
                Content
              </NavigationMenuLink>
              <NavigationMenuLink className="modelCk inline-block w-16 cursor-pointer  border-b-2 hover:border-red-600  text-center space-x-1  mx-4 py-2">
                <span>Logout</span>
                <svg
                  className="flex"
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.1584 3.13508C6.35985 2.94621 6.67627 2.95642 6.86514 3.15788L10.6151 7.15788C10.7954 7.3502 10.7954 7.64949 10.6151 7.84182L6.86514 11.8418C6.67627 12.0433 6.35985 12.0535 6.1584 11.8646C5.95694 11.6757 5.94673 11.3593 6.1356 11.1579L9.565 7.49985L6.1356 3.84182C5.94673 3.64036 5.95694 3.32394 6.1584 3.13508Z"
                    fill="currentColor"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </div>
      </NavigationMenu>
    </div>
  );
};

export default Navbar;
