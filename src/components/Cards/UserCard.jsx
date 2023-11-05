import { useState } from "react";

function UserCard({ user }) {
  const moneyFormatter = (number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
    }).format(number);
  };

  return (
    <div className="w-[20rem] lg:w-[18rem] pb-0.5 2xl:w-[24rem] h-auto cursor-pointer hover:drop-shadow-md group pl-[20px] pr-[20px] 2xl:pl-[35px] 2xl:pr-[35px] bg-white rounded-3xl drop-shadow">
      <div className="flex items-center gap-x-3 mt-2 min-h-[6rem]">
        <img
          className="w-16 h-16 rounded-3xl object-cover hover:scale-125 hover:rounded delay-75 transition-all"
          src={user.image}
          width="70"
          alt="user"
        />
        <div className="flex flex-col">
          <div className="text-black text-xl xl:text-2xl font-medium">
            {user.name}
          </div>
        </div>
      </div>
      <div className="flex mt-2">
        <div>
          <div className="flex items-center gap-x-2 text-zinc-500 text-sm mb-2">
            <img src="/schnuller.png" alt="" width="22" />
            Favorite Baby
          </div>
          <div className="mt-4 ">
            <div className="flex gap-x-4 items-center inset-0">
              {
                <img
                  className="w-10 h-10 xl:max-w-12 xl:max-h-12 bg-blend-multiply rounded-lg object-contain"
                  src={user.products[user.favorite_product].image}
                  alt="product"
                  data-tooltip-id="product-tooltip"
                  data-tooltip-content={
                    user.products[user.favorite_product].name
                  }
                />
              }
              <span className="text-sm line-clamp-2 text-ellipsis">
                {user.products[user.favorite_product].description}
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-8 mb-6">
        <div className="flex justify-between items-center">
          <div className="text-zinc-400 text-base">Total MRR</div>
          <div className="text-right text-black text-xl xl:text-2xl font-semibold">
            {moneyFormatter(user.total_mrr)}
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserCard;
