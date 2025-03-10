import Switch from "react-switch";
import { useState, useEffect } from "react";

const Header = () => {
  const [theme, setTheme] = useState(false);

  const toggleTheme = () => {
    setTheme(!theme);
  };

  useEffect(() => {
    if (theme) {
      document.body.classList.add("light-theme");
      document.body.classList.remove("dark-theme");
    } else {
      document.body.classList.add("dark-theme");
      document.body.classList.remove("light-theme");
    }
  }, [theme]);

  return (
    <header className="w-auto h-20 bg-gray-900 flex border-b-2 border-b-purple-800 select-none">
      <div className="ml-5 content-center sm:ml-20">
      <img src="/rick-e-morty-48.png" alt="" />
      </div>
      <div className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
        <div className="ml-8 sm:ml-0">
          <strong className="text-blue-50 text-2xl">RICK AND MORTY</strong>
        </div>
      </div>
      <div className="flex items-center m-10">
        <Switch
          onChange={toggleTheme}
          checked={theme}
          height={20}
          width={40}
          checkedIcon={false}
          uncheckedIcon={false}
          handleDiameter={20}
          offColor="#774AD9"
          onColor="#232323"
        />
      </div>
    </header>
  );
};

export default Header;