import { createBrowserRouter, createRoutesFromElements, Navigate, Route, RouterProvider } from "react-router-dom";
import Layout from "./pages/layout";
import Homepage from "./pages/home";

function App(): JSX.Element {
  const routes = [
  <Route key="main" path="/" element={<Layout />} />,
  <Route path="/home" element={<Homepage />} />,
  <Route path='*' element={<Navigate to='/' />} />
  ];
  const route = createBrowserRouter(createRoutesFromElements(routes));
  return (
    <div>
      <RouterProvider router={route} />
    </div>
  );
}

export default App;
