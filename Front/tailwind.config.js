const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
    content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                Epilogue: ["Epilogue", "sans-serif;"],
            },
            backgroundImage: {
                'discos': "url('../public/nosotros_discos.png')",
            },
        },
    },
    plugins: [],
});
