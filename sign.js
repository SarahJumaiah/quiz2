document.getElementById('signup-Form').addEventListener('submit', function(event) {
    event.preventDefault();

    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let messageElement = document.getElementById('message');
    let re_name = "/[A-Z]/"
    let re_email = "/@/"
   
//| اسم المستخدم | يجب ان يكون اكثر من ثلاثة أحرف |
    if (name.length < 3) {
        messageElement.textContent = 'Username must include more than three letters';
        return;
    }
//// |- اليوزر | يجب ان يحتوي على الأقل حرف كبير |
//     if (re_name.test(name)) {
//         messageElement.textContent = 'Username must include uppercase letter';
//         return;
//     }

// ////| الإيميل | يجيب ان يتأكد انه يحتوي على @ |
// if (re_email.test(email)) {
//     messageElement.textContent = 'Email must include @ Character';
//     return;
// }
// //| كلمة السر | يجب ان تكون اكثر من 4 ارقام |

    if (password.length < 4) {
        messageElement.textContent = 'Password must include more than 4 .';
        return;
    }

    fetch("https://66e7e68bb17821a9d9da6e50.mockapi.io/login", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, email, password })
    })

    .then(response => response.json())
    .then((data) => {
        messageElement.textContent = 'Redirecting to login...';
        setTimeout(() => {
            window.location.href = 'log.html';
        }, 2000);
    })
});