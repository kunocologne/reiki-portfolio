"use client"

import { useTheme } from "@/components/ui/theme-provider"
import { Button } from "@/components/ui/button"
import { PillarTheme } from "@/components/ui/theme-provider"
import { cn } from "@/lib/utils"

const themes: { label: string; value: PillarTheme; color: string }[] = [
  {
    label: "Default",
    value: "default",
    color: "#A8C3A7", // Sage Green
  },
  {
    label: "Healing",
    value: "mindset",
    color: "#B39BC8", // Lavendel
  },
  {
    label: "Food",
    value: "nutrition",
    color: "#C17C57", // Terrakotta
  },
  {
    label: "Sacred House",
    value: "sacredHouse",
    color: "#E8D7B7", // Sand Beige
  },
]

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme()

  return (
    <div className="flex items-center gap-2">
      {themes.map((t) => (
        <Button
          key={t.value}
          variant="outline"
          size="sm"
          onClick={() => setTheme(t.value)}
          className={cn(
            "w-8 h-8 p-0 rounded-full",
            theme === t.value && "border-2 border-black",
          )}
          style={{ backgroundColor: t.color }}
          title={t.label}
          aria-label={`Switch to ${t.label} theme`}
        />
      ))}
    </div>
  )
}

export function ThemeSwitcherWithLabels() {
  const { theme, setTheme } = useTheme()

  return (
    <div className="flex flex-col space-y-2">
      <p className="text-sm font-medium mb-2">Themes</p>
      <div className="flex flex-wrap gap-2">
        {themes.map((t) => (
          <Button
            key={t.value}
            variant={theme === t.value ? "default" : "outline"}
            size="sm"
            onClick={() => setTheme(t.value)}
            className={cn(
              "flex items-center gap-2",
              theme === t.value && "border-2"
            )}
          >
            <span 
              className="w-3 h-3 rounded-full" 
              style={{ backgroundColor: t.color }}
            />
            <span>{t.label}</span>
          </Button>
        ))}
      </div>
    </div>
  )
} 