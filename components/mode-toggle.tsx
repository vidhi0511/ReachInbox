"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Switch } from "@/components/ui/switch";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  // Ensure this component only runs on the client side
  React.useEffect(() => {
    setMounted(true);
  }, []);

  const handleToggle = (checked: boolean) => {
    setTheme(checked ? "dark" : "light");
  };

  // Determine if the switch should be checked
  const isDarkMode = mounted && theme === "dark";

  return (
    <div className="flex items-center space-x-2 relative">
      <Moon
        className={`transition-opacity hidden dark:block text-black duration-300 absolute left-3`}
        size={15}
      />
      <Switch
        checked={isDarkMode}
        onCheckedChange={handleToggle}
        // Ensure the data-state is managed properly
        data-state={isDarkMode ? "checked" : "unchecked"}
      />
      <Sun
        className={`transition-opacity block dark:hidden text-[#E8C364] duration-300 absolute right-1`}
        size={15}
      />
    </div>
  );
}
