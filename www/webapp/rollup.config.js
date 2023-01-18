import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import terser from "@rollup/plugin-terser";

export default {
  input: "src/creatures.js",
  output: {
    file: "dist/creatures-dist.js",
    format: "iife",
    name: "creatures",
  },
  plugins: [
    resolve({
      browser: true,
    }),
    commonjs(),
    terser(),
  ],
};
