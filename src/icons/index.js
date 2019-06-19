const path = require("path");

module.exports = {
  icons: [
    {
      id: "fa",
      name: "Font Awesome",
      contents: [
        {
          files: path.resolve(
            "./node_modules/@fortawesome/fontawesome-pro/svgs/+(brands|solid)/*.svg"
          ),
          formatter: name => `Fa${name}`
        },
        {
          files: path.resolve(
            "./node_modules/@fortawesome/fontawesome-pro/svgs/regular/*.svg"
          ),
          formatter: name => `FaReg${name}`
        },
        {
          files: path.resolve(
            "./node_modules/@fortawesome/fontawesome-pro/svgs/light/*.svg"
          ),
          formatter: name => `FaLi${name}`
        }
      ],
      projectUrl: "https://fontawesome.com/",
      license: "CC BY 4.0 License",
      licenseUrl: "https://creativecommons.org/licenses/by/4.0/"
    },
  ]
};
