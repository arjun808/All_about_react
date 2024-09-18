import React from 'react';
import { FAQItem } from './data';

interface PropsType {
  obj: FAQItem;
  showIndex: boolean;
  handleIndex: () => void;
}

const Logic: React.FC<PropsType> = (props) => {
  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <p style={styles.question}>{props.obj.question}</p>
        <span
          style={props.showIndex ? styles.iconOpen : styles.iconClosed}
          onClick={props.handleIndex}
        >
          {props.showIndex ? '➖' : '➕'}
        </span>
      </div>
      {props.showIndex && <h4 style={styles.answer}>{props.obj.ans}</h4>}
    </div>
  );
};

// Define styles as a JavaScript object
const styles = {
  container: {
    border: '1px solid #ccc',
    borderRadius: '8px',
    padding: '16px',
    marginBottom: '10px',
    backgroundColor: '#f9f9f9',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  question: {
    fontSize: '16px',
    fontWeight: 'bold',
    margin: 0,
    color: '#333',
  },
  iconOpen: {
    cursor: 'pointer',
    fontSize: '18px',
    color: '#007BFF',
    transition: 'color 0.3s',
  },
  iconClosed: {
    cursor: 'pointer',
    fontSize: '18px',
    color: '#007BFF',
    transition: 'color 0.3s',
  },
  answer: {
    margin: '8px 0 0 0',
    color: '#555',
  },
};

export default Logic;
