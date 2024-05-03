import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import { useState } from "react";
import HomePage from "./pages/HomePage";
import JobsPage from "./pages/JobsPage";
import NotFoundPage from "./pages/NotFoundPage";
import MainLayout from "./layouts/MainLayout";
import JobPage from "./pages/JobPage";
import AddJobPage from "./pages/AddJobPage";
import EditJobPage from "./pages/EditJobPage";

const App = () => {
  const [jobs, setJobs] = useState();

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage jobs={jobs} />} />
        <Route path="/jobs" element={<JobsPage jobs={jobs} />} />
        <Route path="/add-job" element={<AddJobPage />} />
        <Route
          path="/edit-job/:id"
          element={<EditJobPage jobs={jobs} />}
        />
        <Route
          path="/jobs/:id"
          element={<JobPage jobs={jobs} />}
        />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};

export default App;
