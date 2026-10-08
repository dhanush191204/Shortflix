import Contentbar from "./Contentbar";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";


function App() {
  return (
    <>
      <div className="h-auto w-screen bg-[#111315] ">
        <div className="grid grid-cols-5  grid-rows-9 h-screen sticky top-0 bg-[#111315] ">
          <Sidebar />
          <Topbar />
          <Contentbar />
        </div>
      </div>
    </>
  );
}

export default App;
