function validateForm() {
    let name = document.forms["Regis"]["Name"].value, email = document.forms["Regis"]["Email"].value;
    if (name == "" && email == "") {
      alert("Nama dan Email harus diisi");
      return false;
    }
    else if (name == "") {
        alert("Nama harus diisi");
        return false;
      }
    else if (email == "") {
        alert("Email harus diisi");
        return false;
      }
  }