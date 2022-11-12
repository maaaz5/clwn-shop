import Home from "./routes/home/home.component";
import Nav from "./routes/navigation/navigation.component";
import SingIn from "./routes/sign-in/sign-in.component";
import { Routes, Route } from "react-router-dom";

const App = () => {
  const Shop = () => {
    return <h1>shop page </h1>;
  };

  return (
    <Routes>
      <Route path="/" element={<Nav />}>
        <Route index={true} element={<Home />} />
        <Route path="sign-in" element={<SingIn />} />
        <Route path="shop" element={<Shop />} />
      </Route>
    </Routes>
  );
};

export default App;
