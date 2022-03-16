import Head from "next/head";
import { MailIcon } from "@heroicons/react/solid";

export default function Home() {
  return (
    <div className="h-screen w-screen flex flex-col justify-between max-w-6xl mx-auto py-8">
      <Head>
        <title>Kindly | Become the driving force for a better future</title>
        <meta
          name="description"
          content="A place to see the impact that donations make in our city, and how you can contribute to a better, brighter future for us all."
        />
        <meta name="theme-color" content="#3E3884" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest"></link>
      </Head>

      <header className="hidden md:block">
        <h1 className="sr-only">Kindly</h1>
      </header>

      <main className="max-w-3xl px-8 mx-auto text-dark">
        <img
          src="/logo.svg"
          alt="Kindly"
          className="h-16 md:h-24 w-auto mx-auto"
        />

        <h2 className="text-4xl md:text-6xl mt-8 text-center font-bold">
          <span className="text-light">Become the driving force</span>{" "}
          <br className="hidden" /> <span>for a better future.</span>
        </h2>

        <p className="mt-8 md:mt-16 text-center md:text-xl">
          Kindly visualises of the impact charities and organisations are
          contributing around Melbourne. A place where people can see the kind
          of impact that their donations can make, and how to contribute to a
          better, brighter future for us all.
        </p>

        <div className="rounded-lg p-8 mt-8 md:mt-24 grid grid-cols-1 md:grid-cols-2 items-center md:space-x-8 text-center md:text-left">
          <p>Sign up now to be notified when we launch our platform.</p>
          <form
            action="#"
            method="post"
            className="w-full mt-4 md:mt-0 relative rounded-md shadow-sm"
          >
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <MailIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
            </div>
            <input
              type="email"
              name="email"
              id="email"
              className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md"
              placeholder="youre@awesome.com"
            />
          </form>
        </div>
      </main>

      <footer className="text-right text-dark text-sm pr-8 xl:pr-0">
        Created with ❣️ by{" "}
        <a href="https://twitter.com/@thedannyferg">@thedannyferg</a>
      </footer>
    </div>
  );
}
