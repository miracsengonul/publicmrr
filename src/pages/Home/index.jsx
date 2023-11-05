import UserCard from "../../components/Cards/UserCard.jsx";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { supabase } from "../../utils/supabase.js";

function Home() {
  const [users, setUsers] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getUsers();
    getProducts();
  }, []);

  async function getUsers() {
    const { data } = await supabase.from("user_list").select();
    setUsers(data);
  }

  async function getProducts() {
    const { productsData } = await supabase.from("products").select("*");
    setProducts(productsData);
  }

  return (
    <>
      <div className="w-full flex justify-center mx-auto">
        <div className="mt-8 rounded-md text-xl">
          Getting lost in social media or other channels can be frustrating.
          Expand your network and find success with us.
        </div>
      </div>
      <div className="flex flex-col items-center justify-center pt-12">
        <div className="text-2xl mb-2 capitalize font-extrabold">
          waiting for its first sale
        </div>
        <div className="mb-8 text-zinc-500">
          make the first sale for a new product here
        </div>
        <div className="mt-8 mb-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 gap-8 content-start">
          <div className="w-[20rem] lg:w-[18rem] 2xl:w-[24rem] h-auto cursor-pointer hover:drop-shadow-md group pl-[20px] pr-[20px] 2xl:pl-[35px] 2xl:pr-[35px] bg-white rounded-3xl drop-shadow">
            <div className="flex flex-col items-center gap-x-3 mt-4 min-h-[6rem]">
              <img
                className="w-16 h-16 rounded-3xl object-cover"
                src="/logo.png"
                width="70"
                alt="user"
              />
              <div className="mt-4 flex flex-col">
                <div className="text-black text-xl xl:text-2xl font-medium">
                  Public MRR
                </div>
              </div>
            </div>
            <div className="mt-8 mb-6">
              <div className="text-center">
                <div className="text-zinc-700 text-base">
                  Public MRR is the place to follow leading personalities and be
                  featured.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex pt-4 flex-col items-center justify-start">
        <span className="text-2xl mr-1.5">For</span>
        <span className="text-2xl mb-8 uppercase font-extrabold">
          November 2023
        </span>
        <div className="mt-8 mb-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 gap-8 content-start">
          {users &&
            users.map((user, index) => (
              <Link to={`/user/${user.slug}`} key={index}>
                <UserCard user={user} />
              </Link>
            ))}
        </div>
      </div>
    </>
  );
}

export default Home;
