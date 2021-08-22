SELECT title, publisher
FROM news
ORDER BY title ASC;

SELECT *
FROM news
WHERE title LIKE '%bitcoin%';

SELECT *
FROM news
WHERE category = 'b'
ORDER BY timestamp DESC
LIMIT 20;