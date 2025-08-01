import { Trash2 } from "lucide-react";
import React from "react";

type TrashButtonProps = {
  onClick?: () => void;
  title?: string;
  size?: number;
  color?: string;
};

export const TrashButton: React.FC<TrashButtonProps> = ({
  onClick,
  title = "Delete",
  size = 20,
  color = "black",
}) => {
  return (
    <button
      onClick={onClick}
      title={title}
      className="hover:scale-110 transition-transform active:scale-90"
      aria-label={title}
    >
      <Trash2 size={size} color={color} />
    </button>
  );
};
