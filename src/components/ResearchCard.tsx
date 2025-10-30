
import { Progress } from "@/components/ui/progress";
import Image from "next/image";
import Link from "next/link";

interface ResearchCardProps {
  date: string;
  title: string;
  tags: string[];
  authors: string[];
  verified: boolean;
  citationPercentage: number;
  likes: number;
  comments: number;
  reads: number;
  imageSrc: string;
}

export const ResearchCard: React.FC<ResearchCardProps> = ({
  date,
  title,
  tags,
  authors,
  verified,
  citationPercentage,
  likes,
  comments,
  reads,
  imageSrc,
}) => {
  return (
    <article className="w-[284px] h-[497px] rounded-[8px] border-[0.5] border-white/5 bg-white/4 p-0.5 ">
      <main className="relative w-full h-[244.68px] border-[0.36px] border-white/16 rounded-[5.68px] pt-[6.17px] pl-[4.89px] pb-[6.17px] pr-[7.65px] flex flex-col justify-between overflow-hidden">
        <Image
          src={imageSrc}
          alt="research-image"
          layout="fill"
          objectFit="cover"
          className="absolute inset-0 w-full h-full "
        />
        <div className="px-[11.36px] py-[5.68px] rounded-[4.26px] w-fit bg-white/5 border-[0.71px] border-white/5 text-[8.52px] font-normal text-white z-10">
          {date}
        </div>
        <div className="flex justify-end z-10">
          <div className="px-[11.36px] py-[5.68px] rounded-[4.26px] w-fit flex items-center gap-[6px] bg-[#024E21]  text-[8.52px] font-normal text-white">
            <span>
              <Image
                src="logo-white.svg"
                alt="logo-white"
                width={17.04}
                height={14.37}
              />
            </span>
            Peer Reviewed
          </div>
        </div>
      </main>
      <main className="mt-[18.35px] pr-[5.65px] pl-[9.97px]">
        <div className="w-[268.38px] flex flex-col gap-2 ">
          <p className="font-normal text-[14px] text-[#dddddd] line-clamp-2">
            {title}
          </p>
          <div className="flex items-center gap-2 mt-2">
            {tags.map((tag) => (
              <div
                key={tag}
                className="px-2 py-1 text-xs font-normal text-white bg-white/5 rounded-md border-[0.5px] border-white/5"
              >
                <p className="text-[7px]">{tag}</p>
              </div>
            ))}
          </div>
        </div>
        <main className="mt-[14.1px] p-2 flex flex-col gap-4 border-[0.5px] border-white/4">
          <main className="flex flex-col gap-2">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-1.5">
                <div className="flex items-center gap-[3px]">
                  <div className="w-[24.43px] h-[16.43px] relative">
                    <div className="size-[16.43px] bg-amber-400 rounded-full "></div>
                    <div className="size-[16.43px] bg-pink-400 rounded-full absolute top-0 right-0 "></div>
                  </div>
                  <div>
                    <p className="text-[5.68px] text-white/40">
                      {authors.join(", ")}
                    </p>
                  </div>
                  {verified && (
                    <span>
                      <Image
                        src="verified.svg"
                        alt="verified"
                        width={7.1}
                        height={7.1}
                      />
                    </span>
                  )}
                </div>
              </div>
              <div className="flex items-center gap-1">
                <span>
                  <Image
                    src="solana.svg"
                    alt="solana"
                    width={9}
                    height={7.25}
                  />
                </span>
                <p className="text-[8px] text-white/40">Verified</p>
              </div>
            </div>

            <div>
              <p className="text-[8.52px] text-white/40">
                SMARCA4 and other components of the SWI/SNF chromatine label
              </p>
            </div>
          </main>

          <div>
            <main className="flex justify-between items-center">
              <div className="flex gap-[3px] items-center">
                <p className="text-white/80 text-[8.52px]">
                  Citations:
                  <span>{citationPercentage}%</span>
                </p>
                <div className="relative">
                  <Progress
                    className="w-[71px] h-[1.5px] bg-white/12 [&>div]:bg-white "
                    value={citationPercentage}
                  />
                  <div
                    className="absolute top-[2px] -translate-y-1/2 size-[3px] bg-white rounded-full shadow-lg transition-all duration-300 ease-out"
                    style={{
                      left: `${citationPercentage}%`,
                      transform: "translate(-50%, -50%)",
                    }}
                  />
                </div>
              </div>

              <div className="flex items-center gap-1">
                <div className="w-[35.53px] h-[16.43px] justify-center rounded-[8.88px] bg-white/5 flex items-center gap-[2.84px]">
                  <Image
                    src="icons/love-icon.svg"
                    alt="love icon"
                    width={6.68}
                    height={6.68}
                  />

                  <p className="text-[7px] text-white/80">{likes}</p>
                </div>
                <div className="w-[35.53px] h-[16.43px] justify-center rounded-[8.88px] bg-white/5 flex items-center gap-[2.84px]">
                  <Image
                    src="icons/message-icon.svg"
                    alt="love icon"
                    width={6.68}
                    height={6.68}
                  />
                  <p className="text-[7px] text-white/80">{comments}</p>
                </div>
              </div>
            </main>
          </div>
        </main>

        <div className="w-full justify-center items-center  flex mt-[11.83px] ">
          <Link
            href="/"
            className="font-normal text-[8.52px] text-white/64 text-center underline"
          >
            Click to view details
          </Link>
        </div>

        <div className="mt-[9.38px] w-full h-[0.36px] bg-white/6  " />

        <div className="relative w-[260.57px] h-[34.41px] rounded-[8px] bg-white/6 flex justify-center items-center px-4 mt-[13.11px]">
          <p className="text-[12px] text-white font-normal">Access Paper</p>

          <div className="absolute right-4 top-1/2 -translate-y-1/2 w-[54.53px] h-[17.04px] rounded-[4px] border-[0.5px] border-white/4 flex items-center justify-center gap-[1.42px]">
            <span>
              <Image
                src="icons/users-up.svg"
                alt="love icon"
                width={9.94}
                height={9.94}
              />
            </span>
            <p className="font-normal text-[5.68px] line-through">{reads} Read</p>
          </div>
        </div>
      </main>
    </article>
  );
};
