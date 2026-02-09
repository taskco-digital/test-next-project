import Navbar from "./components/navbar";

export default function About() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <header className="w-full border-b border-zinc-200 bg-white dark:border-zinc-700 dark:bg-black">
          <div className="mx-auto flex h-16 max-w-3xl items-center justify-between px-4">
            <h1 className="text-lg font-bold">My App</h1>
            <Navbar />
          </div>
        </header>
      </main>
    </div>
  );
}
