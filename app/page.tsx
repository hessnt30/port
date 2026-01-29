import About from "@/components/about";
// import ComingSoon from "@/components/coming-soon";

export default function Home() {
  return (
    <div className="relative min-h-screen w-screen overflow-hidden bg-white flex items-center justify-center">
      <main className="relative z-10">
        <About />
      </main>
    </div>
  );
}
