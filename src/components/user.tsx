import { useEffect, useState } from "react";

import axios from "axios";

const User = () => {
  const [user, setUser] = useState<{ [key: string]: string } | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users/1"
      );

      setUser(response.data);
    };

    fetchData();
  }, []);

  if (!user) {
    return "Loading...";
  }

  return <div>{user.name}</div>;
};

export default User;
