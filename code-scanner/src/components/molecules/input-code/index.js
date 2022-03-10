import React, { useState } from 'react';
import { QrReader } from 'react-qr-reader';
import { Box, Modal } from '@mui/material'
import styles from './index.module.scss';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #6997BF',

  p: 4,
};

export const InputCode = (props) => {

  const [openModal, setOpenModal] = useState(false)

  const handleScan = (data) => {
  
    props.onChange(data);
    props.handleValidate(data);
    setOpenModal(false);
  }


  return (
    <div className={styles.container}>
      <input className={styles.input}
        style={{ border: props.error && '2px solid red' }}
        placeholder={props.placeholder}
        type={props.type}
        onChange={(e) => props.onChange(e.target.value)}
        onBlur={props.handleValidate}
        disabled={props.disabled ? props.disabled : false}
        value={props.value}
        name={props.name}
      ></input>
      <button className={styles.button} onClick={() => setOpenModal(true)}>Scan</button>

      <Modal open={openModal}>
        <Box sx={style}>
          <h3>Please scan your code</h3>
          <QrReader
            onResult={(result, error) => {
              if (!!result) {
                handleScan(result?.text);
              }

              if (!!error) {
                //console.info(error);
              }
            }}
            style={{ width: '100%' }}
            scanDelay={1000}
          />
          <button className={styles.button} onClick={() => setOpenModal(false)}>Cancel</button>
        </Box>
      </Modal>
    </div>
  )

}
