import React from "react";
import { useLaunchesQuery } from "../../generated/graphql";
import Launch, { OwnProps } from "./Launch";

const LaunchContainer: React.FC<OwnProps> = (props) => {
  const { data, error, loading } = useLaunchesQuery();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error || !data) {
    return <div>ERROR</div>;
  }

  return <Launch data={data} {...props} />;
};

export default LaunchContainer;
