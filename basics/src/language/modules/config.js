// 📁 config.js

// will not be visible in other files if not exported
const defaultSize = 480;

export const version = '1.0';

export let settings = {
  theme: 'light',
};

export function changeTheme(newTheme) {
  settings.theme = newTheme;
}

// the default object that needs not explicitly mentioned in import
export default function greet(name) {
  return `Hello, ${name}`;
}
