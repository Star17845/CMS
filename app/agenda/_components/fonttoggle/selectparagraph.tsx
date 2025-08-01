import * as React from "react"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function SelectParagraph() {
  return (
    <Select>  
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Paragraph" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup className="">
          <SelectItem value="A" className="">A</SelectItem>
          <SelectItem value="B" className="">B</SelectItem>
          <SelectItem value="C" className="">C</SelectItem>
          <SelectItem value="D" className="">D</SelectItem>
          <SelectItem value="E" className="">E</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
