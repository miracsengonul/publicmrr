import {useEffect, useState} from "react";
import {supabase} from "../../utils/supabase.js";
import {useParams} from "react-router-dom";

function UserDetail() {
  const {slug} = useParams()
  const [user, setUser] = useState([]);

  const moneyFormatter = (number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
    }).format(number);
  };

  useEffect(() => {
    getUser();
  }, []);
  async function getUser() {
    const { data:user_list } = await supabase.from("user_list").select().eq('slug', slug).single();
    const userData = user_list;
    const { data:products } = await supabase.from("products").select().eq('user_id', userData.id);
    setUser({...userData, products});
  }
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-zinc-950">
      <header className="flex flex-col items-center pt-12 pb-8">
        <img
          src={user.image}
          alt="Profile picture"
          className="w-48 h-48 rounded-full border-4 p-1"
        />
        <h1 className="mt-4 text-2xl font-semibold text-gray-900 dark:text-gray-100">
          {user.name}
        </h1>
        <p className="mt-2 text-center text-gray-600 dark:text-gray-400 max-w-xs">
          {user.about}
        </p>
      </header>
      <main className="flex-1 w-full max-w-4xl p-4 mx-auto">
        <h2 className="text-xl text-zinc-600 dark:text-gray-100">
          Projects
        </h2>
        <section className="grid gap-8 mt-8 sm:grid-cols-1 md:grid-cols-2">
          { user.products && user.products.map((product, productIndex) => (
              <div key={productIndex} className="flex flex-col items-center overflow-hidden">
                <img
                    src={product.image}
                    alt={product.product_name}
                    className="h-48 object-contain rounded-xl"
                />
                <div className="flex flex-col justify-center flex-1 p-6 bg-white dark:bg-gray-800">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                        {product.product_name}
                    </h3>
                    <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                        {product.long_description}
                    </p>
                    <p className="mt-2 text-base font-bold line-clamp-6 text-ellipsis text-gray-950 dark:text-gray-400">
                      MRR:  {moneyFormatter(product.mrr[0].mrr)}
                    </p>
                  </div>
                </div>
              </div>
            ))
          }
        </section>
      </main>
      <footer className="flex items-center justify-center py-4 bg-gray-100 dark:bg-gray-900">
        <a
          href={user.twitter}
          target="_blank"
          rel="noreferrer"
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
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className=" h-6 w-6"
          >
            <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
          </svg>
        </a>
        <a
          href={user.linkedin}
          target="_blank"
          rel="noreferrer"
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
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className=" h-6 w-6"
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
