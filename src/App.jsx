import { createBrowserRouter, RouterProvider, Route, createRoutesFromElements } from 'react-router-dom';
import Home from './components/Home';
import Result from './components/Result';
import RootLayout from './RootLayout';

export default function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="result" element={<Result />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}
