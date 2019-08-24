import React from 'react';
import Modal from 'react-modal';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
};

// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#root')

class MyModal extends React.Component {
    constructor() {
        super();

        this.state = {
        };

        this.afterOpenModal = this.afterOpenModal.bind(this);
    }

    afterOpenModal() {
        // references are now sync'd and can be accessed.
        this.subtitle.style.color = '#f00';
    }


    render() {
        return (
            <div>
                <Modal
                    isOpen={this.props.open}
                    onAfterOpen={this.afterOpenModal}
                    onRequestClose={this.closeModal}
                    style={customStyles}
                    contentLabel="Error Modal"
                >

                    <h2 ref={subtitle => this.subtitle = subtitle}>{this.props.heading}</h2>
                    <div>{this.props.message}</div>
                    <button onClick={this.props.close}>close</button>
                </Modal>
            </div>
        );
    }
}

export default MyModal;

