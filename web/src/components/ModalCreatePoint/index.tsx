import React, {useState, useEffect } from 'react';
import Modal from 'react-modal';
// See http://reactcommunity.org/react-modal/
import './styles.css';
import image from '../../assets/check-circle.svg';

interface Props {
  message: string;
  show: boolean;
  autoCloseTime?: number;
  onCloseAction?: () => void;
}

const styles = {
  overlay: {
    backgroundColor: '#322153ef',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 100000000000000,
  },
  content: {
    top: 'inicial',
    left: 'inicial',
    right: 'inicial',
    bottom: 'inicial',
    background: 'none',
    border: 'none',
    zIndex: 100000000000000,
  },
};

const ModalCreatePoint = ({
  message = '',
  show = false,
  autoCloseTime = 0,
  onCloseAction = () => {},
}: Props): JSX.Element => {
  const [closed, setClosed] = useState(true);

  useEffect(() => {
    setClosed(!show);
  }, [show]);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setClosed(true);
  //   }, autoCloseTime);
  // }, [autoCloseTime]);

  return (
    <Modal
      isOpen={!closed}
      style={styles}
      shouldCloseOnOverlayClick={true}
      onRequestClose={() => {
        onCloseAction();
      }}
    >
      <h1 className="messageText">
        <div className="messageIconContainer">
        <img src={image} alt="Success" width={72} />
        </div>
        {message}
      </h1>
    </Modal>
  );
};

export default ModalCreatePoint;
