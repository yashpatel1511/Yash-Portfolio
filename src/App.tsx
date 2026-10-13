import { lazy, Suspense, useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Loader from "@/components/Loader";
import MainLayout from "@/layouts/MainLayout";

const Home = lazy(() => import("@/pages/Home"));

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setIsLoading(false), 850);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <BrowserRouter>
      <Loader isVisible={isLoading} />
      <Suspense fallback={<Loader isVisible />}>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
