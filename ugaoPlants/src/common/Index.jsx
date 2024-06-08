const backendDomin = "http://localhost:8081";

const SummaryApi = {
  signUP: {
    URL: `${backendDomin}/api/signup`,
    method: "post",
  },
  signIn: {
    url: `${backendDomin}/api/signin`,
    method: "post",
  },
  current_user : {
    url : `${backendDomin}/api/user-details`,
    method : "get"
  },
  logout_user : {
    url : `${backendDomin}/api/userLogout`,
    method : "get"
  }
};

export default SummaryApi;
