"use client";

import { Button, Input } from "@/components/ui";
import { useState } from "react";
import { FaAngleDown } from "react-icons/fa6";
import styles from "./services.module.css";

interface FilterDropdownProps {
    title: string;
    options: {
        category: string;
        items: { label: string; count?: number }[];
    }[];
}

const FilterDropdown = ({ title, options }: FilterDropdownProps) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="relative">
            {/* Button */}
            <Button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center justify-between gap-2 px-4 py-2 border rounded-md bg-white hover:bg-gray-50 transition text-gray-800 font-medium text-sm"
            >
                {title} <FaAngleDown />
            </Button>

            {/* Dropdown */}
            {isOpen && (
                <div className="absolute left-0 mt-2 w-80 bg-white border rounded-lg shadow-lg z-50 p-4 max-h-[400px] overflow-y-auto">
                    {options.map((group, index) => (
                        <div key={index} className="mb-4">
                            <h5 className="pb-2 capitalize font-semibold"> {group.category} </h5>
                            <div className="flex flex-wrap gap-2">
                                {group.items.map((item, idx) => (
                                    <div className="w-full flex items-center justify-between">
                                        <Input
                                            type="checkbox"
                                            key={idx}
                                            id={Math.random()}
                                            label={item.label}
                                            className="w-full flex flex-row-reverse items-center justify-end gap-2"
                                        />

                                        {item.count && (
                                            <span className="text-gray-400 text-xs">({item.count})</span>
                                        )}

                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}

                    <div className="flex justify-between items-center border-t pt-3">
                        <Button onClick={()=>{setIsOpen(false)}} className="text-sm text-gray-500 hover:text-gray-700">
                            Clear all
                        </Button>
                        <button className={`${styles["aply-btn"]}`}>
                            Apply
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default FilterDropdown;
