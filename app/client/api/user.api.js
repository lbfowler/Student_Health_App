const UserAPI = {
    async loginAsync(username, password){
        if (username == null || password == null) {
            return {
                success: false,
                message: 'Username and password cannot be null',
            };
        }
        const response = await fetch('http://sandcatgo.com:8888/login', {
            method: 'POST',
            headers: {
                Accept: 'application/json', 'Content-Type': 'application/json',
            },
            body:  JSON.stringify({
                username: username,
                password: password,
            }),
        })
        const result = await response.json();
        return result;
    },

}
export default UserAPI;