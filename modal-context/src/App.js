import ModalComponent from "./components/modal/ModalComponent";
import { useModalContext } from "./contexts/modalContext";
function App() {
  const { openModal } = useModalContext();

  return (
    <div className="container">
      <h1>Modal Component Using Context</h1>
      <div className="box">
        <div>
          <button className="btn" onClick={openModal}>
            Click Here
          </button>
        </div>
      </div>
      <ModalComponent title="Prop Title" />
    </div>
  );
}

export default App;
