import React, { useCallback, useRef, useState } from 'react';
import Webcam from "react-webcam";
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import { setCameraImage } from './features/cameraSlice';
import {useDispatch} from 'react-redux';
import { useHistory } from 'react-router-dom';
import './WebcamCapture.css'

const videoConstraints = {
    width: 250,
    height: 400,
    facingMode: "user"
  };

   function WebcamCapture() {
       const webcamRef = useRef(null);
    //    const [image, setImage] = useState(null);
       const dispatch = useDispatch();
       const history = useHistory();

       const capture = useCallback(()=>{
        const imageSrc = webcamRef.current.getScreenshot();
        console.log(imageSrc);
        // setImage(imageSrc);
        dispatch(setCameraImage(imageSrc));
        history.push('/preview')
        },[webcamRef])

      return (
          <div className="WebcamCapture">
              <Webcam 
              audio={false}
              height={videoConstraints.height}
              ref={webcamRef}
              screenshotFormat="image/jpeg"
              width={videoConstraints.width}
              videoConstraints={videoConstraints}
              
              />
              
              <RadioButtonUncheckedIcon
            className="webcamCapture_button"
            onClick={capture}
            fontSize="large"

          />
          
             {/* <img src={image} alt="" />  */}
          </div>
      );
  }
  
  export default WebcamCapture;