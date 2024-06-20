import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/home";
import Podcast from "./pages/podcast";
import Blog from "./pages/blog";
import DashBoard from "./pages/dashboard";
import Footer from "./components/Footer";
import SingleBlog from "./pages/SingleBlog";
import LoginForm from "./pages/LoginForm";
import SignUpForm from "./pages/SignUpForm";

function Layout() {
  
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "blog/",
        // element: <Blog />,
        children: [
          {
            path: ":categoryName/",
            // element: <Blog />,
            children:[
              {
                path: "",
                element : <Blog />
              },
              {
                path: ":id",
                element : <SingleBlog />
              }
            ]
          },
        ],
      },
      {
        path: "podcast",
        element: <Podcast />,
      },
      {
        path: "dashboard",
        element: <DashBoard />,
      },
      {
        path: "login",
        element: <LoginForm />,
      },
      {
        path: "signup",
        element: <SignUpForm />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
