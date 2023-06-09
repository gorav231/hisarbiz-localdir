import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Context/UserContext";

const useUser = () => {
  const { user } = useContext(AuthContext);
  const [isUser, setIsUser] = useState(false);
  const [isUserLoading, setIsUserLoading] = useState(true);
  useEffect(() => {
    if (user?.email) {
      fetch(`http://localhost:8000/users/user/${user?.email}`)
        .then((res) => res.json())
        .then((data) => {
          setIsUser(data?.isUser);
          setIsUserLoading(false);
        });
    }
  }, [user?.email, setIsUser]);
  return [isUser, isUserLoading];
};

export default useUser;
