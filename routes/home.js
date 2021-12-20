module.exports = (req, res) => {

    console.log("home page loaded");
    res.json({ message: "home page" });
}