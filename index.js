// ==========================
// Firebase Login System
// ==========================

function SignIn() {

    const email = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value;

    if (email === "" || password === "") {
        alert("يرجى إدخال البريد الإلكتروني وكلمة المرور");
        return;
    }

    firebase.auth().signInWithEmailAndPassword(email, password)

    .then((userCredential) => {

        const user = userCredential.user;

        console.log("User UID:", user.uid);

        // حساب المدير
        if (user.uid === "pNLsBe8Y0ONS7oADXgj1z7gEMIg1") {

            alert("مرحباً بك أيها المدير");

            window.location.href = "admin.html";

        } else {

            // أي مستخدم آخر
            window.location.href = "cashier.html";

        }

    })

    .catch((error) => {

        console.error(error);

        alert(error.message);

    });

}

// ==========================
// Logout
// ==========================

function SignOut() {

    firebase.auth().signOut()

    .then(() => {

        window.location.href = "index.html";

    })

    .catch((error) => {

        alert(error.message);

    });

}

// ==========================
// Check Login
// ==========================

firebase.auth().onAuthStateChanged(function(user){

    if(user){

        console.log("Logged:", user.uid);

    }else{

        console.log("Not Logged");

    }

});
