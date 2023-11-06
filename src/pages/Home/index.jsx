import UserCard from "../../components/Cards/UserCard.jsx";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { supabase } from "../../utils/supabase.js";

function Home() {
  const [users, setUsers] = useState([]);
  const [startupProducts, setStartupProducts] = useState([]);

  useEffect(() => {

    async function getProductsWithUsers() {
      const { data:products } = await supabase.from("products").select();
      setStartupProducts(products);

      const { data:user_list } = await supabase.from("user_list").select();
      const newUserList = user_list.map((user) => {
        startupProducts.filter((product) => {
          return product.user_id === user.id;
        });
        return { ...user, products };
      })

      setUsers(newUserList);
    }

    getProductsWithUsers();
  }, []);

  return (
    <>
      <div className="mt-8 w-full md:w-1/3 mx-auto">
        <div className="flex p-5 rounded-lg shadow bg-white">
          <div>
            <svg className="w-6 h-6 fill-current text-yellow-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z"/></svg>
          </div>
          <div className="ml-3">
            <h2 className="font-semibold text-gray-800">Happy exploring,</h2>
            <p className="mt-2 text-sm text-gray-600 leading-relaxed">
              If you are <b>already</b> making money online, you can submit your profile.
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center pt-12">
        <div className="text-2xl mb-2 capitalize font-extrabold bg-gradient-to-r from-fuchsia-600 to-pink-600 bg-clip-text text-transparent">
          waiting for its first sale
        </div>
        <div className="mb-8 text-zinc-500">
          make the first sale for a new product here
        </div>
        <div className="mt-8 mb-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 gap-8 content-start">
            {startupProducts &&
                startupProducts.map((product, index) => (
                    product.showcase && (
                        <Link to={product.link} key={index} target='_blank' rel='noreferrer'>
                          <div className="w-[20rem] lg:w-[18rem] pt-4 pb-4 2xl:w-[24rem] h-auto cursor-pointer hover:drop-shadow-md group pl-[20px] pr-[20px] 2xl:pl-[35px] 2xl:pr-[35px] bg-white rounded-3xl drop-shadow">
                            <div className="flex flex-col items-center gap-x-3 mt-4 mb-4 min-h-[6rem]">
                              <img
                                  className="w-16 h-16 rounded-3xl object-cover"
                                  src={product.image}
                                  width="70"
                                  alt="user"
                              />
                              <div className="mt-4 flex flex-col">
                                <div className="text-black text-xl xl:text-2xl font-medium">
                                  {product.product_name}
                                </div>
                              </div>
                            </div>
                            <div className="mt-8">
                              <div className="text-center">
                                <div className="text-zinc-700 text-base line-clamp-2 text-ellipsis">
                                  {product.short_description}
                                </div>
                              </div>
                            </div>
                          </div>
                        </Link>
                    )
            ))}
        </div>
      </div>
      <div className="flex pt-4 flex-col items-center justify-start">
        <span className="text-2xl mr-1.5">For</span>
        <span className="text-2xl mb-6 uppercase font-extrabold">
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
