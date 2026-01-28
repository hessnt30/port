export default function Home() {
  const comingSoon = Array(300).fill("COMING SOON");

  return (
    <div className="relative flex h-screen w-screen justify-center items-center overflow-hidden bg-black">
      <main className="relative z-10">
        {/* Background */}
        <div className="absolute inset-0 h-screen w-screen z-0 grid grid-cols-6 md:grid-cols-10 lg:grid-cols-14 gap-4 opacity-30 text-gray-300 text-sm md:text-base font-bold select-none pointer-events-none">
          {comingSoon.map((item, index) => (
            <span key={index}>{item}</span>
          ))}
        </div>

        {/* Foreground */}
        <div className="relative z-10 font-bold px-12 py-8 bg-black">
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
