function UserDetail() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-gray-800">
      <header className="flex flex-col items-center pt-12 pb-8">
        <img
          src="/placeholder.svg"
          alt="Profile picture"
          className="w-32 h-32 rounded-full"
        />
        <h1 className="mt-4 text-2xl font-semibold text-gray-900 dark:text-gray-100">
          John Doe
        </h1>
        <p className="mt-2 text-center text-gray-600 dark:text-gray-400 max-w-xs">
          Web developer with over 5 years of experience specializing in front
          end development.
        </p>
      </header>
      <main className="flex-1 w-full max-w-4xl p-4 mx-auto">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
          Projects
        </h2>
        <section className="grid gap-8 mt-8 sm:grid-cols-1 md:grid-cols-2">
          <div className="flex flex-col overflow-hidden rounded-md shadow-lg">
            <img
              src="/placeholder.svg"
              alt="Project 1 image"
              className="h-48 w-full object-cover"
            />
            <div className="flex flex-col justify-between flex-1 p-6 bg-white dark:bg-gray-800">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                  Project 1
                </h3>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  est nisl, scelerisque sit amet venenatis non, bibendum vitae
                  dolor.
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col overflow-hidden rounded-md shadow-lg">
            <img
              src="/placeholder.svg"
              alt="Project 2 image"
              className="h-48 w-full object-cover"
            />
            <div className="flex flex-col justify-between flex-1 p-6 bg-white dark:bg-gray-800">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                  Project 2
                </h3>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                  Nullam accumsan, quam ut feugiat commodo, nulla massa dictum
                  nisi, in cursus lacus orci et elit.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex items-center justify-center py-4 bg-gray-100 dark:bg-gray-900">
        <a
          href="#"
          className="mx-2 text-gray-700 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-300"
          aria-label="Facebook"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className=" h-6 w-6"
          >
            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
          </svg>
        </a>
        <a
          href="#"
          className="mx-2 text-gray-700 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-300"
          aria-label="Twitter"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className=" h-6 w-6"
          >
            <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
          </svg>
        </a>
        <a
          href="#"
          className="mx-2 text-gray-700 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-300"
          aria-label="LinkedIn"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class=" h-6 w-6"
          >
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
            <rect width="4" height="12" x="2" y="9"></rect>
            <circle cx="4" cy="4" r="2"></circle>
          </svg>
        </a>
      </footer>
    </div>
  );
}

export default UserDetail;
