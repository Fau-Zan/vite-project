import { createBrowserRouter, createRoutesFromElements, Navigate, Route, RouterProvider } from "react-router-dom";
import Layout from "./pages/layout";

function App(): JSX.Element {
  const routes = [
  <Route key="main" path="/" element={<Layout />} />,
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
