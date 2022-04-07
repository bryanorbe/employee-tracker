USE tracker_db;

INSERT INTO department (dept_name)
VALUES ("Human Resources"),
("Accounting"),
("Customer Service"),
("Marketing"),
("IT"),
("Sales"),
("Legal")


INSERT INTO roles(title, salary, dept_id)
VALUES("CEO", 500000.00, null),
-- hr
("Manager", 100000.00, 1),
("Specialist", 75000.00, 1),
("Assistant", 50000.00, 1),
-- accounting
("Manager", 100000.00, 2),
("Bookkeeper", 75000.00, 2),
-- customer service
("Manager", 75000.00, 3),
("Team Lead", 50000.00, 3),
("Specialist", 25000.00, 3),
("Representative", 25000.00, 3),
-- marketing
("Director", 125000.00, 4),
("Specialist", 75000.00, 4),
("Coordinator", 50000.00, 4),
("Assistant", 25000.00, 4),
-- it
("Manager", 200000.00, 5),
("Admin", 125000.000, 5),
("Sr Engineer", 100000.00, 5),
("Jr Engineer", 75000.00, 5),
("Support", 35000.00, 5),
-- sales
("Manager", 65000.00, 6),
("Supervisor", 50000.00, 6),
("Representative", 30000.00, 6),
-- legal
("Sr Attorney", 150000.00, 7),
("Jr Attorney", 100000.00, 7),
("Assistant", 65000.00, 7)

INSERT INTO employee(first_name, last_name, role_id, manager_id)
VALUES ("Semper", "Bry", null, null),
-- hr
("Toby", "Flenderson", 2, 1),
("Holly", "Flax", 3, 2),
-- accounting
("Oscar", "Martinez", 5, 1),
("Angela", "Martin", 6, 4),
("Kevin", "Malone", 6, 4),
-- customer service
("Kelly", "Kapoor", 7, 1),
("Erin", "Hannon", 9, 7),
("Pete", "Miller", 10, 7),
-- marketing
("Gabe", "Lewis", 11, 1),
-- it
("Maurice", "Moss", 16, 1),
("Roy", "n/a", 17, 1),
("Jen", "Barber", 20, 1),
-- sales
("Michael", "Scott", 20, 1),
("Dwight", "Schrute", 21, 13),
("Phyllis", "Vance", 21, 13),
("Jim", "Halpert", 22, 13),
("Pam", "Halpert", 22, 13),
("Karen", "Filippelli", 22, 13),
("Stanley", "Hudson", 22, 13),
-- legal
("David", "Wallace", 20, 1)