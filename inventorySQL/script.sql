SELECT * FROM parts LIMIT 10;

ALTER TABLE parts
ALTER COLUMN code SET NOT NULL;

ALTER TABLE parts
ADD UNIQUE (code);

UPDATE parts
SET description = 'None Available'
WHERE description IS NULL;

ALTER TABLE parts
ALTER COLUMN description SET NOT NULL;

-- INSERT INTO parts (id, code, manufacturer_id) VALUES (54, 'V1-009', 9);

ALTER TABLE reorder_options
ALTER COLUMN price_usd SET NOT NULL;

ALTER TABLE reorder_options
ALTER COLUMN quantity SET NOT NULL;

ALTER TABLE reorder_options
ADD CHECK (price_usd > 0 AND quantity > 0);

ALTER TABLE reorder_options
ADD CHECK (price_usd/quantity < 25 AND price_usd/quantity > 0.02);

ALTER TABLE parts
ADD PRIMARY KEY (id);

ALTER TABLE reorder_options
ADD FOREIGN KEY (reorder_options_id) 
REFERENCES parts (id);

ALTER TABLE locations
ADD CHECK (qty > 0);

ALTER TABLE locations
ADD UNIQUE (part_id, location);

ALTER TABLE locations
ADD FOREIGN KEY (location_id) 
REFERENCES parts (id);

ALTER TABLE manufacturers
ADD FOREIGN KEY (manufacturer_id) 
REFERENCES parts (id);

INSERT INTO manufacturers (id, name)
VALUES (11, 'Pip-NNC Industrial');

UPDATE parts
SET manufacturer_id = 11
WHERE manufacturer_id IN (, );