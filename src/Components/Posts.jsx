import React from "react";
import useFetch from "./UseFetch";
const Posts = () => {
  const url2 = "https://jsonplaceholder.typicode.com/users";
  const [data, loading, error] = useFetch(url2);

  if (error) {
    return <div className="text-amber-50">error</div>;
  }
  {
    loading ? <h1>Loading...</h1> : "";
  }
 
  return (
    <div>
      {data?.slice(0,4)?.map((item) => {
        return (
          <div
            key={item.id}
            className="border border-green-300 rounded-2xl p-3"
          >
            <h6>{item.id}</h6>
            <h6>{item.name}</h6>
            <h6>{item.email}</h6>
          </div>
        );
      })}
    </div>
  );
};

export default Posts;
