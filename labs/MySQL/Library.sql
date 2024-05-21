CREATE DATABASE library;
use library;

CREATE TABLE books(
  BookID int NOT NULL,
  Title varchar(255)  NOT NULL,
  Published varchar(255) NOT NULL,
  Author varchar(255) NOT NULL,
  ISB varchar(255),
  PRIMARY KEY(BookID)
);

INSERT Into books VALUES 
  (89, "1984", "1984", "George "",Orwell", "..."),
  (184, "LoTM", "2018-2020", "Cuttlefish that Loves Diving", "..."),
  (958, "LoTM 2: CoI", "2023-", "Cuttlefish that Loves Diving", "..."),
  (1009, "LoTR", "1954", "J.R.R. Tolkien", "..."),
  (1, "The Hobbit", "1937", "J.R.R. Tolkien", "..."),
  (674, "A Song of Ice and Fire", "1996", "George R.R. Martin", "..."),
  (589, "The Blade Itself", "2006", "Joe Abercrombie", "..."),
  (578, "Before They Are Hanged", "2007", "Joe Abercrombie", "..."),
  (947, "Last Argument of Kings", "2008", "Joe Abercrombie", "..."),
  (26, "Malazan Book of the Fallen", "1999", "Steven Erikson", "..."),
  (6, " Fallen", "199", "Sven Erson", "...");


CREATE TABLE people (
  BorrowerID int NOT NULL AUTO_INCREMENT,
  Borrower varchar(255)  NOT NULL,
  BorrowedBook varchar(255) NOT NULL,
  BorrowedDate varchar(255) NOT NULL,
  PRIMARY KEY(BorrowerID)
);

INSERT INTO people VALUES
  (82, "Rosalie Calderon", "Malazan Book of the Fallen", "2023-08-28"),
  (29, "Safwan Banks", "LoTR", "2023-09-18"),
  (198, "Jade Nixon", "LoTM", "2023-02-08"),
  (678, "Lola Mosley", "The Hobbit", "2023-12-20"),
  (975, "Safia Wilkerson", "Last Argument of Kings", "2023-04-16"),
  (1009, "Tomos Maldonado", "The Blade Itself", "2023-03-30"),
  (67, "Zaki Casey", "A Song of Ice and Fire", "2023-11-09"),
  (489, "Shreya James", "Before They Are Hanged", "2023-07-05"),
  (819, "Talha Keith", "LoTM 2: CoI", "1901-01-1"),
  (8, "Celia Larson", "1984", "2433-12-12"),
  (2, "Rosalie Calderon", "Fallen", "2023-08-02");


SELECT people.Borrower, people.BorrowerID, people.BorrowedBook, books.BookID, books.Author, people.BorrowedDate
FROM books 
INNER JOIN people ON books.Title = people.BorrowedBook;
SELECT COUNT(Borrower)
FROM people WHERE Borrower="Rosalie Calderon";

/*source C:\Users\max.nordstrom\Programmering T4\portfolio\labs\MySQL\Library.sql*/