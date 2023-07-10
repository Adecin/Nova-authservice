INSTALLING THIS PACKEGE

    use this command : npm i https://github.com/Adecin/Nova-authservice.git


USAGE 

const {createJsonWebToken,verifyUsers}=require(")

CREATE A JSONWEBTOKEN

    example ---

        const token = createJsonWebToken({
            name:"vijay",
            role:"admin"
        })

VERIFY A JSONWEBTOKEN

    using like middleware

    example--

        app.get("/some_url",verifyUsers(),your_function_name)

        verification after you get decoded values from req.userDetails

    if you need role bassed verfication 

        app.get("/some_url",verifyUsers(["admin","developer"]),your_function_name)