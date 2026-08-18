<?php

include "database.php";

$message = "";

if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $name = $_POST["employee_name"];
    $email = $_POST["email"];
    $phone = $_POST["phone"];
    $department = $_POST["department"];
    $designation = $_POST["designation"];
    $salary = $_POST["salary"];
    $joining_date = $_POST["joining_date"];

    $sql = "INSERT INTO employees
            (employee_name, email, phone, department, designation, salary, joining_date)
            VALUES (?, ?, ?, ?, ?, ?, ?)";

    $stmt = $conn->prepare($sql);

    $stmt->bind_param(
        "sssssss",
        $name,
        $email,
        $phone,
        $department,
        $designation,
        $salary,
        $joining_date
    );

    if ($stmt->execute()) {
        $message = "Employee added successfully!";
    } else {
        $message = "Error: " . $stmt->error;
    }

    $stmt->close();
}

?>

<!DOCTYPE html>
<html lang="en">

<head>

    <meta charset="UTF-8">

    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>Employee Management</title>

    <link rel="stylesheet" href="style.css">

</head>

<body>

<div class="page">

    <!-- LEFT PANEL -->

    <aside class="sidebar">

        <div class="brand">

            <div class="brand-icon">
                EM
            </div>

            <div>
                <h2>Employee</h2>
                <span>Management</span>
            </div>

        </div>


        <div class="sidebar-content">

            <div class="mini-badge">
                ✦ MANAGEMENT SYSTEM
            </div>

            <h1>
                Build a better<br>
                <span>workforce.</span>
            </h1>

            <p>
                Keep your employee information organized,
                secure and easy to manage from one place.
            </p>

            <div class="feature">

                <div class="feature-icon">
                    ✓
                </div>

                <div>
                    <strong>Centralized Records</strong>
                    <small>Everything in one place</small>
                </div>

            </div>


            <div class="feature">

                <div class="feature-icon">
                    ✓
                </div>

                <div>
                    <strong>Quick Management</strong>
                    <small>Add employee details instantly</small>
                </div>

            </div>


            <div class="feature">

                <div class="feature-icon">
                    ✓
                </div>

                <div>
                    <strong>Simple & Secure</strong>
                    <small>Clean and reliable system</small>
                </div>

            </div>

        </div>


        <div class="sidebar-footer">

            <span class="status-dot"></span>

            System Online

        </div>

    </aside>


    <!-- MAIN CONTENT -->

    <main class="main">

        <div class="topbar">

            <div>

                <span class="eyebrow">
                    EMPLOYEE MANAGEMENT
                </span>

                <h2>Add New Employee</h2>

                <p>
                    Enter the employee information below to create
                    a new employee record.
                </p>

            </div>

            <div class="top-badge">
                ● Live
            </div>

        </div>


        <?php if ($message != ""): ?>

            <div class="success-message">

                <div class="success-icon">
                    ✓
                </div>

                <div>

                    <strong>
                        Employee Added
                    </strong>

                    <span>
                        <?php echo $message; ?>
                    </span>

                </div>

            </div>

        <?php endif; ?>


        <!-- FORM CARD -->

        <div class="form-card">

            <form method="POST">


                <!-- PERSONAL INFORMATION -->

                <div class="section">

                    <div class="section-heading">

                        <div class="section-number">
                            01
                        </div>

                        <div>

                            <h3>Personal Information</h3>

                            <p>
                                Basic information about the employee
                            </p>

                        </div>

                    </div>


                    <div class="form-grid">


                        <div class="input-group">

                            <label>
                                Full Name
                                <span>*</span>
                            </label>

                            <div class="input-wrapper">

                                <span class="input-icon">◯</span>

                                <input
                                    type="text"
                                    name="employee_name"
                                    placeholder="e.g. Rahul Kumar"
                                    required
                                >

                            </div>

                        </div>


                        <div class="input-group">

                            <label>
                                Email Address
                                <span>*</span>
                            </label>

                            <div class="input-wrapper">

                                <span class="input-icon">@</span>

                                <input
                                    type="email"
                                    name="email"
                                    placeholder="rahul@example.com"
                                    required
                                >

                            </div>

                        </div>


                        <div class="input-group">

                            <label>
                                Phone Number
                            </label>

                            <div class="input-wrapper">

                                <span class="input-icon">#</span>

                                <input
                                    type="text"
                                    name="phone"
                                    placeholder="+91 98765 43210"
                                >

                            </div>

                        </div>

                    </div>

                </div>


                <div class="divider"></div>


                <!-- PROFESSIONAL INFORMATION -->

                <div class="section">

                    <div class="section-heading">

                        <div class="section-number">
                            02
                        </div>

                        <div>

                            <h3>Professional Information</h3>

                            <p>
                                Role and employment details
                            </p>

                        </div>

                    </div>


                    <div class="form-grid">


                        <div class="input-group">

                            <label>
                                Department
                            </label>

                            <div class="input-wrapper">

                                <span class="input-icon">▦</span>

                                <select name="department">

                                    <option value="">
                                        Select department
                                    </option>

                                    <option value="IT">
                                        IT
                                    </option>

                                    <option value="HR">
                                        Human Resources
                                    </option>

                                    <option value="Finance">
                                        Finance
                                    </option>

                                    <option value="Marketing">
                                        Marketing
                                    </option>

                                    <option value="Sales">
                                        Sales
                                    </option>

                                </select>

                            </div>

                        </div>


                        <div class="input-group">

                            <label>
                                Designation
                            </label>

                            <div class="input-wrapper">

                                <span class="input-icon">◆</span>

                                <input
                                    type="text"
                                    name="designation"
                                    placeholder="e.g. Software Developer"
                                >

                            </div>

                        </div>


                        <div class="input-group">

                            <label>
                                Monthly Salary
                            </label>

                            <div class="input-wrapper">

                                <span class="input-icon">₹</span>

                                <input
                                    type="number"
                                    name="salary"
                                    placeholder="e.g. 45000"
                                    step="0.01"
                                >

                            </div>

                        </div>


                        <div class="input-group">

                            <label>
                                Joining Date
                            </label>

                            <div class="input-wrapper">

                                <span class="input-icon">□</span>

                                <input
                                    type="date"
                                    name="joining_date"
                                >

                            </div>

                        </div>

                    </div>

                </div>


                <!-- BOTTOM ACTION -->

                <div class="form-footer">

                    <div class="required-note">

                        <span>*</span>

                        Required fields

                    </div>


                    <button
                        type="submit"
                        class="submit-btn"
                    >

                        <span>
                            Add Employee
                        </span>

                        <strong>
                            →
                        </strong>

                    </button>

                </div>


            </form>

        </div>


        <footer>

            Employee Management System

            <span>•</span>

            Powered by PHP & MySQL

        </footer>

    </main>

</div>

</body>

</html>