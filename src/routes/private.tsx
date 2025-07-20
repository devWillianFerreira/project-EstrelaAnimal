import { ReactNode, useContext, useEffect } from "react";
import { userContext } from "../context/userContext";
import { useNavigate } from "react-router-dom";
import { cartContext } from "../context/cartContext";

interface PrivateProps {
  children: ReactNode;
}
const Private = ({ children }: PrivateProps) => {
  const { signed } = useContext(userContext);
  const { cartAmount } = useContext(cartContext);
  const navigate = useNavigate();
  useEffect(() => {
    if (!signed && cartAmount == 0) {
      navigate("/", { replace: true });
    }
  }, []);
  return children;
};

export default Private;
