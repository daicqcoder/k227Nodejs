module.exports = {
    app: {
        port: 3000,
        static_folder: `${__dirname}/../src/public`,
        router: `${__dirname}/../src/routers/web.js`,
        views_folder: `${__dirname}/../src/apps/views`,
        view_engine: "ejs",
        session_key: "vietpro",
    },


}