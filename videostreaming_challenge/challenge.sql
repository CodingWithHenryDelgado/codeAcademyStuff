-- SELECT COUNT(*)
-- FROM users
-- WHERE email LIKE '%.com';

-- SELECT first_name, COUNT (*) AS 'count'
-- FROM users
-- GROUP BY first_name
-- ORDER BY 2 DESC;

-- SELECT
--   ROUND(watch_duration_in_minutes,0) as duration,
--   COUNT(*) as count
-- FROM watch_history
-- GROUP BY duration
-- ORDER BY duration ASC;

-- SELECT user_id, SUM(amount) AS amount
-- FROM payments
-- WHERE status = 'paid'
-- GROUP BY user_id
-- ORDER BY 2 DESC;

-- SELECT user_id, SUM(watch_duration_in_minutes) AS duration
-- FROM watch_history
-- GROUP BY user_id
-- HAVING SUM(watch_duration_in_minutes) > 400;

-- SELECT ROUND(SUM(watch_duration_in_minutes), 0) AS minutes_of_content
-- FROM watch_history;

-- SELECT pay_date, SUM(amount)
-- FROM payments
-- WHERE status = 'paid'
-- GROUP BY 1
-- ORDER BY 2 DESC;

-- SELECT AVG(amount)
-- FROM payments
-- WHERE status = 'paid';

SELECT MAX(watch_duration_in_minutes) AS max, MIN(watch_duration_in_minutes) AS min
FROM watch_history;