import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
  },
  {
    path: "/error",
    element: <div>Hello error!</div>,
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
    
  )
}

export default App