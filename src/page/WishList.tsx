/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { useGetWishListQuery } from "../redux/features/books/booksApi";
import { useAppSelector } from "../redux/hook";

const WishList = () => {
  const { user } = useAppSelector((state) => state.user);
  const { data, isLoading } = useGetWishListQuery({
    email: user.email,
    status: 1,
  },{
    refetchOnFocus:true,
    refetchOnMountOrArgChange:true
  });
  if (isLoading) {
    return <h1>Loading...</h1>;
  }


  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold underline text-gray-600 text-center mb-5">White List </h1>
      <div className="grid lg:grid-cols-4 gap-10 mx-3">
        {data?.data?.map((item:any) => (
       <div className="card  bg-base-100 shadow-xl">
       <div className="card-body">
         <h2 className="card-title">{item?.book?.title}</h2>
         <p>{item?.book?.description}</p>
       </div>
       <figure><img className="h-[200px] w-[100%]" src={item?.book?.image} alt="Shoes" /></figure>
     </div>
        ))}
      </div>
    </div>
  );
};

export default WishList;
