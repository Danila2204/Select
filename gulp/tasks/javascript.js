import webpack from "webpack-stream";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const javascript = () => {
    return app.gulp.src(app.path.src.js)
    .pipe(webpack({
        context: path.resolve(__dirname, "../", "../", "src"),
        mode: "development",
        entry: {
            main: "./js/app.js",
        },
        output: {
            filename: "[name].js",
            path: path.resolve(__dirname, "../", "../", "docs")
        }
    }))
    .pipe(app.gulp.dest(app.path.build.js))
    .pipe(app.plugins.browserSync.stream());
}