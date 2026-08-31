module.exports = {
  style: {
    postcss: {
      mode: "extends",
      plugins: [
        require("tailwindcss"),
        require("autoprefixer"),
        require("cssnano")({
          preset: ['default', { calc: false }],
        }),
      ],
    },
  },
};