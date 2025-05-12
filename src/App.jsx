import Header from "@components/Header";
import SelectSkipPage from "./pages/SelectSkipPage";

const App = () => {
  return (
    <div className='flex min-h-screen flex-col justify-center bg-dark-blue py-4 sm:py-12 px-2 overflow-x-hidden'> 
      <Header />
      <SelectSkipPage />
    </div>
  )
};

export default App;
