export default function Home() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center main-block">
      <div className="text-6xl font-bold text-white">DanceMode</div>
      <a
        href="/app"
        className="bg-white border-4 border-white text-black pb-2 pt-2 pl-6 pr-6 mt-5 rounded-lg text-xl cursor-pointer hover:bg-transparent hover:text-white transition weight-bold"
      >
        Login
      </a>
    </div>
  );
}
