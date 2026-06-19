"use client"

import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

export function DocThemeToggle() {
    const { theme, setTheme } = useTheme()
    const isDark = theme === "dark"

    return (
        <button
            onClick={() => setTheme(isDark ? "light" : "dark")}
            className="flex items-center px-4 py-2 bg-white/60 border border-var-color-5/20 rounded-lg hover:bg-var-color-5 text-var-color-5 hover:text-white transition-all text-sm"
        >
            {isDark ? (
                <>
                    <Sun className="w-4 h-4 mr-2" />
                    <span>亮色</span>
                </>
            ) : (
                <>
                    <Moon className="w-4 h-4 mr-2" />
                    <span>暗色</span>
                </>
            )}
        </button>
    )
}
