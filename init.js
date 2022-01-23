document.querySelector('.btn_reset').addEventListener('click', reset)
document.querySelector('.btn_clear').addEventListener('click', clear)
// window.onload = f

function reset() {
    const initPerson = personGenerator.getPerson();
    document.getElementById('firstNameOutput').innerText = initPerson.firstName;
    document.getElementById('surnameOutput').innerText = initPerson.surnameName;
    document.getElementById('genderOutput').innerText = initPerson.gender;
    document.getElementById('professionOutput').innerText = initPerson.profession;
    document.getElementById('birthYearOutput').innerText = initPerson.birthYear;
};
function clear() {
    document.getElementById('firstNameOutput').innerText = '';
    document.getElementById('surnameOutput').innerText = '';
    document.getElementById('genderOutput').innerText ='';
    document.getElementById('professionOutput').innerText ='';
    document.getElementById('birthYearOutput').innerText = '';
};

