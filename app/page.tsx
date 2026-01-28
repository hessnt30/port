export default function Home() {
  const comingSoon = Array(300).fill("COMING SOON");

  return (
    <div className="relative h-screen w-screen overflow-hidden bg-black flex items-center justify-center">
      
      {/* Background */}
      <div className="absolute inset-0 z-0 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 xl:grid-cols-10 gap-2 opacity-30 text-gray-300 text-sm md:text-base font-bold select-none pointer-events-none">
        {comingSoon.map((item, index) => (
          <span key={index}>{item}</span>
        ))}
      </div>

      {/* Foreground */}
      <main className="relative z-10">
        <div className="font-bold px-12 py-8 bg-black">
          <h1 className="text-4xl md:text-6xl text-white text-center">
            COMING SOON
          </h1>
          <p className="text-center md:text-2xl text-white">
            nicholashess0129@gmail.com
          </p>
        </div>
      </main>

    </div>
  );
}
