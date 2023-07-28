# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


# Notes on how to deploy on gh-pages

When ready to deploy or make updates follow these steps

1. make sure to unclude -> base: '/',  // in the vite.config.js file with '/directory-name' after base
2. add -> "homepage": "https://romanibba.github.io/",  // under "name" in package.json with /direcotory-name after .io/
3. add -> "predeploy": "npm run build",
          "deploy": "gh-pages -d dist"  // into "scripts" in package.json
4. run -> npm run build
    this will create the dist folder
5. run -> cp -r dist/* .
    this will move the contents of the dist folder to the root folder
6. run -> git add .
7. run -> git commit -m "comment"
8. run -> git push

9. make sure the repository settings are pointing to the correct gh-pages branch
