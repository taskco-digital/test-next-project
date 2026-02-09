import Navbar from "./components/navbar";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-zinc-50 dark:bg-black font-sans">
      <header className="sticky top-0 z-50 w-full border-b border-zinc-200 bg-white dark:border-zinc-700 dark:bg-black">
        <div className="mx-auto flex h-16 max-w-3xl items-center justify-between px-4">
          <h1 className="text-lg font-bold">My App</h1>
          <Navbar />
        </div>
      </header>
      <main className="flex-1 w-full">
        <div className="mx-auto max-w-3xl px-4 py-16">
          <section className="mb-16">
            <h2 className="text-4xl font-bold mb-4">Welcome Home</h2>
            <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-6">
              This is your home page. Navigate using the menu above to explore
              other pages.
            </p>
          </section>

          <section className="mb-16">
            <h3 className="text-2xl font-bold mb-4">Featured Content</h3>
            <p className="text-zinc-600 dark:text-zinc-400 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </section>

          <section className="mb-16">
            <h3 className="text-2xl font-bold mb-4">Services</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 border border-zinc-200 dark:border-zinc-700 rounded-lg">
                <h4 className="font-semibold mb-2">Service One</h4>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">
                  High-quality solutions tailored to your needs with
                  professional support.
                </p>
              </div>
              <div className="p-4 border border-zinc-200 dark:border-zinc-700 rounded-lg">
                <h4 className="font-semibold mb-2">Service Two</h4>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">
                  Innovative approaches combining latest technologies and best
                  practices.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-16">
            <h3 className="text-2xl font-bold mb-4">Why Choose Us</h3>
            <ul className="list-disc list-inside space-y-2 text-zinc-600 dark:text-zinc-400">
              <li>Expert team with years of experience</li>
              <li>24/7 customer support</li>
              <li>Competitive pricing</li>
              <li>Quality guaranteed</li>
            </ul>
          </section>
        </div>
      </main>
    </div>
  );
}
