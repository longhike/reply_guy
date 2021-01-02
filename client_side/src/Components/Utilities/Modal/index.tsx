import React from 'react';
import Modal from 'react-bootstrap/Modal'

function RGModal(props: any) {
    return (
        <Modal >
            {props.hello}
        </Modal>
    )
}

export default RGModal;