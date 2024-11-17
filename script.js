// Fetch the questions from the JSON file
let questionsData =
    [
        { question: "What is DBMS?", answer: "A Database Management System (DBMS) is software that interacts with end users, applications, and the database itself to capture and analyze data." },
        { question: "What are the types of DBMS?", answer: "The main types of DBMS are Hierarchical, Network, Relational, and Object-oriented." },
        { question: "What is a primary key?", answer: "A primary key is a unique identifier for a record in a database table." },
        { question: "What is normalization?", answer: "Normalization is the process of organizing data to minimize redundancy." },
        { question: "What is SQL?", answer: "SQL (Structured Query Language) is a standard programming language used to manage and manipulate databases." },
        { question: "What is a foreign key?", answer: "A foreign key is a field in one table that uniquely identifies a row of another table." },
        { question: "What is a database schema?", answer: "A database schema is the structure that represents the logical view of the entire database." },
        { question: "What is a transaction?", answer: "A transaction is a sequence of operations performed as a single logical unit of work." },
        { question: "What is ACID in DBMS?", answer: "ACID stands for Atomicity, Consistency, Isolation, and Durability, which are properties that guarantee reliable processing of database transactions." },
        { question: "What is a view in DBMS?", answer: "A view is a virtual table that is based on the result set of a SQL query." },
        { question: "What is a document store?", answer: "A document store is a type of NoSQL database that stores data in document formats, typically JSON or BSON, allowing for flexible data structures." },
        { question: "What is a key-value store?", answer: "A key-value store is a type of NoSQL database that uses a simple key-value pair to store data, where a unique key is associated with a value." },
        { question: "What is a graph database?", answer: "A graph database is a type of NoSQL database designed to represent and query data in the form of graphs, using nodes, edges, and properties." },
        { question: "What is denormalization?", answer: "Denormalization is the process of intentionally introducing redundancy into a database by combining tables or adding redundant data to improve read performance." },
        { question: "What are the different normal forms?", answer: "The different normal forms are: First Normal Form (1NF), Second Normal Form (2NF), Third Normal Form (3NF), Boyce-Codd Normal Form (BCNF), Fourth Normal Form (4NF), Fifth Normal Form (5NF)." },
        { question: "What is SQL injection?", answer: "SQL injection is a code injection technique that exploits a vulnerability in an application's software by inserting malicious SQL statements into an entry field." },
        { question: "What is a deadlock?", answer: "A deadlock is a situation in a database where two or more transactions are unable to proceed because each is waiting for the other to release locks." },
        { question: "What is a data type?", answer: "A data type defines the kind of data that can be stored in a column, such as integers, strings, dates, etc." },
        { question: "What is a materialized view?", answer: "A materialized view is a database object that contains the results of a query and is physically stored, allowing for faster access to data." },
        { question: "What is a cursor?", answer: "A cursor is a database object used to retrieve, manipulate, and navigate through a result set of a query." },
        { question: "What is a subquery?", answer: "A subquery is a query nested within another SQL query, used to retrieve data that will be used in the main query." },
        { question: "What is a join?", answer: "A join is a SQL operation that combines rows from two or more tables based on a related column between them." },
        { question: "What are the different types of joins?", answer: "The different types of joins are: INNER JOIN, LEFT JOIN (or LEFT OUTER JOIN), RIGHT JOIN (or RIGHT OUTER JOIN), FULL JOIN (or FULL OUTER JOIN)." },
        { question: "What is a union?", answer: "A union is a SQL operation that combines the results of two or more SELECT queries into a single result set, eliminating duplicate rows." },
        { question: "What is a backup?", answer: "A backup is a copy of data from a database that can be used to restore the original data in case of data loss or corruption." },
        { question: "What is a restore?", answer: "A restore is the process of retrieving data from a backup and applying it to a database to recover lost or corrupted data." },
        { question: "What is data replication?", answer: "Data replication is the process of copying and maintaining database objects, such as tables, in multiple locations to ensure consistency and availability." },
        { question: "What is a database cluster?", answer: "A database cluster is a set of databases that are managed together, often for purposes of load balancing, redundancy, or high availability." },
        { question: "What is a database management system (DBMS) vendor?", answer: "A DBMS vendor is a company that develops and sells database management software, such as Oracle, Microsoft, IBM, and MySQL." },
        { question: "What is a schema migration?", answer: "Schema migration is the process of evolving the database schema over time, typically involving changes in tables, columns, and constraints." },
        { question: "What is a distributed database?", answer: "A distributed database is a database that is spread across multiple physical locations, which may include multiple servers or geographic sites." },
        { question: "What is a data mart?", answer: "A data mart is a subset of a data warehouse that focuses on a specific business area or department." },
        { question: "What is a business intelligence (BI) system?", answer: "A BI system is a technology-driven process for analyzing data and presenting actionable information to help executives, managers, and other corporate end users make informed business decisions." },
        { question: "What is data governance?", answer: "Data governance is the management of the availability, usability, integrity, and security of the data employed in an organization." },
        { question: "What is a data model?", answer: "A data model is a conceptual representation of the data structures that are required by a database and the relationships between them." },
        { question: "What is an entity-relationship (ER) diagram?", answer: "An ER diagram is a visual representation of the entities and their relationships in a database, used to design and understand the database structure." },
        { question: "What is a database transaction log?", answer: "A transaction log is a record of all transactions that have been performed on the database, used for recovery and auditing purposes." },
        { question: "What is data anonymization?", answer: "Data anonymization is the process of removing personally identifiable information from data sets, so that individuals cannot be readily identified." },
        { question: "What is a data pipeline?", answer: "A data pipeline is a set of data processing steps that involve the collection, transformation, and storage of data, often used in data integration and ETL (Extract, Transform, Load) processes." },
        { question: "What is ETL?", answer: "ETL stands for Extract, Transform, Load, which is a process used to move data from one system to another, typically involving data cleansing and transformation." },
        { question: "What is a data source?", answer: "A data source is any location or system from which data can be obtained, such as databases, files, or APIs." },
        { question: "What is a data sink?", answer: "A data sink is a destination where data is sent or stored, such as a database, file system, or data warehouse." },
        { question: "What is a data integrity constraint?", answer: "A data integrity constraint is a rule that ensures the accuracy and consistency of data in a database, such as primary key constraints or foreign key constraints." },
        { question: "What is a database connection pool?", answer: "A database connection pool is a cache of database connections maintained so that connections can be reused when future requests to the database are required." },
        { question: "What is a NoSQL database?", answer: "A NoSQL database is a non-relational database that provides a mechanism for storage and retrieval of data modeled in means other than the tabular relations used in relational databases." },
        { question: "What is a time-series database?", answer: "A time-series database is optimized for handling time-stamped data, allowing for efficient storage and querying of time-related information." },
        { question: "What is a column-family store?", answer: "A column-family store is a type of NoSQL database that stores data in columns rather than rows, allowing for efficient retrieval of large datasets." },
        { question: "What is a database administrator (DBA)?", answer: "A database administrator (DBA) is a person responsible for managing, maintaining, and securing a database, including tasks such as backup, recovery, performance tuning, and user management." },
        { question: "What is a transaction isolation level?", answer: "Transaction isolation levels define the degree to which the operations in one transaction are isolated from those in other transactions, affecting data consistency and concurrency." },
        { question: "What is a stored procedure?", answer: "A stored procedure is a set of SQL statements that can be stored in the database and executed as a single unit, often used to encapsulate business logic." },
        { question: "What is a trigger?", answer: "A trigger is a set of instructions that are automatically executed in response to certain events on a particular table or view, such as insertions, updates, or deletions." },
        { question: "What is a data warehouse?", answer: "A data warehouse is a centralized repository that stores large volumes of historical data from multiple sources, optimized for analysis and reporting." },
        { question: "What is a data lake?", answer: "A data lake is a storage repository that holds a vast amount of raw data in its native format until it is needed for analysis." },
        { question: "What is a data mart?", answer: "A data mart is a subset of a data warehouse that is focused on a specific business line or team, providing relevant data for analysis." },
        { question: "What is a data model?", answer: "A data model defines how data is connected, stored, and accessed, often represented visually through diagrams." },
        { question: "What is a data dictionary?", answer: "A data dictionary is a centralized repository of metadata that provides information about the data elements in a database, including definitions, relationships, and constraints." },
        { question: "What is a data quality framework?", answer: "A data quality framework is a structured approach to ensuring that data is accurate, complete, consistent, and reliable." },
        { question: "What is a data breach?", answer: "A data breach is an incident where unauthorized access to confidential data occurs, leading to the exposure of sensitive information." },
        { question: "What is data encryption?", answer: "Data encryption is the process of converting data into a coded format to prevent unauthorized access, ensuring that only authorized users can read it." },
        { question: "What is a database design?", answer: "Database design is the process of defining the structure, storage, and organization of data in a database, including tables, relationships, and constraints." },
        { question: "What is a data quality assessment?", answer: "A data quality assessment is the process of evaluating the quality of data in terms of accuracy, completeness, consistency, reliability, and relevance." },
        { question: "What is a surrogate key?", answer: "A surrogate key is an artificial key used to uniquely identify a record in a table, often a sequential number that has no business meaning." },
        { question: "What is a data model diagram?", answer: "A data model diagram visually represents the structure of a database, including entities, attributes, and relationships." },
        { question: "What is performance tuning?", answer: "Performance tuning is the process of optimizing the performance of a database by adjusting configurations, queries, and indexing strategies." },
        { question: "What is database partitioning?", answer: "Database partitioning is the process of dividing a database into smaller, more manageable pieces called partitions, which can improve performance and manageability." },
        { question: "What is data lineage?", answer: "Data lineage is the process of tracking the flow of data from its origin to its final destination, including transformations that occur along the way." },
        { question: "What is a cloud database?", answer: "A cloud database is a database that runs on cloud computing platforms, providing scalable and flexible access to data over the internet." },
        { question: "What is a data governance framework?", answer: "A data governance framework is a set of policies, processes, and standards that define how data is managed and used within an organization." },
        { question: "What is a data steward?", answer: "A data steward is an individual responsible for ensuring the quality and integrity of data within a specific domain or area of the organization." },
        { question: "What is a database migration strategy?", answer: "A database migration strategy is a plan that outlines how data will be transferred from one database to another, including steps for data mapping, transformation, and validation." },
        { question: "What is an object-relational database?", answer: "An object-relational database is a database management system that incorporates object-oriented features into a relational database model." },
    ];

