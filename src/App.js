import styles from './assets/style/style.css';

// Import all SVG files from folder
function requireAll(r) { r.keys().forEach(r); }
requireAll(require.context('./assets/svg/', true, /\.svg$/));