import { Bold, Underline } from "lucide-react"

import { Toggle } from "@/components/ui/toggle"

export function UnderlineFont() {
  return (
    <Toggle aria-label="Toggle italic">
      <Underline className="h-4 w-4" />
    </Toggle>
  )
}
