export const setToken = (value:any) => {
    try {
      localStorage.setItem("access_token", value)
    } catch (error) {
      console.log(error)
    }
  }
  
  export const logout = () => {
    try {
        localStorage.removeItem("access_token")
        localStorage.removeItem("email")
        localStorage.removeItem("username")
        window.location.href = '/admin/login'
    } catch (error) {
        console.log(error);
    }
  }
  
  export const getToken = () => {
    return localStorage.getItem("access_token")}