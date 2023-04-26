DROP DATABASE IF EXISTS hire;
CREATE DATABASE hire;

\c hire;

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  s_id TEXT NOT NULL,
  email TEXT NOT NULL
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
  skills TEXT[] NOT NULL,
  estimated_timeline TEXT NOT NULL,
  locations TEXT[] NOT NULL,
  budget TEXT NOT NULL,
  roles TEXT[] NOT NULL,
  timestamp TIMESTAMP DEFAULT NOW()
);

CREATE TABLE freelancers (
  id SERIAL PRIMARY KEY,
  user_id INT NOT NULL REFERENCES users(id),
  role TEXT NOT NULL,
  rate TEXT NOT NULL,
  skills TEXT[] NOT NULL,
  location TEXT NOT NULL,
  education TEXT NOT NULL,
  portfolio TEXT[] NOT NULL,
  timestamp TIMESTAMP DEFAULT NOW()
);

CREATE TABLE work_history (
  id SERIAL PRIMARY KEY,
  freelancer_id INT NOT NULL REFERENCES freelancers(id),
  company TEXT NOT NULL,
  position TEXT NOT NULL,
  duration TEXT NOT NULL
);

CREATE INDEX ON messages(sender_id);
CREATE INDEX ON messages(receiver_id);
CREATE INDEX ON business_proposals(user_id);
CREATE INDEX ON freelancers(user_id);
CREATE INDEX ON work_history(freelancer_id);