// Load questions data
fetch('dbms-questions.json')
    .then(response => response.json())
    .then(data => {
        questionsData = data;
    })
    .catch(error => console.error('Error fetching data:', error));

// Toggle the navigation menu on hamburger click
document.getElementById('hamburger').addEventListener('click', function() {
    const navLinks = document.getElementById('nav-links');
    navLinks.classList.toggle('show');
});

// Search functionality
document.getElementById('searchInput').addEventListener('input', function() {
    const query = this.value.toLowerCase();
    const suggestionsContainer = document.getElementById('suggestionsContainer');
    suggestionsContainer.innerHTML = ''; // Clear previous suggestions

    if (query) {
        const filteredSuggestions = questionsData.filter(item => 
            item.question.toLowerCase().includes(query)
        );

        filteredSuggestions.forEach(item => {
            const suggestionItem = document.createElement('div');
            suggestionItem.className = 'suggestion-item';
            suggestionItem.innerText = item.question;

            // When a suggestion is clicked, show the answer
            suggestionItem.addEventListener('click', function() {
                showAnswer(item);
            });

            suggestionsContainer.appendChild(suggestionItem);
        });
    }
});

// Function to display the answer
function showAnswer(item) {
    const resultsContainer = document.getElementById('resultsContainer');
    resultsContainer.innerHTML = `<strong>Question:</strong> ${item.question}<br><strong>Answer:</strong> ${item.answer}`;
    document.getElementById('suggestionsContainer').innerHTML = ''; // Clear suggestions
}

// Feedback form submission (if applicable)
// Ensure you have feedback form related code if needed