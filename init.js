
window.onload = function()
{
    const initPerson = personGenerator.getPerson();
    document.getElementById('firstNameOutput').innerText = initPerson.firstName;
    document.getElementById('surnameOutput').innerHTML = initPerson.surname;
    document.getElementById('genderOutput').innerHTML = initPerson.gender;
    document.getElementById('birthYearOutput').innerHTML = initPerson.birthDate;
    document.getElementById('middleNameOutput').innerHTML = initPerson.middleName;
    document.getElementById('professionOutput').innerHTML = initPerson.profession;

};

document.getElementById('generatButton').addEventListener('click', function()
{
    const initPerson = personGenerator.getPerson();
    document.getElementById('firstNameOutput').innerText = initPerson.firstName;
    document.getElementById('surnameOutput').innerHTML = initPerson.surname;
    document.getElementById('genderOutput').innerHTML = initPerson.gender;
    document.getElementById('birthYearOutput').innerHTML = initPerson.birthDate;
    document.getElementById('middleNameOutput').innerHTML = initPerson.middleName;
    document.getElementById('professionOutput').innerHTML = initPerson.profession;
    
});

document.getElementById('clearButton').addEventListener('click', function()
{
    document.getElementById('firstNameOutput').innerText = '';
    document.getElementById('surnameOutput').innerHTML = '';
    document.getElementById('genderOutput').innerHTML = '';
    document.getElementById('birthYearOutput').innerHTML = '';
    document.getElementById('middleNameOutput').innerHTML = '';
    document.getElementById('professionOutput').innerHTML = '';
})