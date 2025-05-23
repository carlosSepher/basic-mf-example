const { runtime } = require("webpack");

module.exports = function(api){
    api.cache(true);
    const presets = [
        '@babel/preset-env',["@babel/preset-react",{runtime: "automatic"}]
    ]

    const plugins = [];

    return {
        presets,
        plugins,
    };
}