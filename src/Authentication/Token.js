export const logout = () => {

    localStorage.removeItem("token");
    localStorage.removeItem("id");
    localStorage.removeItem("email");
    localStorage.removeItem("role");
    localStorage.removeItem("value");
};

export const token = (() => localStorage.getItem("token"));