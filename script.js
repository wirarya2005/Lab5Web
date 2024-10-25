function formValidasi(){
    const nama = document.getElementById("nama").value.trim();
    const password = document.getElementById("password").value.trim();
    const konfirmasiPassword = document.getElementById("konfirmasiPassword").value.trim();

    if (nama === ""){
        alert("Nama harus diisi");
        return false;
    }
    
    if (password === ""){
        alert("Password harus diisi");
        return false;
    } else if (password.length != 8){
        alert("Password harus terdiri dari 8 karakter");
        return false;
    }

    if (password !== konfirmasiPassword){
        alert("Konfirmasi Password tidak sesuai");
        return false;
    }

    return true;
}
