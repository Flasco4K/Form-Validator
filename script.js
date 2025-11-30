const form = document.getElementById("form"); //Öncelikle Elemanların Id `sini alıyoruz
const username = document.getElementById("username"); //Öncelikle Elemanların Id `sini alıyoruz
const email = document.getElementById("email"); //Öncelikle Elemanların Id `sini alıyoruz
const password = document.getElementById("password"); //Öncelikle Elemanların Id `sini alıyoruz
const repassword = document.getElementById("repassword"); //Öncelikle Elemanların Id `sini alıyoruz
const phone = document.getElementById("phone"); //Öncelikle Elemanların Id `sini alıyoruz

function error(input, message) {
    input.className = "form-control is-invalid" //is-invalid değer girilmediğinde kırmızı çizgi ve ünlem yapar
    const div = input.nextElementSibling; //bir sonraki indexe ulaşır
    div.innerText = message
    div.className = "invalid-feedback";
}
function success(input) {
    input.className = "form-control is-valid" //is-valid değer girildiğinde yeşil çizgi ve tik yapar
}

const checkEmail = (input) => { //Mail girilmediği taktirde uyarı mesajı verir
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    if (re.test(input.value)) {
        success(input);
    } else {
        error(input, "Hatali Bir Mail Adresi")
    }

};

function checkRequired(inputs) { //Ayrı ayrı if-else kullanmadan elemanları yazdırma
    inputs.forEach(function (input) {
        if (input.value === "") {
            error(input, `${input.id} is required.`) //Bilgi girilmediğinde uyarı mesajı verir
        } else {
            success(input);
        }
    })

};

function checkLenght(input, min, max) {
    if (input.value.length < min) {
        error(input, `${input.id} En az ${min} karakter olmalidir.`)
    } else if (input.value.length > max) {
        error(input, `${input.id} En fazla ${max} karakter olmalidir.`)
    } else {
        success(input);
    }
}

function checkPasswords(input1, input2) {
    if (input1.value !== input2.value) {
        error(input2, `Parolalar eşleşmiyor`);
    }
}

function checkPhone(input) {
    let exp = /^\d{10}$/;
    if (!exp.test(input.value))
        error(input, "Telefon 10 karakterli Olmalidir.");
}


form.addEventListener("submit", function (e) { //Formu submit(göndermek) etmek için
    e.preventDefault(); //Formu submit ETMEZ - Console`a Yazdırır

    checkRequired([username, email, password, repassword, phone]);
    checkEmail(email);
    checkLenght(username, 7, 15);
    checkPasswords(password, repassword);
    checkPhone(phone);

});




