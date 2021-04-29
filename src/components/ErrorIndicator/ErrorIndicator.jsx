import React from 'react';
import icon from './book-error.png'

const ErrorIndicator = () => {
  return (
    <div>
      <img src={icon} alt='book-error' />
      <span>Sorry, an error occurred, this page could not be found.</span>
    </div>
  )
}

export default ErrorIndicator;