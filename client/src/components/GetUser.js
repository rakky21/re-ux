import React, { useEffect } from "react";
import { useQuery, gql } from "@apollo/client";
import { QUERY_USER } from "../utils/queries";

function GetUsers() {
  const { error, loading, data } = useQuery(QUERY_USER);

  useEffect(() => {
    console.log(data);
  }, [data]);
  return <div></div>;
}
