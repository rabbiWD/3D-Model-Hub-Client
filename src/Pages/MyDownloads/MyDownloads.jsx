import React, { use, useEffect, useState } from "react";
import { ModelCard } from "../../Components/ModelCard";
import { AuthContext } from "../../Context/AuthContext";

const MyDownloads = () => {
  const { user } = use(AuthContext);
  const [models, setModels] = useState([]);
  const [loading, setLoding] = useState(true);

  useEffect(() => {
    fetch(`https://3d-model-hub-server-three.vercel.app/my-downloads?email=${user.email}`, {
      headers: {
        authorization: `Bearer ${user.accessToken}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setModels(data);
        setLoding(false);
      });
  }, [user]);

  if (loading) {
    return <div>Please wait...Loadind..</div>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
      {models.map((model) => (
        <ModelCard key={model._id} model={model} />
      ))}
    </div>
  );
};

export default MyDownloads;
