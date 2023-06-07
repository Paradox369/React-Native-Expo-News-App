const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---readme-md": hot(preferDefault(require("D:\\ICTU STUDY\\SPRING 2023\\ANDROID APP DEVELOPMENT\\React-Native-Expo-News-App\\README.md"))),
  "component---src-pages-404-js": hot(preferDefault(require("D:\\ICTU STUDY\\SPRING 2023\\ANDROID APP DEVELOPMENT\\React-Native-Expo-News-App\\.docz\\src\\pages\\404.js")))
}

