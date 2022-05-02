import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Redirect = () => {
  const history = useNavigate();
  const { id } = useParams();
  useEffect(() => {
    history.push(`/restaurant/${id}/overview`);
  }, []);

  return <div></div>;
};

export default Redirect;