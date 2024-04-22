// Hiển thị form đăng nhập và ẩn form đăng ký
function ShowLoginForm() {
    var registerForm = document.getElementById("register-form");
    var loginForm = document.getElementById("login-form");

    registerForm.style.display = "none";
    loginForm.style.display = "block";
}

// Hiển thị form đăng ký và ẩn form đăng nhập
function ShowRegisterForm() {
    var registerForm = document.getElementById("register-form");
    var loginForm = document.getElementById("login-form");

    registerForm.style.display = "block";
    loginForm.style.display = "none";
}


