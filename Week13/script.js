document.getElementById("regForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let username = document.getElementById("username").value.trim();
    let password = document.getElementById("password").value;
    let repassword = document.getElementById("repassword").value;
    let month = document.getElementById("month").value;

    let error = document.getElementById("errorMsg");
    error.innerHTML = "";

    if (username === "") {
        error.innerHTML = "Username is required";
        return;
    }

    if (password === "") {
        error.innerHTML = "Password is required";
        return;
    }

    if (password !== repassword) {
        error.innerHTML = "Passwords do not match";
        return;
    }

    if (month === "") {
        error.innerHTML = "Please select your birth month";
        return;
    }

    // lấy danh sách user
    let users = JSON.parse(localStorage.getItem("users")) || [];

    // check trùng username
    let existed = users.find(u => u.username === username);
    if (existed) {
        error.innerHTML = "Username already exists";
        return;
    }

    let userData = {
        username: username,
        password: password,
        month: month
    };

    users.push(userData);
    localStorage.setItem("users", JSON.stringify(users));

    // lưu user hiện tại (login)
    localStorage.setItem("currentUser", username);

    alert("✅ Registered successfully!");

    // reset form
    document.getElementById("regForm").reset();
});