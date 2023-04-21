DROP DATABASE IF EXISTS hire;
CREATE DATABASE hire;

\c hire;

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  s_id INT NOT NULL
);

CREATE TABLE messages (
  id SERIAL PRIMARY KEY,
  sender_id INT NOT NULL REFERENCES users(id),
  receiver_id INT NOT NULL REFERENCES users(id),
  context TEXT NOT NULL,
  timestamp TIMESTAMP DEFAULT NOW()
);

CREATE TABLE business_proposals (
  id SERIAL PRIMARY KEY,
  user_id INT NOT NULL REFERENCES users(id),
  headline TEXT NOT NULL,
  overview TEXT NOT NULL,
  skills TEXT NOT NULL,
  estimated_timeline TEXT NOT NULL,
  location TEXT NOT NULL,
  budget INT NOT NULL,
  timestamp TIMESTAMP DEFAULT NOW()
);

CREATE TABLE freelancers (
  id SERIAL PRIMARY KEY,
  user_id INT NOT NULL REFERENCES users(id),
  role TEXT NOT NULL,
  rate TEXT NOT NULL,
  work_history TEXT NOT NULL,
  skills TEXT NOT NULL,
  location TEXT NOT NULL,
  education TEXT NOT NULL,
  portfolio TEXT NOT NULL,
  timestamp TIMESTAMP DEFAULT NOW()
)