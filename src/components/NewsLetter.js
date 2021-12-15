
import React from 'react'
import Modal from 'react-bootstrap/Modal'
const NewsLetter = () => {
    const [lgShow, setLgShow] = React.useState(false);
    const [form, setForm] = React.useState("")


    return (
        <div className="newsletter d-flex aling-items-center">
            <button onClick={() => setLgShow(true)} style={{ width: "40%" }} className="btn btn-light ml-3 " type="button" data-toggle="modal" data-target="#exampleModal" > {">"} Suscribite</button>
            <Modal
                size="lg"
                show={lgShow}
                onHide={() => setLgShow(false)}
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        NEWSLETTER
                </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <iframe style={{ width: "100%", minHeight: "430px" }} src="https://gualtieriehijos.com/formNews.html" />
                </Modal.Body>
            </Modal>

        </div>
    )
}

export default NewsLetter
