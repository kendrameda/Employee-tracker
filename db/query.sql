SELECT employee_class.id, employee_class.first_name, employee_class.last_name, role.title, role.name AS role, role.weekly_hours, CONCAT(manager.first_name, ' ', manager.last_name) AS TA FROM employee_class
LEFT JOIN role ON employee_class.role_id = role.id
LEFT JOIN course on role.course_id = course.id
LEFT JOIN employee_class manager ON manager.id = employee_class.manager_id;