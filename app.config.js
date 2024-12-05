const IS_DEV = process.env.APP_VARIANT === "development";
const IS_PREVIEW = process.env.APP_VARIANT === "preview";

const getUniqueIdentifier = () => {
  if (IS_DEV) {
    return "com.koushik2208.featuresApp.dev";
  }

  if (IS_PREVIEW) {
    return "com.koushik2208.featuresApp.preview";
  }

  return "com.koushik2208.featuresApp";
};

const getAppName = () => {
  if (IS_DEV) {
    return "featuresApp (Dev)";
  }

  if (IS_PREVIEW) {
    return "featuresApp (Preview)";
  }

  return "featuresApp: Features App";
};

export default {
  expo: {
    name: getAppName(),
    slug: "featuresApp",
    version: "1.0.0",
    orientation: "portrait",
    icon: "./assets/images/icon.png",
    scheme: "myapp",
    userInterfaceStyle: "automatic",
    newArchEnabled: true,
    ios: {
      bundleIdentifier: getUniqueIdentifier(),
      supportsTablet: true,
    },
    android: {
      adaptiveIcon: {
        foregroundImage: "./assets/images/adaptive-icon.png",
        backgroundColor: "#ffffff",
      },
      package: getUniqueIdentifier(),
    },
    web: {
      bundler: "metro",
      output: "static",
      favicon: "./assets/images/favicon.png",
    },
    plugins: [
      "expo-router",
      [
        "expo-splash-screen",
        {
          image: "./assets/images/splash-icon.png",
          imageWidth: 200,
          resizeMode: "contain",
          backgroundColor: "#ffffff",
        },
      ],
    ],
    experiments: {
      typedRoutes: true,
    },
    extra: {
      router: {
        origin: false,
      },
      eas: {
        projectId: "3bda67a4-df99-4c30-9cfd-9a5ad428b895",
      },
    },
    owner: "koushik2208",
  },
};
