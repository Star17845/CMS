import { Italic } from "lucide-react"

import { Toggle } from "@/components/ui/toggle"

export function ItalicFont() {
  return (
    <Toggle aria-label="Toggle italic">
      <Italic className="h-1 w-1" />
    </Toggle>
  )
}
