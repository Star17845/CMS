import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function Search() {
  return (
    <div className="grid w-full max-w-sm items-center gap-3">
      <Input id="picture" type="file" />
    </div>
  )
}
