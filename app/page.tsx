export default function Home() {
  const comingSoon = Array(300).fill("COMING SOON");

  return (
    <div className="flex min-h-screen items-center overflow-hidden bg-black">
      <main>
        <div className="absolute inset-0 z-0 grid grid-cols-6 md:grid-cols-10 gap-6 opacity-10 text-gray-300 text-sm md:text-base font-bold select-none">
          {comingSoon.map((item, index) => (
            <span key={index}>{item}</span>
          ))}
        </div>

        <div className="z-10 relative font-bold px-10 py-6 bg-black">
          <h1 className="text-4xl md:text-6xl text-white">COMING SOON</h1>
          <p className="text-center md:text-2xl text-white">nicholashess0129@gmail.com</p>
        </div>
      </main>
    </div>
  );
}
