# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
For userContext steps:
1.create  UserContext(as global variable)  and export it 
2.usercontextprovider method accepts children as props which can acess the usercontext (value(here user and setuser))
3.here childrens are login and profile 
4.login will acess the setuser and profile acesses user using useContext() hook