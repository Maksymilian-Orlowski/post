import React from "react";

const Post = ({ name, username, content, date, profPic }) => {
  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <img src={profPic} alt={`prof pic`} style={styles.image} />
        <span style={styles.name}>{name}</span>
        <span style={styles.username}>{username}</span>
        <span style={styles.date}>{date}</span>
      </div>
      <p style={styles.content}>{content}</p>
    </div>
  );
};

const styles = {
  container: {
    border: '2px solid #ccc',
    padding: '26px',
    margin: '10px',
    textAlign: 'left',
    backgroundColor: 'black',
    color: 'white',
    width: '600px',
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '10px',
  },
  name: {
    fontSize: '18px',
    fontWeight: 'bold',
    marginRight: '10px',
  },
  username: {
    fontSize: '14px',
    color: '#ccc',
    marginRight: '10px',
  },
  date: {
    fontSize: '14px',
    color: '#ccc',
  },
  content: {
    fontSize: '16px',
  },
  image: {
    width: '50px',
    height: '50px',
    objectFit: 'cover',
    marginRight: '10px',
    borderRadius: '50%',
  },
};

export default Post;