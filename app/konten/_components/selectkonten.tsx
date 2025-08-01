import * as React from "react"
import { Calendar } from 'lucide-react';

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function SelectKonten() {
  return (
    <Select> 
      <SelectTrigger className="w-[180px] bg-[#0D1B48] rounded-box rounded-xl text-white">
        <Calendar/> 
        <SelectValue placeholder="Daftar Konten" />
      </SelectTrigger>
      <SelectContent className="bg-[#0D1B48]">
        <SelectGroup className="">
          <SelectItem value="A" className="text-white">A</SelectItem>
          <SelectItem value="B" className="text-white">B</SelectItem>
          <SelectItem value="C" className="text-white">C</SelectItem>
          <SelectItem value="D" className="text-white">D</SelectItem>
          <SelectItem value="E" className="text-white">E</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
