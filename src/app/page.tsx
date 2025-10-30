import { ResearchCard } from "@/components/ResearchCard";
import { Bell, ListFilter, Search } from "lucide-react";
import Image from "next/image";

const demoData = [
  {
    id: 1,
    date: "5months ago",
    title: "Post-Quantum Crytography Protocol for Bl.....",
    tags: ["Blockchain", "Cryptography", "Distributed System"],
    authors: ["Shirle Mamours", "Jerry Sorln"],
    verified: true,
    citationPercentage: 48,
    likes: 12,
    comments: 28,
    reads: 12,
    imageSrc: "/asset/frame1.png",
  },
  {
    id: 2,
    date: "5months ago",
    title: "Post-Quantum Crytography Protocol for Bl.....",
    tags: ["Blockchain", "Cryptography", "Distributed System"],
    authors: ["Shirle Mamours", "Jerry Sorln"],
    verified: true,
    citationPercentage: 48,
    likes: 12,
    comments: 28,
    reads: 12,
    imageSrc: "/asset/frame2.png",
  },
  {
    id: 3,
    date: "5months ago",
    title: "Post-Quantum Crytography Protocol for Bl.....",
    tags: ["Blockchain", "Cryptography", "Distributed System"],
    authors: ["Shirle Mamours", "Jerry Sorln"],
    verified: true,
    citationPercentage: 48,
    likes: 12,
    comments: 28,
    reads: 12,
    imageSrc: "/asset/frame3.png",
  },
  {
    id: 4,
    date: "5months ago",
    title: "Post-Quantum Crytography Protocol for Bl.....",
    tags: ["Blockchain", "Cryptography", "Distributed System"],
    authors: ["Shirle Mamours", "Jerry Sorln"],
    verified: true,
    citationPercentage: 48,
    likes: 12,
    comments: 28,
    reads: 12,
    imageSrc: "/asset/frame4.png",
  },
];

export default function Home() {
  return (
    <>






      <header className="text-white w-[1416px] h-[47px] bg-white/4 flex justify-between items-center">
        <main>
          <Image src="horizontal-logo.svg" alt="logo" width={64} height={15} />
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
      <section className="text-white font-halenoir w-[1208px] flex flex-col gap-12">
        <header className="flex flex-col gap-6 ">
          <h4 className="font-normal text-[22px] text-white">
            Discover Research
          </h4>
          <main className="flex  h-[69px]">
            <div className="flex gap-2 items-center w-[880px] h-full bg-white/4 border border-white/6 rounded-[8px] py-[20px] pl-4">
              <span>
                <Image
                  src="/icons/search.svg"
                  alt="logo"
                  width={16}
                  height={16}
                />
              </span>
              <div className="h-[12px] w-[0.5px] bg-white" />
              <input
                type="search"
                name=""
                id=""
                placeholder="Search"
                className="placeholder:text-white/24 placeholder:font-normal placeholder:text-xs w-full outline-0  "
              />
            </div>

            <div className="border-[0.5px] border-white/6 bg-white/4 rounded-[8px] w-[138px] h-full flex gap-2 justify-center items-center">
              <span>
                <ListFilter className="size-6" />
              </span>
              <p className="text-base font-normal">Filter</p>

              <Image
                src="/icons/chevron-down.svg"
                alt="chevron-down"
                width={7}
                height={3.75}
              />
            </div>
            <div className="border-[0.5px] border-white/6 bg-white/4 rounded-[8px] w-[138px] h-full flex gap-2 justify-center items-center">
              <span>
                <Image src="/icons/sort.svg" alt="sort" width={10} height={16} />
              </span>
              <p className="text-base font-normal">Sort</p>

              <Image
                src="/icons/chevron-down.svg"
                alt="chevron-down"
                width={7}
                height={3.75}
              />
            </div>
          </main>
        </header>
        <main className="flex gap-6">
          {demoData.map((data) => (
            <ResearchCard key={data.id} {...data} />
          ))}
        </main>
      </section>
    </>
  );
}