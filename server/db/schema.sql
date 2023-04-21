DROP DATABASE IF EXISTS hire;
CREATE DATABASE hire;

\c hire;

CREATE TABLE users (
  id SERIAL PRIMARY KEY
);

CREATE TABLE messages (
  id SERIAL PRIMARY KEY,
  sender_id INT NOT NULL REFERENCES users(id),
  receiver_id INT NOT NULL REFERENCES users(id),
  context TEXT NOT NULL,
  timestamp TIMESTAMP DEFAULT NOW()
);

