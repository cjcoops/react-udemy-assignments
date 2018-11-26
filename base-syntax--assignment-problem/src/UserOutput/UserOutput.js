import React from 'react';

const userOutput = props => {
  const styles = {
    border: '1px solid #eee',
    padding: '20px',
    marginTop: '10px'
  };

  return (
    <div style={styles}>
      <p>Hi {props.username}</p>
      <p>Second paragraph</p>
    </div>
  );
};

export default userOutput;
