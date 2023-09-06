class Authentication {
    setLoggedUser(username) {
        sessionStorage.setItem("authenticateUser", username);
    }

    getLoggedUser() {
        let username = sessionStorage.getItem("authenticateUser");
        return username;
    }

    isUserLoggedIn() {
        let user = this.getLoggedUser();
        if (user){
            return true
        }else{
            return false
        }
    }

    logout() {
        sessionStorage.removeItem("authenticateUser");
    }
}

export default new Authentication();
