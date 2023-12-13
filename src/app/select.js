import { useState } from "react";
export default function Select({ className, options }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative">
      <div className="mx-auto w-[289px] text-[14px] flex justify-center">
        <button
          onClick={() => setOpen(!open)}
          className=" h-[40px] rounded-[5px] border-2 border-gray1 px-4 self-center font-bold text-gray1"
        >
          My Tasks
        </button>
      </div>
      {open && (
        <div className="absolute top-[45px] left-[40px] min-w-[118px] bg-white flex flex-col whitespace-nowrap rounded border-[1px] border-gray1">
            <div className="fixed inset-0" onClick={()=>setOpen(!open)} />
          {options?.map((option) => (
            <div
              key={option}
              className="flex p-2 flex-row border-[1px] border-gray1 w-[180px] z-2"
            >
              <div className="font-bold text-gray1 text-[14px]">{option}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
