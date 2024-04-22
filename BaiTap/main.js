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

// Kiểm tra đăng nhập
function DangNhap() {
    var tenDangNhap = document.getElementById("login-username").value;
    var matKhau = document.getElementById("login-pass").value;

    if (tenDangNhap === "" || matKhau === "") {
        alert("Vui lòng cung cấp thông tin đăng nhập");
    } else {
        alert("Đăng nhập thành công!");
    }
}

// Kiểm tra đăng ký
function DangKy() {
    var tenDangNhap = document.getElementById("username").value;
    var matKhau1 = document.getElementById("pass1").value;
    var matKhau2 = document.getElementById("pass2").value;

    if (tenDangNhap === "" || matKhau1 === "" || matKhau2 === "") {
        alert("Vui lòng điền đầy đủ thông tin");
        return false;
    }
    if (tenDangNhap.length < 4) {
        alert("Tên đăng nhập phải dài ít nhất 4 ký tự");
        return false;
    }
    if (matKhau1.length < 8) {
        alert("Mật khẩu phải dài ít nhất 8 ký tự");
        return false;
    }
    if (matKhau1 !== matKhau2) {
        alert("Mật khẩu không trùng khớp");
        return false;
    }

    alert("Đăng ký thành công!");
    return true;
}

// Hiển thị hoặc ẩn mật khẩu
function TogglePassword() {
    var passInput = document.getElementById("login-pass");
    var eyeIcon = document.getElementById("login-eye-icon");
    var passType = passInput.getAttribute("type");

    if (passType === "password") {
        passInput.setAttribute("type", "text");
        eyeIcon.classList.remove('bx-low-vision');
        eyeIcon.classList.add('bx-show');
    } else {
        passInput.setAttribute("type", "password");
        eyeIcon.classList.remove('bx-show');
        eyeIcon.classList.add('bx-low-vision');
    }
}
