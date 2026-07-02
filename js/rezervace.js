const form = document.getElementById("reservationForm");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const params = {
        jmeno: document.getElementById("jmeno").value,
        telefon: document.getElementById("telefon").value,
        email: document.getElementById("email").value,
        datum: document.getElementById("datum").value,
        cas: document.getElementById("cas").value,
        kurt: document.getElementById("kurt").value,
        poznamka: document.getElementById("poznamka").value
    };

    emailjs.send(
        "service_8jq31wb",
        "template_pmft6uq",
        params
    )
    .then(() => {

        alert("✅ Rezervace byla úspěšně odeslána.");

        form.reset();

    })
    .catch((error) => {

        console.error(error);

        alert("❌ Rezervaci se nepodařilo odeslat.");

    });
});