import {Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Link, Button,
Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Avatar, User, Input} from "@nextui-org/react";
import {useState, useEffect} from 'react'
import {UserContext} from '../context/UserContext'
import {useContext} from 'react'
import {useNavigate} from 'react-router-dom'
import SearchPage from '../pages/SearchPage'
export const SearchIcon = (props) => (
    <svg
      aria-hidden="true"
      fill="none"
      focusable="false"
      height="1em"
      role="presentation"
      viewBox="0 0 24 24"
      width="1em"
      {...props}
    >
      <path
        d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path
        d="M22 22L20 20"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
  

export const NavBar = () => {
    const navigate = useNavigate();
    const {user, auth, logout, getUser} = useContext(UserContext)
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [searchData, setSearchData] = useState("");

    const menuItems = [
     "Help & Feedback",
    ];
   return (
        <Navbar maxWidth="full" onMenuOpenChange={setIsMenuOpen} isBordered isBlured>
            <NavbarContent>
                <NavbarMenuToggle
                aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                className="sm:hidden"
                />
                <NavbarBrand>
                    <Link className="text-white font-extrabold" onClick={() => navigate('/')} style={{cursor:'pointer'}}>
                        IntelliLearn
                    </Link>
                </NavbarBrand>
            </NavbarContent>

            <NavbarContent className="hidden sm:flex gap-4" justify="center">
                <NavbarItem>
                <Link color="foreground" style={{cursor:'pointer'}} onClick={() => navigate('/classrooms')}>
                    Classrooms
                </Link>
                </NavbarItem>
                <NavbarItem isActive>
                </NavbarItem>
                <NavbarItem>
                <Link color="foreground" style={{cursor:'pointer'}} onClick={() => navigate('/minaAi')}>
                    MinaAi
                </Link>
                </NavbarItem>
            </NavbarContent>
            <NavbarContent justify="end">
                <Input className='search-input'
                    classNames={{
                        base: "max-w-full sm:max-w-[10rem] h-10",
                        mainWrapper: "h-full",
                        input: "text-small",
                        inputWrapper: "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
                    }}
                    placeholder="Type to search..."
                    size="sm"
                    startContent={<SearchIcon size={18} />}
                    type="search"
                />
            {!user &&
            <div style={{display:'flex', gap:'15px'}}>
                <NavbarItem className="hidden lg:flex">
                <Link onClick={() => navigate('/signin')} style={{cursor:'pointer'}}>
                    Login
                </Link>
                </NavbarItem>
                <NavbarItem>
                <Button as={Link} color="primary" variant="flat" onClick={() => navigate('/signup')}>
                    Sign Up
                </Button>
                </NavbarItem>
            </div>
            }
            {user ?
                <NavbarItem className="lg:flex">
                <Dropdown placement="bottom-end">
                    <DropdownTrigger>
                    <Avatar
                        color="primary"
                        isBordered
                        as="button"
                        className="transition-transform"
                        src={`${user.user_photo}`}
                    />
                    </DropdownTrigger>
                    <DropdownMenu aria-label="Profile Actions" variant="flat">
                    <DropdownItem key="profil" onClick={() => navigate(`/profile/${user.username}`)}>
                        View profile
                    </DropdownItem>
                    <DropdownItem key="settings" onClick={()=>navigate(`/profile/${user.username}/Settings`)}>
                        Settings
                    </DropdownItem>
                    <DropdownItem key="logout" color="danger" onClick={logout}>
                        Log Out
                    </DropdownItem>
                    </DropdownMenu>
                </Dropdown>
                </NavbarItem>
            : <></>}
            </NavbarContent>
            <NavbarMenu>
                <div>
                <Input
                value={searchData}
                onChange={(e) => setSearchData(e.target.value)}
                classNames={{
                    base: "max-w-full sm:max-w-[10rem] h-10",
                    mainWrapper: "h-full",
                    input: "text-small",
                    inputWrapper: "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
                }}
                placeholder="Type to search..."
                size="sm"
                startContent={<SearchIcon size={18} />}
                type="search"
                />
                {menuItems.map((item, index) => (
                <NavbarMenuItem key={`${item}-${index}`}>
                    <Link
                    color={
                        index === 2 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"
                    }
                    className="w-full"
                    size="lg"
                    >
                    {item}
                    </Link>
                </NavbarMenuItem>
                ))}
                </div>
            </NavbarMenu>
        </Navbar>
    );
}