export default {
    email: {
        name: "email",
        placeholder: "Email",
        labelText: "Email",
        type: "text",
        wrapperClass: "flex flex-col space-y-1",
        validation: ["required", "email"],
    },
    password: {
        name: "password",
        placeholder: "Password",
        labelText: "Password",
        type: "password",
        wrapperClass: "flex flex-col space-y-1 mb-4",
        validation: ["required"],
    },
}