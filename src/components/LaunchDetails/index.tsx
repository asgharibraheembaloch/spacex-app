import React from "react";
import { useLaunchInfoQuery } from "../../generated/graphql";
import LaunchDetails from "./LaunchDetails";

interface OwnProps {
  id: number;
}

const LaunchDetailsContainer: React.FC<OwnProps> = ({ id }) => {
  const { data, error, loading, refetch } = useLaunchInfoQuery({
    variables: { id: String(id) },
  });
  React.useEffect(() => {
    refetch({ id: String(id) });
  }, [refetch, id]);
  if (loading) {
    return <div>Data is Loading</div>;
  }
  if (error) {
    return <div>There was an Error</div>;
  }
  if (!data) {
    return <div>Please select mission for it's details</div>;
  }
  return <LaunchDetails data={data} />;
};

export default LaunchDetailsContainer;
