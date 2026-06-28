// ===============================
// Firebase Login System
// ===============================

function SignIn() {

    // قراءة البيانات من الحقول
    const email = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value;

    if (email === "" || password === "") {
        alert("من فضلك أدخل البريد الإلكتروني وكلمة المرور");
        return;
    }

    firebase.auth().signInWithEmailAndPassword(email, password)

    .then((userCredential) => {

        const user = userCredential.user;

        console.log("Logged In:", user.uid);

        // المدير
        window.location.href = "admin.html";

    })

    .catch((error) => {

        alert(error.message);

    });

}



// ===============================
// Logout
// ===============================

function SignOut() {

    firebase.auth().signOut()

    .then(() => {

        window.location.href = "index.html";

    })

    .catch((error) => {

        alert(error.message);

    });

}
