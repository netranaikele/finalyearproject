 HEAD
let isOpen = false;
function togglesidebae()
{
 const sidebar = document.getElementById('sidebar');
 if(isOpen)
 {
     sidebar.classList.add('sidebar-closed');
     isOpen = false;
 }
 else
 {
     sidebar.classList.remove('sidebar-closed');
     isOpen = true;
 }
}

     $(window).on("hashchange", function () {
	if (location.hash.slice(1) == "signup") {
		$(".page").addClass("extend");
		$("#login").removeClass("active");
		$("#signup").addClass("active");
	} else {
		$(".page").removeClass("extend");
		$("#login").addClass("active");
		$("#signup").removeClass("active");
	}
});
$(window).trigger("hashchange");

function validateLoginForm() {
	var name = document.getElementById("logName").value;
	var password = document.getElementById("logPassword").value;

	if (name == "" || password == "") {
		document.getElementById("errorMsg").innerHTML = "Please fill the required fields"
		return false;
	}

	else if (password.length < 8) {
		document.getElementById("errorMsg").innerHTML = "Your password must include atleast 8 characters"
		return false;
	}
	else {
		alert("Successfully logged in");
		return true;
	}
}
function validateSignupForm() {
	var mail = document.getElementById("signEmail").value;
	var name = document.getElementById("signName").value;
	var password = document.getElementById("signPassword").value;

	if (mail == "" || name == "" || password == "") {
		document.getElementById("errorMsg").innerHTML = "Please fill the required fields"
		return false;
	}

	else if (password.length < 8) {
		document.getElementById("errorMsg").innerHTML = "Your password must include atleast 8 characters"
		return false;
	}
	else {
		alert("Successfully signed up");
		return true;
	}
}

document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const username = loginForm.username.value;
        const password = loginForm.password.value;

        // Mocking user data verification (Replace this with your actual backend)
        if (username === 'user' && password === 'password') {
            // Save username to local storage
            localStorage.setItem('username', username);

            // Redirect to dashboard
            window.location.href = '/dashboard/' ;
        } else {
            const errorMessage = document.querySelector('.error-message');
            if (!errorMessage) {
                const errorMessage = document.createElement('p');
                errorMessage.className = 'error-message';
                errorMessage.textContent = 'Invalid username or password';
                loginForm.appendChild(errorMessage);
            }
        }
    });
});

