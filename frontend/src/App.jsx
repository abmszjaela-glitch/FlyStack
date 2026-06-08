import AppRoutes from "./routes/AppRoutes.jsx";
import { FontLoader } from "./Utils/Utils.jsx";

export default function App() {
  return (
    <div className="font-body min-h-screen bg-[#F5F9FC] text-[#0A1E2D]">
      <FontLoader />
      <AppRoutes />
    </div>
  );
}
