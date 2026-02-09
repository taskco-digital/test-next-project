import Navbar from "../components/navbar";

export default function Contact() {
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
            <h2 className="text-4xl font-bold mb-4">Contact Us</h2>
            <p className="text-lg text-zinc-600 dark:text-zinc-400">
              Get in touch with us. We'd love to hear from you! Fill out the
              form below and we'll respond shortly.
            </p>
          </section>

          <section className="mb-16">
            <h3 className="text-2xl font-bold mb-4">Get in Touch</h3>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Name</label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-zinc-300 dark:border-zinc-600 rounded-lg dark:bg-zinc-800"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Email</label>
                <input
                  type="email"
                  className="w-full px-3 py-2 border border-zinc-300 dark:border-zinc-600 rounded-lg dark:bg-zinc-800"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Message
                </label>
                <textarea
                  rows={5}
                  className="w-full px-3 py-2 border border-zinc-300 dark:border-zinc-600 rounded-lg dark:bg-zinc-800"
                  placeholder="Your message"
                ></textarea>
              </div>
              <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                Send Message
              </button>
            </form>
          </section>

          <section className="mb-16">
            <h3 className="text-2xl font-bold mb-4">Contact Information</h3>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="p-4 border border-zinc-200 dark:border-zinc-700 rounded-lg">
                <h4 className="font-semibold mb-2">Email</h4>
                <p className="text-zinc-600 dark:text-zinc-400">
                  contact@myapp.com
                </p>
              </div>
              <div className="p-4 border border-zinc-200 dark:border-zinc-700 rounded-lg">
                <h4 className="font-semibold mb-2">Phone</h4>
                <p className="text-zinc-600 dark:text-zinc-400">
                  +1 (555) 123-4567
                </p>
              </div>
              <div className="p-4 border border-zinc-200 dark:border-zinc-700 rounded-lg">
                <h4 className="font-semibold mb-2">Address</h4>
                <p className="text-zinc-600 dark:text-zinc-400">
                  123 Main St, City, State
                </p>
              </div>
            </div>
          </section>

          <section>
            <h3 className="text-2xl font-bold mb-4">Business Hours</h3>
            <ul className="text-zinc-600 dark:text-zinc-400 space-y-2">
              <li>
                <span className="font-medium">Monday - Friday:</span> 9:00 AM -
                6:00 PM
              </li>
              <li>
                <span className="font-medium">Saturday:</span> 10:00 AM - 4:00
                PM
              </li>
              <li>
                <span className="font-medium">Sunday:</span> Closed
              </li>
            </ul>
          </section>
        </div>
      </main>
    </div>
  );
}
