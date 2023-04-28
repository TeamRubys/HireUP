DROP DATABASE IF EXISTS hire;
CREATE DATABASE hire;

\c hire;

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  s_id TEXT NOT NULL,
  email TEXT NOT NULL UNIQUE
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
  duration TEXT NOT NULL,
  description TEXT NOT NULL
);

CREATE TABLE connections (
  connection_id SERIAL PRIMARY KEY,
  user_id INT NOT NULL REFERENCES users(id),
  friend_id INT NOT NULL REFERENCES users(id),
  CONSTRAINT unique_connection UNIQUE (user_id, friend_id)
);
CREATE INDEX ON connections(user_id);
CREATE INDEX ON messages(sender_id);
CREATE INDEX ON messages(receiver_id);
CREATE INDEX ON business_proposals(user_id);
CREATE INDEX ON freelancers(user_id);
CREATE INDEX ON work_history(freelancer_id);


-- COPY users(id,name, s_id, email) FROM 'PATH/TO/CSVFILE.csv' DELIMITER ',' CSV HEADER;


-- COPY freelancers (id, user_id, role, rate, skills, location, education, portfolio) FROM 'PATH/TO/CSVFILE.csv' DELIMITER ',' CSV HEADER;


-- COPY work_history (id,freelancer_id, company, position, duration, description) FROM 'PATH/TO/CSVFILE.csv' DELIMITER ',' CSV HEADER;

-- COPY connections (connection_id, user_id, friend_id) FROM 'PATH/TO/CSVFILE.csv' DELIMITER ',' CSV HEADER;

-- COPY business_proposals (id ,user_id,headline ,overview,skills,estimated_timeline,locations,budget,roles) FROM '/Users/joseumana/RFE2302 Sprints/blueOcean/Business Proposals - IMPORT.csv' DELIMITER ',' CSV HEADER;