
use tracker_db;


INSERT INTO department
    (name)
VALUES
    ('Cashier'),
    ('Shelf stocker'),
    ('Assistant Manager'),
    ('Store Manager');
INSERT INTO role
    (title, weekly_hours, department_id)
VALUES
    ('Register', 25, 1),
    ('Janitor', 16, 1),
    ('Organizer', 35, 2),
    ('Warehouse', 45, 2),
    ('Warehouse AM', 50, 3),
    ('Register AM', 45, 3),
    ('General Manager', 55, 4);
INSERT INTO employee_class
    (first_name, last_name, role_id, manager_id)
VALUES  
    ('joe', 'smith', 1, NULL),
    ('Rob', 'jones', 1, NULL),
    ('Mary', 'Rogers', 2, NULL),
    ('Tabitha', 'Quagmire', 2, NULL),
    ('Zander', 'Bryan', 3, NULL),
    ('Jane', 'Doe', 3, 1),
    ('john', 'does', 4, 2),
    ('Roger', 'Taylor', 4, 3);
