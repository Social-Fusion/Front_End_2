import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const SOCIALFUSIONBLUEACCENT = React.lazy(() =>
  import("pages/SOCIALFUSIONBLUEACCENT"),
);
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <SOCIALFUSIONBLUEACCENT />
        {/* <Routes>
          <Route path="/" element={<SOCIALFUSIONBLUEACCENT />} />
          <Route path="/youtube" element={<SOCIALFUSIONBLUEACCENT />} />

          <Route path="*" element={<NotFound />} />
        </Routes> */}
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
