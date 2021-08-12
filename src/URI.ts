let URI = "";

if (process.env.NODE_ENV === "production") {
    URI = "https://infinite-bayou-56493.herokuapp.com";
} else {
    URI = "http://localhost:4000";
}

export default URI;
