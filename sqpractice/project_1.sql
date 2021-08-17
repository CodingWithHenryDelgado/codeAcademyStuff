CREATE TABLE friends  (
  id INTEGER,
  name TEXT,
  birthday DATE
);

INSERT INTO friends (id, name, birthday)
VALUES (1, 'Ororo Munroe', '05-30-1940');

INSERT INTO friends (id, name, birthday)
VALUES (2, 'Gene Martin', '05-26-2000');

INSERT INTO friends (id, name, birthday)
VALUES (3, 'Deborah Hughes', '11-15-1999');

UPDATE friends
SET name = "Storm Munroe"
WHERE id = 1;

ALTER TABLE friends 
ADD COLUMN email TEXT; 

UPDATE friends
SET email = "storm@codecademy.com"
WHERE id = 1;


UPDATE friends
SET email = "zombuscus@gmail.com"
WHERE id = 2;


UPDATE friends
SET email = "debbie@gmail.com"
WHERE id = 3;

DELETE FROM friends
WHERE id = 1;

SELECT * 
FROM friends;