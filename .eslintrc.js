module.exports = {
  settings: {
    "import/resolver": {
      alias: {
        map: [
          "@src",
          ["./src"],
          "@features/dashboard",
          ["./src/features/dashboard"],
          "@features/login",
          ["./src/features/login"],
          "@assets/colors",
          ["./src/assets/colors"],
          "@components",
          ["./src/components"],
          "@constants",
          ["./src/constants"],
          "@hooks",
          ["./src/utils/hooks"],
          "@features",
          ["./src/features"],
          "@services",
          ["./src/services"],
          "@router",
          ["./src/router"],
          "@config",
          ["./src/config"],
          "@utils",
          ["./src/utils"],
          "@core",
          ["./src/core"],
        ],
        extensions: [".ts", ".js", ".jsx", ".json"],
      },
    },
  },
};
