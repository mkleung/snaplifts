const auth = {
    users: [
        { id: 1, name: "test", age: 30, email: "test@test.com", password: "test" },
        { id: 2, name: "mike", age: 30, email: "mike@test.com", password: "test" }
    ],
    isAuthenticated: false,
    authenticatedUser: null,
    addUser(name, email, age, password) {
        let users = this.users;
        let lastUser = users[users.length - 1];
        users.push({ id: lastUser.id + 1, name: name, age: parseInt(age), email: email, password: password });
    },
    login(id) {
        this.isAuthenticated = true;
        const authUser = this.users.find(user => user.id === id)
        this.authenticatedUser = authUser;

        localStorage.setItem('snaplifts_login', JSON.stringify(this.authenticatedUser));

        return authUser;
    },
    logout() {
        this.isAuthenticated = false;
        this.authenticatedUser = null;

        localStorage.removeItem("snaplifts_login");
    }
};
export default auth;
