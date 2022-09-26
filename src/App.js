import MainHeader from "./components/MainHeader";
import ImgComponent from "./components/ImgComponent";
import BtnToNaver from "./components/BtnToNaver";
import ClassState from "./components/ClassState";
import FunctionalState from "./components/FunctionalState";

// 화면을 만들어준 파일

function App() {
  return (
    <div className="App">
      <MainHeader />
      <FunctionalState />
      <ImgComponent />
      <BtnToNaver />
    </div>
  );
}

export default App;
