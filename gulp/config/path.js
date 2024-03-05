import * as nodePath from "path";
const rootFolder = nodePath.basename(nodePath.resolve());

const distFolder = "./docs";
const srcFolder = "./src";

export const path = {
    build: {
        html: `${distFolder}/`,
        css: `${distFolder}/css/`,
        files: `${distFolder}/imports/`,
        js: `${distFolder}/js/`,
        includes: `${distFolder}/`,
    },
    src: {
        html: `${srcFolder}/*.html`,
        includes: `${srcFolder}/includes/**/*.*`,
        scss: `${srcFolder}/scss/style.scss`,
        js: `${srcFolder}/js/**/*.js`,
        files: `${srcFolder}/imports/**/*.*`
    },
    watch: {
        html: `${srcFolder}/**/*.html`,
        scss: `${srcFolder}/scss/**/*.scss`,
        js: `${srcFolder}/js/**/*.js`,
        files: `${srcFolder}/imports/**/*.*`,
        includes: `${srcFolder}/includes/**/*.*`
    },
    clean: distFolder,
    buildFolder: distFolder,
    srcFolder: srcFolder,
    watchFolder: rootFolder,
    ftp: ``
};