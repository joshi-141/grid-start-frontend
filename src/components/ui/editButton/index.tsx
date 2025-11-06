"use client";

import { Button } from "@/components/ui";
import { MdOutlineEdit } from "react-icons/md";

interface editButtonProps {
    className?: string;
    onClick: () => void;
}

const EditButton = ({ className, onClick}: editButtonProps) => {
    return (
        <Button onClick={onClick} className={`${className}`}>
           <span className="text-lg"> <MdOutlineEdit /> </span>
        </Button>
    )
}

export default EditButton;