import { Fragment } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { IoIosArrowDown } from "react-icons/io"

const AllSubjectSelect = ({ categories, setSelected, selected }) => {
    return (
        <Listbox value={selected} onChange={setSelected} className={`border p-2 rounded mt-[20px] ${!selected?.text && !selected ? "border-slate-300" : "border-blue-500"}`}>
            <div className="relative h-full">
                <Listbox.Button className="h-full w-full cursor-pointer relative">
                    <p className="font-[brand-font,sans-serif] text-[10px] uppercase text-[#222] absolute top-[-20px] px-[5px] bg-white after:content-['*'] after:text-red-500">Subject</p>
                    <div className="flex items-center">
                        <span className="text-[#222] text-sm">{selected?.text || selected || "Please Select..."}</span>{" "}
                    </div>
                    <span className="pointer-events-none absolute inset-y-0 right-2 flex items-center">
                        <IoIosArrowDown color="#939393" />
                    </span>
                </Listbox.Button>
                <Transition as={Fragment} leave="transition ease-in duration-100" leaveFrom="opacity-100" leaveTo="opacity-0">
                    <Listbox.Options
                        className={` z-[99] absolute mt-1 max-h-[230px] scrollbar-style-dropdown w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm`}
                    >
                        {categories.map((category, index) => (
                            <Listbox.Option
                                key={index}
                                className={({ active }) =>
                                    `relative cursor-pointer select-none py-2 px-4 ${active ? "bg-whisperblue" : "text-gray-900"}`
                                }
                                value={category}
                            >
                                {({ selected }) => (
                                    <span
                                        className={`font-[brand-font,sans-serif] font-medium text-sm text-gray-900 truncate flex items-center ${selected ? "font-medium" : "font-normal"
                                            }`}
                                    >
                                        {category.text}{" "}
                                    </span>
                                )}
                            </Listbox.Option>
                        ))}
                    </Listbox.Options>
                </Transition>
            </div>
        </Listbox>
    );
}


export default AllSubjectSelect