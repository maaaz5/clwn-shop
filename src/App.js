import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";

import {
  createUserDocumentFromAuth,
  onUserStateChanged,
} from "./utils/firebase/firebase.utils";
import { setCurrentUser } from "./store/user/user.action";

import Home from "./routes/home/home.component";
import Nav from "./routes/navigation/navigation.component";
import Authentication from "./routes/authentication/authentication.component";
import Shop from "./routes/shop/shop.component";
import Checkout from "./routes/checkout/checkout.component";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const unsubscribe = onUserStateChanged(async (user) => {
      if (user) {
        await createUserDocumentFromAuth(user);
      }
      dispatch(setCurrentUser(user));
    });

    return unsubscribe;
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Nav />}>
        <Route index={true} element={<Home />} />
        <Route path="auth" element={<Authentication />} />
        <Route path="shop/*" element={<Shop />} />
        <Route path="checkout" element={<Checkout />} />
      </Route>
    </Routes>
  );
};

export default App;
