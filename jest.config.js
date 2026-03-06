module.exports = {
  collectCoverage: true,
  coverageProvider: "v8",
  collectCoverageFrom: [
    "lib/helpers/**/*.{js,jsx,ts,tsx}",
    "lib/api/**/*.{js,jsx,ts,tsx}",
    "!**/*.d.ts",
    "!**/node_modules/**",
    "!<rootDir>/out/**",
    "!<rootDir>/.next/**",
    "!<rootDir>/*.config.{js,ts}",
    "!<rootDir>/coverage/**",
  ],

  testMatch: ["**/__tests__/**/*.[jt]s?(x)", "**/?(*.)+(spec|test).[jt]s?(x)"],

  moduleNameMapper: {
    "^.+\\.module\\.(css|sass|scss)$": "identity-obj-proxy",
    "^.+\\.(css|sass|scss)$": "<rootDir>/__mocks__/styleMock.js",
    "^.+\\.(png|jpg|jpeg|gif|webp|avif|ico|bmp|svg)$": `<rootDir>/__mocks__/fileMock.js`,
    "@next/font/(.*)": `<rootDir>/__mocks__/nextFontMock.js`,
    "next/font/(.*)": `<rootDir>/__mocks__/nextFontMock.js`,
    "server-only": `<rootDir>/__mocks__/empty.js`,
    "^@/(.*)$": "<rootDir>/$1",
  },

  testPathIgnorePatterns: ["<rootDir>/node_modules/", "<rootDir>/.next/"],
  testEnvironment: "jsdom",

  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": ["babel-jest", { presets: ["next/babel"] }],
  },

  transformIgnorePatterns: [
    "/node_modules/(?!(nuqs|next-shared|lucide-react)/)",
    "^.+\\.module\\.(css|sass|scss)$",
  ],
};
