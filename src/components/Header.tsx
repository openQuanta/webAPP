import { Bell, ListFilter, Search } from "lucide-react";
import Image from "next/image";

export function Header() {
  return (
    <header className="text-white w-full h-[47px] bg-white/4 flex justify-between items-center px-8">
      <main>
        <Image src="/horizontal-logo.svg" alt="logo" width={64} height={15} />
      </main>
      <main className="flex gap-1 items-center">
        <div className="flex gap-2 items-center ">
          <div>
            <Image src="/icons/mail.svg" alt="mail" width={12} height={12} />
          </div>
          <div className="relative">
            <Image src="/icons/bell.svg" alt="mail" width={12} height={12} />
            <div className="bg-[#EF4444] size-[5.33px] rounded-full absolute top-[-5px] right-[-5px]" />
          </div>
        </div>
        <div className="flex items-center gap-4 py-1 pl-1 pr-4 border-[0.5px] border-white/5 bg-white/2 rounded-2xl">
          <div className="bg-red-500 size-4 rounded-full"></div>
          <div className="flex gap-2 items-center">
            <div className="flex  items-center gap-1">
              <div className="bg-green-500 size-1.5 rounded-full"></div>
              <p className="font-normal text-[10px]">6Lc9...F9zA</p>
            </div>
            <span>
              <Image
                src="/icons/chevron-down.svg"
                alt="chevron-down"
                width={6}
                height={3.5}
              />
            </span>
          </div>
        </div>
      </main>
    </header>
  );
}
