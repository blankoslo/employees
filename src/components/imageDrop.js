import React from 'react';
import Dropzone from 'react-dropzone';
import EmployeeImage from './employeeImage';

const ImageDrop = (props) => {
  if (props.hover === true) {
    return (
      <div>
        <Dropzone
          onDrop={props.onDrop}
          onMouseLeave={props.onMouseLeave}
          style={{ borderStyle: 'hidden', width: '256px', height: '200px' }}
        >
          <div className='edit-hover'> Trykk for å laste opp bilde, eller dra en bildefil hit </div>
        </Dropzone>
      </div>
    );
  }
  return (
    <div>
      <Dropzone
        onDrop={props.onDrop}
        onMouseEnter={props.onMouseEnter}
        style={{ borderStyle: 'hidden', width: '256px', height: '200px' }}
      >
        <div>
          <EmployeeImage
            className='edit-pic'
            src={props.imgSrc}
            width='256'
            height='200'
          />
        </div>
      </Dropzone>
    </div>
  );
};

ImageDrop.propTypes = {
  imgSrc: React.PropTypes.string,
  hover: React.PropTypes.bool,
  onDrop: React.PropTypes.func,
  onMouseEnter: React.PropTypes.func,
  onMouseLeave: React.PropTypes.func
};

export default ImageDrop;
