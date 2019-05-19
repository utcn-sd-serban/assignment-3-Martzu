
CREATE TABLE IF NOT EXISTS stackuser(
  id serial PRIMARY KEY,
  full_name VARCHAR(64) NOT NULL,
  password VARCHAR(64) NOT NULL,
  email VARCHAR(64) NOT NULL
);



CREATE TABLE IF NOT EXISTS question(
  id serial PRIMARY KEY,
  user_id INT NOT NULL REFERENCES stackuser(id) ON DELETE CASCADE ON UPDATE CASCADE,
  title VARCHAR(32) NOT NULL,
  text VARCHAR(64) NOT NULL,
  creation_date TIME

);


CREATE TABLE IF NOT EXISTS tag(
  id serial PRIMARY KEY,
  text VARCHAR(32) NOT NULL

);

CREATE TABLE IF NOT EXISTS question_tag(
  id serial PRIMARY KEY ,
  qid INT NOT NULL REFERENCES question(id) ON DELETE CASCADE ON UPDATE CASCADE,
  tid INT NOT NULL REFERENCES tag(id) ON DELETE CASCADE ON UPDATE CASCADE,
  UNIQUE(qid, tid)
);


--each answer is for a question
--each asnwer has author, text, creation date,

CREATE TABLE IF NOT EXISTS answer(
  id serial PRIMARY KEY ,
  question_id INT NOT NULL REFERENCES question(id) ON DELETE CASCADE ON UPDATE CASCADE,
  user_id INT NOT NULL REFERENCES stackuser(id) ON DELETE CASCADE ON UPDATE CASCADE,
  text VARCHAR(64) NOT NULL,
  creation_date TIME

);

CREATE TABLE IF NOT EXISTS vote_answer(
  id serial PRIMARY KEY,
  answer_id INT NOT NULL REFERENCES answer(id) ON DELETE CASCADE ON UPDATE CASCADE,
  user_id INT NOT NULL REFERENCES stackuser(id) ON DELETE CASCADE ON UPDATE CASCADE,
  vote_type VARCHAR(10) NOT NULL,
  UNIQUE(answer_id, user_id)
);

CREATE TABLE IF NOT EXISTS vote_question(
  id serial PRIMARY KEY,
  question_id INT NOT NULL REFERENCES question(id) ON DELETE CASCADE ON UPDATE CASCADE,
  user_id INT NOT NULL REFERENCES stackuser(id) ON DELETE CASCADE ON UPDATE CASCADE,
  vote_type VARCHAR(10) NOT NULL,
  UNIQUE(question_id, user_id)
);






