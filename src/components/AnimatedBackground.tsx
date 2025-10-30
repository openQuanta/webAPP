"use client";

const AnimatedBackground = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full -z-10">
      <div
        className="absolute w-[555px] h-[590.88px] bg-[#42078D]/70 blur-[300px] animate-wander"
        style={{ animationDuration: "15s" }}
      />
      <div
        className="absolute w-[384px] h-[409px] bg-[#AA3C14]/70 blur-[300px] animate-wander"
        style={{ animationDelay: "2s", animationDuration: "17s" }}
      />
      <div
        className="absolute w-[275px] h-[292px] bg-[#8330ED]/70 blur-[300px] animate-wander"
        style={{ animationDelay: "4s", animationDuration: "20s" }}
      />
      <div
        className="absolute w-[220px] h-[233px] bg-[#DE5828]/70 blur-[300px] animate-wander"
        style={{ animationDelay: "6s", animationDuration: "22s" }}
      />
    </div>
  );
};

export default AnimatedBackground;
