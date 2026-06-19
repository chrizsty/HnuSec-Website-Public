"use client"

import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

export function ArchivesThemeToggle() {
    const { theme, setTheme } = useTheme()
    const isDark = theme === "dark"

    return (
        <button
            onClick={() => setTheme(isDark ? "light" : "dark")}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/60 border border-var-color-5/20 text-var-color-5 hover:bg-var-color-5 hover:text-white transition-all"
        >
            {isDark ? (
                <>
                    <Sun className="w-4 h-4" />
                    <span>亮色</span>
                </>
            ) : (
                <>
                    <Moon className="w-4 h-4" />
                    <span>暗色</span>
                </>
            )}
        </button>
    )
}
