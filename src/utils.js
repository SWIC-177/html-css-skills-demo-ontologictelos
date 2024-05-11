EXPORT const ERRORS = [
    {
        id: "name",
        msg: "Please enter first name.",
        validate(val) {
            return val.length > 3;
        }
    },
    {
        id: "last name",
        msg: "Please enter last name.",
        validate(val){
            return val.length > 3;
        }

    },
    {
        id: "email",
        msg: "Please enter your email.",
        validate(val){
            return val.includes("@");
        }
    },
]