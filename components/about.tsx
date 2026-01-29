import Image from "next/image";
import pic from "../public/nickportimagecropped.jpg";

export default function About() {
  return (
    <div className="mx-auto flex h-[400px] max-w-4xl overflow-hidden rounded-3xl bg-slate-900 text-slate-50 shadow-xl">
      {/* Left: photo with diagonal overlay */}
      <div className="relative w-1/3 min-w-[200px]">
        <Image
          src={pic}
          alt="Nick Hess"
          className="h-full w-full object-cover"
          sizes="(min-width: 1024px) 33vw, 100vw"
        />
        {/* Diagonal-ish blend into the text area */}
        <div className="pointer-events-none absolute z-10 inset-y-0 right-[-8%] w-1/4 -skew-x-6 bg-slate-900" />
      </div>

      {/* Right: name + about text */}
      <div className="flex w-2/3 flex-col gap-4 p-8 z-20">
        <h2 className="text-3xl tracking-tight">Hi 👋, I'm <span className="font-bold">Nick Hess</span></h2>
        <p className="text-sm leading-relaxed text-slate-200">
          {/* Replace this with your real about me text */}
          I&apos;m a Fullstack Developer currently based in Colonial Heights, VA.
        </p>
      </div>
    </div>
  );
}
