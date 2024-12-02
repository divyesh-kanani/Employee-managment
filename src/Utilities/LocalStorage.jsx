const employees = [
  {
    "id": 1,
    "first_name": "Aarav",
    "email": "e@e.com",
    "password": "123",
    "tasks": [
      {
        "task_title": "Design Landing Page",
        "task_description": "Create the landing page for the new product.",
        "task_date": "2024-10-31",
        "category": "Design",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "task_title": "Client Meeting",
        "task_description": "Meet with client to discuss project scope.",
        "task_date": "2024-11-02",
        "category": "Meeting",
        "active": false,
        "newTask": true,
        "completed": true,
        "failed": false
      },
      {
        "task_title": "Update Database",
        "task_description": "Implement new features in the database.",
        "task_date": "2024-11-05",
        "category": "Development",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      }
    ],
    "tasksCounts": {
      "active": 2,
      "newTask": 2,
      "completed": 1,
      "failed": 0
    }
  },
  {
    "id": 2,
    "first_name": "Vihaan",
    "email": "employee2@example.com",
    "password": "123",
    "tasks": [
      {
        "task_title": "Marketing Campaign",
        "task_description": "Plan and execute marketing campaign.",
        "task_date": "2024-10-31",
        "category": "Marketing",
        "active": false,
        "newTask": true,
        "completed": false,
        "failed": true
      },
      {
        "task_title": "Team Training",
        "task_description": "Conduct training session for new team members.",
        "task_date": "2024-11-01",
        "category": "HR",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      },
      {
        "task_title": "Code Review",
        "task_description": "Review code submitted by peers.",
        "task_date": "2024-11-03",
        "category": "Development",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      }
    ],
    "tasksCounts": {
      "active": 2,
      "newTask": 2,
      "completed": 0,
      "failed": 1
    }
  },
  {
    "id": 3,
    "first_name": "Ayaan",
    "email": "employee3@example.com",
    "password": "123",
    "tasks": [
      {
        "task_title": "User Testing",
        "task_description": "Conduct user testing for the new feature.",
        "task_date": "2024-11-01",
        "category": "Testing",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "task_title": "Create Reports",
        "task_description": "Generate reports based on user feedback.",
        "task_date": "2024-11-03",
        "category": "Reporting",
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true
      },
      {
        "task_title": "System Maintenance",
        "task_description": "Perform maintenance on the server.",
        "task_date": "2024-11-05",
        "category": "IT",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      }
    ],
    "tasksCounts": {
      "active": 2,
      "newTask": 1,
      "completed": 0,
      "failed": 1
    }
  },
  {
    "id": 4,
    "first_name": "Ishaan",
    "email": "employee4@example.com",
    "password": "123",
    "tasks": [
      {
        "task_title": "Research New Tools",
        "task_description": "Research new tools for project management.",
        "task_date": "2024-10-31",
        "category": "Research",
        "active": false,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "task_title": "Client Support",
        "task_description": "Provide support for client issues.",
        "task_date": "2024-11-02",
        "category": "Support",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      },
      {
        "task_title": "Develop New Feature",
        "task_description": "Develop new feature based on client feedback.",
        "task_date": "2024-11-04",
        "category": "Development",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      }
    ],
    "tasksCounts": {
      "active": 2,
      "newTask": 1,
      "completed": 0,
      "failed": 0
    }
  },
  {
    "id": 5,
    "first_name": "Krishna",
    "email": "employee5@example.com",
    "password": "123",
    "tasks": [
      {
        "task_title": "Design Mockups",
        "task_description": "Create mockups for new project design.",
        "task_date": "2024-10-31",
        "category": "Design",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "task_title": "Database Backup",
        "task_description": "Perform a backup of the company database.",
        "task_date": "2024-11-01",
        "category": "IT",
        "active": false,
        "newTask": true,
        "completed": false,
        "failed": true
      },
      {
        "task_title": "Team Meeting",
        "task_description": "Attend weekly team meeting.",
        "task_date": "2024-11-03",
        "category": "Meeting",
        "active": true,
        "newTask": false,
        "completed": true,
        "failed": false
      }
    ],
    "tasksCounts": {
      "active": 2,
      "newTask": 2,
      "completed": 1,
      "failed": 1
    }
  }
]


const admin = [{
  "id": 1,
  "first_name": "Admin",
  "email": "admin@me.com",
  "password": "123"
}]


export const setLocalStorage = () => {
  localStorage.setItem('employees', JSON.stringify(employees));
  localStorage.setItem('admin', JSON.stringify(admin));
};


export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem('employees'))
  const admin = JSON.parse(localStorage.getItem('admin'))

  return { employees, admin }
};

setLocalStorage()



