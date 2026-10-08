import Contentbar from "./Contentbar";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";


function App() {
  return (
    <>
      <div className="grid grid-cols-5  grid-rows-9 h-screen sticky top-0 ">
        <Sidebar />
        <Topbar />
        <Contentbar />
      </div>
    </>
  );
}

export default App;
