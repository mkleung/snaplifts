const auth = {
    users: [
        { id: 1, name: "test", age: 30, email: "test@test.com", password: "test" },
        { id: 2, name: "mike", age: 30, email: "mike@test.com", password: "test" }
    ],
    isAuthenticated: false,
    authenticatedUser: null,
    addUser(name, email, password) {
        let users = this.users;
        let lastUser = users[users.length - 1];
        users.push({ id: lastUser.id + 1, name: name, email: email, password: password });
    },
    login(id) {
        this.isAuthenticated = true;

        const authUser = this.users.find(user => user.id === id)
        this.authenticatedUser = authUser;
    },
    logout() {
        this.isAuthenticated = false;
        this.authenticatedUser = null;
    }
};
export default auth;
