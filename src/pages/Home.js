import React from "react";
import { useLocation } from "react-router-dom";
import HomeContent1 from "../components/Home/HomeContent1";
import HomeContent2 from "../components/Home/HomeContent2";
import HomeContent3 from "../components/Home/HomeContent3";
import HomeContent4 from "../components/Home/HomeContent4";
import HomeContent5 from "../components/Home/HomeContent5";

const Home = (props) => {
  const location = useLocation();
  React.useEffect(() => {
    if (location.hash !== "#contact") {
      window.scrollTo(0, 0);
    }
  });
  // const [show, setShow] = React.useState(true);
  // const handleClose = () => setShow(false);
  return (
    <div>
      {/* <Modal
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={show}
        onHide={handleClose}
      >
        <Modal.Header
          closeButton
          style={{ borderBottom: "none" }}
        ></Modal.Header>
        <Modal.Body>
          <img src={aviso} width="100%" />
        </Modal.Body>
      </Modal> */}
      <HomeContent1 width={props.width} cardHandler={props.cardHandler} />
      <HomeContent2 width={props.width} />
      <HomeContent3 width={props.width} />
      <HomeContent4 width={props.width} />
      <HomeContent5 />
    </div>
  );
};

export default Home;
