import React from 'react';

const userInput = props => {
  const styles = {
    backgroundColor: '#eee'
  };

  return (
    <div>
      <input
        style={styles}
        onChange={props.change}
        type="text"
        value={props.username}
      />
    </div>
  );
};

export default userInput;
