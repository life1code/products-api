// Import your database connection library, e.g., 'pg-promise' or 'sqlite3'.
const db = require('your-database-library');

// Define the CREATE TABLE statement for the customer table.
const createCustomerTable = `
  CREATE TABLE IF NOT EXISTS customer (
    customer_id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    address TEXT NOT NULL,
    email TEXT NOT NULL,
    date_of_birth DATE NOT NULL,
    gender TEXT NOT NULL,
    age INT NOT NULL,
    card_holder_name TEXT NOT NULL,
    card_number CHAR(12) NOT NULL,
    expiry_date DATE NOT NULL,
    cvv CHAR(3) NOT NULL,
    timestamp TIMESTAMP NOT NULL
  );
`;

// Execute the CREATE TABLE statement.
db.none(createCustomerTable)
  .then(() => {
    console.log('customer table created successfully');
  })
  .catch((error) => {
    console.error('Error creating customer table:', error);
  });


