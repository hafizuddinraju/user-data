import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { fetchUsers } from "../../features/users/userSlice";
import Pagination from "../Pagination/Pagination";
import SmallSpinner from "../Spinner/SmallSpinner";

export const Content = ({ query, setQuery }) => {
  const { isLoading, users, error } = useSelector((state) => state.users);
  const [data, setData] = useState([]);
  const navigate = useNavigate()
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(20);
  const [spinner, setSpinner] = useState(false)

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUsers());
    setData(users);
  }, []);

  console.log(data.data);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(
        `https://server-user.vercel.app/users?q=${query}`
      );
      setData(res.data);
    };
    if (query.length === 0 || query.length > 2) fetchData();
  }, [query]);

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = data?.data?.slice(firstPostIndex, lastPostIndex);

  const handlePost = (id) => {
    const dataFilter = data?.data?.filter((user) => user._id === id);
    console.log(dataFilter[0]);
    fetch("https://server-user.vercel.app/team", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(dataFilter[0]),
    })
      .then((res) => res.json())
      .then((data) => {
        setSpinner(false)
        toast.success(data.message, { autoClose: 500 });
        navigate('/team')
      })
      .catch((error) => {
        setSpinner(false)
        toast.error(error.message, { autoClose: 500 });
      });
  };
  if(!data){
    return <SmallSpinner></SmallSpinner>;

  }
  if (isLoading) {
    return <SmallSpinner></SmallSpinner>;
  }
  const handleSpinner = (id)=>{
    const spin = data?.data?.filter((user) => user._id === id)
    if(spin[0]){
      setSpinner(true)
    }
   
    
    

  }
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="grid gap-4 row-gap-5 mb-8 lg:grid-cols-4 lg:row-gap-8">
        {currentPosts?.map((user) => {
          return (
            <div key={user._id} className="p-6 rounded shadow-md">
              <img
                className="object-cover w-full h-56 mb-6 rounded  md:h-64 xl:h-80"
                src={user?.avatar}
                alt=""
              />
              <p className="mb-2 text-xl font-bold leading-none sm:text-2xl">
                {user?.first_name} {user?.last_name}
              </p>
              <p className="text-gray-700">Email: {user?.email}</p>

              <div className="text-gray-700 flex justify-between items-center">
                <p>Domain: {user?.domain}</p>
                <p>Gender: {user?.gender}</p>
              </div>
              <div
                
                className="text-gray-700 text-center mt-4"
              >
                {user?.available === true ? (
                  <button onClick={() => {handlePost(user?._id); handleSpinner(user?._id)}} className="bg-sky-500 py-1 px-4 rounded-md text-white">
                    {spinner? <SmallSpinner></SmallSpinner> : "Available"}
                  </button>
                ) : (
                  <button
                    disabled
                    className="bg-gray-500 py-1 px-4 rounded-md text-white"
                  >
                    Not Available
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>
      <div className="text-center">
        <Pagination
          totalPosts={data?.data?.length}
          postsPerPage={postsPerPage}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        ></Pagination>
      </div>
    </div>
  );
};

export default Content;
