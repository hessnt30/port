export default function Home() {
  const comingSoon = Array(1200).fill("COMING SOON");

  return (
    <div className="flex min-h-screen items-center justify-center">
      <main>
        <div className="flex flex-wrap text-gray-100 absolute top-0 left-0 z-0">
          {comingSoon.map((item, index) => (
            <p key={index}>{item}</p>
          ))}
        </div>

        <div className="z-10 relative font-bold px-10 py-6 bg-background">
          <h1 className="text-4xl md:text-6xl">COMING SOON</h1>
          <p className="text-center md:text-2xl">nicholashess0129@gmail.com</p>
        </div>
      </main>
    </div>
  );
}
