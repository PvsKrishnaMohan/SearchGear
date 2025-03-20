import React from "react";
import useFetch from "./UseFetch";
const API = () => {

  const url1 = "https://jsonplaceholder.typicode.com/todos";
  const [data, loading, error ] = useFetch(url1);
  if (error) {
    return <div className="text-amber-50">error</div>;
  }
  {
    loading ? <h1>Loading...</h1> : "";
  }
  return (
    <div>
      {data?.slice(0,5)?.map((item) => {
        return (
          <div key={item.id} className="border border-amber-300 rounded-2xl p-3">
            <h6>{item.id}</h6>
            <h6>{item.title}</h6>
            <h6>{JSON.stringify(item.completed)}</h6>
          </div>
        );
      })}
    </div>
  );
};

export default API;
