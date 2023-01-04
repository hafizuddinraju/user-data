import { useQuery } from "@tanstack/react-query";
import React from "react";
import SmallSpinner from "../Spinner/SmallSpinner";

const Team = () => {
  const {
    data: teams,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["teams"],
    queryFn: async () => {
      try {
        const res = await fetch(`https://server-user.vercel.app/team`);
        const data = await res.json();
        return data.data;
      } catch (error) {
        // toast.error(error.message, { autoClose: 500 });
      }
    },
  });
  if (isLoading) {
    return <SmallSpinner></SmallSpinner>;
  }
  return (
    <div className="px-4  py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="mx-auto mb-10 lg:max-w-xl sm:text-center">
        <p className="inline-block px-3 py-px mb-4 text-3xl font-bold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
          Discover Our Team
        </p>
      </div>
      <div className="grid gap-10  mx-auto sm:grid-cols-2 lg:grid-cols-4 lg:max-w-screen-lg">
        {teams?.map((team) => {
          return (
            <div key={team._id} className="shadow-md rounded-md">
              <div className="relative pb-56 mb-4 rounded shadow lg:pb-64">
                <img
                  className="absolute object-cover w-full h-full rounded"
                  src={team?.avatar}
                  alt="Person"
                />
              </div>
              <div className="flex flex-col sm:text-center">
                <p className="text-lg font-bold">
                  {team?.first_name} {team?.last_name}
                </p>
                <p className="mb-5 text-xs text-gray-800">{team?.domain}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Team;
