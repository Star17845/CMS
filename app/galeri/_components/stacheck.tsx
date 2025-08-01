import { useState } from "react";
import { Star, StarOff } from "lucide-react";
import StarHollow from "@/components/ui/star";

type StarCheckboxProps = {
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  className?: string;
};

export function StarCheckbox({ checked = false, onChange, className = "" }: StarCheckboxProps) {
  const [isChecked, setIsChecked] = useState(checked);

  const toggle = () => {
    const newValue = !isChecked;
    setIsChecked(newValue);
    onChange?.(newValue);
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-pressed={isChecked}
      className={`text-yellow-400 hover:scale-110 transition-transform ${className}`}
    >
      {isChecked ? <Star fill="currentColor" /> : <StarHollow />}
    </button>
  );
}
