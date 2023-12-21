import "./App.css";
import Footer from "./Component/Footer";
import Header from "./Component/Header";

function App() {
  return (
    <div className="p-8">
      <div className="h-[90vh] border border-black font-bold">

      <Header />
      
        <div className="h-[60%] w-1/2 flex flex-col items-center justify-center border-r border-black">
          <p>
            THIS IS SOME CONTENT ALIGNED IN THE CENTER 
            </p>
            <p>VERTICALLY AND HORIZONTALLY</p>
        
        
      </div>

      <Footer />
    </div>
      </div>
  );
}

export default App;
