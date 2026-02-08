const fetch = require("node-fetch");

exports.handler = async function (event) {
    try {
        const body = JSON.parse(event.body);
        const token = body["g-recaptcha-response"]; // Only receive the token

        if (!token) {
            return {
                statusCode: 400,
                body: JSON.stringify({ success: false, message: "Missing reCAPTCHA token" }),
            };
        }

        const secretKey = "6LeZ5c4qAAAAAPBsAalvZCa8sZD86J9EMB9b-Q5b";
        const response = await fetch("https://www.google.com/recaptcha/api/siteverify", {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
            body: new URLSearchParams({
                secret: secretKey,
                response: token,
            }),
        });

        const verificationResult = await response.json();

        return {
            statusCode: 200,
            body: JSON.stringify(verificationResult),
        };
    } catch (error) {
        console.error("Error verifying reCAPTCHA:", error);
        return {
            statusCode: 500,
            body: JSON.stringify({ success: false, message: "Internal server error" }),
        };
    }
};
