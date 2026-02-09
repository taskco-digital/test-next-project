import Navbar from "../components/navbar";

export default function About() {
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
            <h2 className="text-4xl font-bold mb-4">About Us</h2>
            <p className="text-lg text-zinc-600 dark:text-zinc-400">
              Welcome to the About page. Here you can learn more about our
              project and mission.
            </p>
          </section>

          <section className="mb-16">
            <h3 className="text-2xl font-bold mb-4">Our Story</h3>
            <p className="text-zinc-600 dark:text-zinc-400 mb-4">
              We started with a simple vision: to create innovative solutions
              that make a difference. Over the years, we've grown into a team of
              passionate individuals dedicated to delivering excellence.
            </p>
            <p className="text-zinc-600 dark:text-zinc-400">
              Our journey has been filled with challenges and triumphs, but our
              commitment to quality and customer satisfaction has never wavered.
            </p>
          </section>

          <section className="mb-16">
            <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
            <p className="text-zinc-600 dark:text-zinc-400">
              To provide cutting-edge solutions that empower businesses and
              individuals to achieve their full potential. We believe in
              innovation, integrity, and continuous improvement.
            </p>
          </section>

          <section className="mb-16">
            <h3 className="text-2xl font-bold mb-4">Our Team</h3>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="p-4 border border-zinc-200 dark:border-zinc-700 rounded-lg text-center">
                <div className="w-16 h-16 bg-zinc-300 dark:bg-zinc-600 rounded-full mx-auto mb-2"></div>
                <h4 className="font-semibold">John Doe</h4>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">
                  Founder & CEO
                </p>
              </div>
              <div className="p-4 border border-zinc-200 dark:border-zinc-700 rounded-lg text-center">
                <div className="w-16 h-16 bg-zinc-300 dark:bg-zinc-600 rounded-full mx-auto mb-2"></div>
                <h4 className="font-semibold">Jane Smith</h4>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">
                  Lead Developer
                </p>
              </div>
              <div className="p-4 border border-zinc-200 dark:border-zinc-700 rounded-lg text-center">
                <div className="w-16 h-16 bg-zinc-300 dark:bg-zinc-600 rounded-full mx-auto mb-2"></div>
                <h4 className="font-semibold">Mike Johnson</h4>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">
                  Designer
                </p>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
