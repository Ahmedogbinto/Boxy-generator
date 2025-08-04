import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    // Mise en place de notre application
    <div className="min-h-screen flex flex-col">
      <Header/>

      <main className="flex flex-wrap justify-center items-center flex-grow bg-gray-100 px-10 md:flex-nowrap">

      </main>
      {/* <LeftSide/> */}
      {/* <Visualization/> */}

      <Footer/>

    </div>
  );
}

export default App;
