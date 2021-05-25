export const getters = {
    isAuthenticated(state) {
      console.log(state.auth.loggedIn);
      return state.auth.loggedIn;
    },
  
    loggedInUser(state) {
      console.log(state.auth.user);
      return state.auth.user;
    },
  };