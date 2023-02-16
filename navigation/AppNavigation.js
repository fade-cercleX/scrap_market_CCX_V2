import React from "react";
import Authenticated from "./Authenticated";
import UnAuthenticated from "./UnAuthenticated";
import { NavigationContainer } from "@react-navigation/native";

const AppNaigation = () => {
  return (
    <NavigationContainer>
      <Authenticated />
    </NavigationContainer>
  );
};

export default AppNaigation;
