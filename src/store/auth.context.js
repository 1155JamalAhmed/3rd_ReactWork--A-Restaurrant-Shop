import React from "react";
const AuthContext = React.createContext({
  showCartHandler: () => {},
  hideCartHandler: () => {}
});

export default AuthContext;
