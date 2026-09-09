import Link from "next/link";
import StatsCard from "./stats-card";

export default function HeroSection() {
  return (
    <section className="bg-green-200">
      <div className="font-mono max-w-4xl mx-auto w-full flex justify-center items-center flex-col py-20">
      <span className="border border-b-gray-800 rounded-full text-xs   tracking-tight text-black px-4 py-1 font-normal">
        Join thousands of creator sharing their work
      </span>
      <h1 className="text-6xl  py-8 font-bold tracking-tight  items-center ">
        Share what You&apos;ve{" "}
        <span className="text-balance bg-linear-to-r from-amber-300 to-cyan-900 bg-clip-text text-transparent">
          built,
        </span>
        <br /> Discover what&apos;s{" "}
        <span className="text-balance bg-linear-to-r from-amber-300 to-cyan-900 bg-clip-text text-transparent">
          launching
        </span>
      </h1>
      <p className=" font-normal  max-w-xl text-center pb-8 leading-tight tracking-wider">
        A community platform for crators to shocase their apps, AI tools, SaaS
        products, and creative projects. Authentic launches, real builders,
        genuine feedback.
      </p>
      <div className="flex  gap-4">
        <button className="border border-black px-4 py-2 rounded-md bg-black text-white cursor-pointer">
          <Link href="/submit">Share Your Projects</Link>
        </button>
        <button className="border-black px-4 py-2 bg-black text-white rounded-md cursor-pointer">
          <Link href="/">Explore Project</Link>
        </button>
      </div>
      <StatsCard />
    </div>
    </section>
  );
}
