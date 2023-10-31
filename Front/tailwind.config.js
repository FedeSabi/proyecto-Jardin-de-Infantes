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
                'cuna': "url('../public/servicios_cuna.png')",
                'jardin': "url('../public/servicios_jardin.png')",
                'guarderia': "url('../public/servicios_guarderia.png')",
                'psicopedagogia': "url('../public/servicios_psicopedagogia.png')",
                'temprana': "url('../public/servicios_temprana.png')",
                'talleres': "url('../public/servicios_talleres.png')",
                'cocina': "url('../public/servicios_cocina.png')",
                'escuela': "url('../public/servicios_escuela.png')",
            },
        },
    },
    plugins: [],
});
