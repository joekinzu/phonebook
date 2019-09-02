# phonebook app

NodeJS+ExpressJS+React+MySQL

Create a phonebook which allows to keep peoples names and phones. 
 -It has one page which allows to add, edit and remove entries via XHR. 
 -It allows to download the phonebook as a text file (e.g. comma-separated) and upload a new version. When it uploads a file, it updates the phonebook, creating, updating and deleting records as appropriate. In short it has to sync (not just replace) the web-added data with the uploaded file.  
 
 
 Database:
 CREATE TABLE `phonebook` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `phone` varchar(10) DEFAULT NULL,
  `name` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `phone` (`phone`,`name`) 
) ENGINE=InnoDB AUTO_INCREMENT=44 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
