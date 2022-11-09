export const createNewUser = async (name, email, password, role) => {
    return await fetch("https://lab-api-bq.herokuapp.com/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            name: name,
            email: email,
            password: password,
            role: role,
            restaurant: "Mommy's Burger",
        }),

    }).then(res => res.json())
        .catch((error) => {
            alert(error);
        });
};

export const doLogin = async (email, password) => {
    return await fetch("https://lab-api-bq.herokuapp.com/auth", {
        method: "POST",
        headers: {
            "Content-Type": "application/json; charset=UTF-8",
        },
        body: JSON.stringify({
            email: email,
            password: password
        })
    }).then(res => res.json())
        .catch((error) => {
            alert(error);
        });
};

export function emailValidation(email) {
    const emailRegex = /^^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return emailRegex.test(String(email).toLowerCase());
}

export function passwordValidation(password) {
    const passRegex = /^(.{0,7}|[^0-9]*|[^A-Z]*|[^a-z]*|[a-zA-Z0-9]*)$/;
    return passRegex.test(String(password));
}