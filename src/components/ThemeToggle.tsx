import React from 'react';
import { Moon, Sun, Palette } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const ThemeToggle: React.FC = () => {
  const { isDarkMode, toggleTheme, primaryColor, setPrimaryColor } = useTheme();
  
  const colors = ['amber', 'blue', 'green', 'purple', 'red'];

  return (
    <div className="flex items-center space-x-4">
      <button
        onClick={toggleTheme}
        className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
      >
        {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
      </button>
      
      <div className="relative group">
        <button className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700">
          <Palette className="w-5 h-5" />
        </button>
        <div className="absolute right-0 mt-2 py-2 w-48 bg-white rounded-lg shadow-xl hidden group-hover:block">
          {colors.map((color) => (
            <button
              key={color}
              onClick={() => setPrimaryColor(color)}
              className={`block w-full text-left px-4 py-2 text-sm capitalize hover:bg-gray-100 ${
                primaryColor === color ? 'bg-gray-100' : ''
              }`}
            >
              {color}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ThemeToggle