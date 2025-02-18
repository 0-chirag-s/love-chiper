interface HeaderProps {
  isLoggedIn?: boolean;
}

const Header = ({ isLoggedIn }: HeaderProps) => {
  return (
    <header className="bg-primary px-6 py-4 flex justify-between items-center">
      <a href="/" className="text-white text-xl font-medium">
        Love Cipher
      </a>
      <a 
        href={isLoggedIn ? "/" : "/login"} 
        className="bg-white px-4 py-2 rounded-md text-primary hover:bg-gray-100"
      >
        {isLoggedIn ? 'LogOut' : 'LogIn'}
      </a>
    </header>
  );
};

export default Header;
