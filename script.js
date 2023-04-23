window.onload = function() {

    const divParent = document.getElementById('parent');
    const divTable = document.getElementById('table');

    const hForm = document.createElement('h3');
    hForm.textContent = 'Форма для реєстрації: ';
    divParent.appendChild(hForm);

    const form = document.createElement('form');
    form.id = 'myForm';
    form.name = 'myFormName';
    divParent.appendChild(form);
    
    const divNameSurname = document.createElement('div');
    form.appendChild(divNameSurname);
    divNameSurname.setAttribute('style', 'margin-bottom: 10px');

    const userNameLabel = document.createElement('label');
    userNameLabel.for = 'name';
    userNameLabel.textContent = "Ім'я: ";
    divNameSurname.appendChild(userNameLabel);

    const userNameInput = document.createElement('input');
    userNameInput.id = 'name';
    userNameInput.type = 'text';
    userNameInput.name = 'user_name';
    divNameSurname.appendChild(userNameInput);

    const userSurnameLabel = document.createElement('label');
    userSurnameLabel.for = 'surname';
    userSurnameLabel.textContent = 'Прізвище: ';
    divNameSurname.appendChild(userSurnameLabel);
    userSurnameLabel.setAttribute('style', 'margin-left: 10px');

    const userSurnameInput = document.createElement('input');
    userSurnameInput.id = 'surname';
    userSurnameInput.type = 'text';
    userSurnameInput.name = 'user_surname';
    divNameSurname.appendChild(userSurnameInput);   

    const userBirthdateLabel = document.createElement('label');
    userBirthdateLabel.for = 'birthdate';
    userBirthdateLabel.textContent = 'Дата народження: ';
    form.appendChild(userBirthdateLabel);

    const userBirthdateInput = document.createElement('input');
    userBirthdateInput.id = 'birthdate';
    userBirthdateInput.type = 'text';
    userBirthdateInput.name = 'user_birthdate';
    form.appendChild(userBirthdateInput);

    const pGender = document.createElement('p');
    pGender.textContent = 'Стать: ';
    form.appendChild(pGender);

    const userGenderLabel1 = document.createElement('label');
    userGenderLabel1.for = 'gender1';
    userGenderLabel1.textContent = 'чоловік ';
    form.appendChild(userGenderLabel1);

    const userGenderInput1 = document.createElement('input');
    userGenderInput1.id = 'gender1';
    userGenderInput1.type = 'radio';
    userGenderInput1.name = 'user_gender';
    userGenderInput1.value = 'man';
    userGenderInput1.setAttribute('checked', 'checked');
    form.appendChild(userGenderInput1);

    const userGenderLabel2 = document.createElement('label');
    userGenderLabel2.for = 'gender2';
    userGenderLabel2.textContent = 'жінка ';
    form.appendChild(userGenderLabel2);

    const userGenderInput2 = document.createElement('input');
    userGenderInput2.id = 'gender2';
    userGenderInput2.type = 'radio';
    userGenderInput2.name = 'user_gender';
    userGenderInput2.value = 'woman';
    form.appendChild(userGenderInput2);

    const pCity = document.createElement('p');
    pCity.textContent = 'Місто: ';
    form.appendChild(pCity);

    const userCitySelect = document.createElement('select');
    userCitySelect.id = 'city';
    userCitySelect.name = 'user_city';
    form.appendChild(userCitySelect);
    
    const userCityOption1 = document.createElement('option');
    userCityOption1.value = 'kyiv';
    userCityOption1.text = 'Київ';
    userCitySelect.appendChild(userCityOption1);

    const userCityOption2 = document.createElement('option');
    userCityOption2.value = 'odesa';
    userCityOption2.text = 'Одеса';
    userCitySelect.appendChild(userCityOption2);

    const userCityOption3 = document.createElement('option');
    userCityOption3.value = 'lviv';
    userCityOption3.text = 'Львів';
    userCitySelect.appendChild(userCityOption3);

    const userCityOption4 = document.createElement('option');
    userCityOption4.value = 'dnipro';
    userCityOption4.text = 'Дніпро';
    userCitySelect.appendChild(userCityOption4);

    const userCityOption5 = document.createElement('option');
    userCityOption5.value = 'kharkiv';
    userCityOption5.text = 'Харків';
    userCitySelect.appendChild(userCityOption5);

    const pAddress = document.createElement('p');
    pAddress.textContent = 'Адреса: ';
    form.appendChild(pAddress);

    const userAddressTextarea = document.createElement('textarea');
    userAddressTextarea.id = 'address';
    userAddressTextarea.name = 'user_address';
    userAddressTextarea.cols = '70';
    form.appendChild(userAddressTextarea);
    
    const pLanguage = document.createElement('p');
    pLanguage.textContent = 'Мови, якими володієте: ';
    form.appendChild(pLanguage);
   
    const userLanguageLabel1 = document.createElement('label');
    userLanguageLabel1.for = 'language1';
    userLanguageLabel1.textContent = 'українська ';
    form.appendChild(userLanguageLabel1);
    
    const userLanguageInput1 = document.createElement('input');
    userLanguageInput1.id = 'language1';
    userLanguageInput1.type = 'checkbox';
    userLanguageInput1.name = 'user_language';
    userLanguageInput1.value = 'ukr';
    userLanguageInput1.setAttribute('checked', 'checked');
    form.appendChild(userLanguageInput1);

    const userLanguageLabel2 = document.createElement('label');
    userLanguageLabel2.for = 'language2';
    userLanguageLabel2.textContent = 'англійська ';
    form.appendChild(userLanguageLabel2);

    const userLanguageInput2 = document.createElement('input');
    userLanguageInput2.id = 'language2';
    userLanguageInput2.type = 'checkbox';
    userLanguageInput2.name = 'user_language';
    userLanguageInput2.value = 'eng';
    form.appendChild(userLanguageInput2);

    const userLanguageLabel3 = document.createElement('label');
    userLanguageLabel3.for = 'language3';
    userLanguageLabel3.textContent = 'німецька ';
    form.appendChild(userLanguageLabel3);

    const userLanguageInput3 = document.createElement('input');
    userLanguageInput3.id = 'language3';
    userLanguageInput3.type = 'checkbox';
    userLanguageInput3.name = 'user_language';
    userLanguageInput3.value = 'germ';
    form.appendChild(userLanguageInput3);      
    
    const pEducation = document.createElement('p');
    pEducation.textContent = 'Освіта: ';
    form.appendChild(pEducation);

    const userEducationLabel1 = document.createElement('label');
    userEducationLabel1.for = 'education1';
    userEducationLabel1.textContent = 'вища ';
    form.appendChild(userEducationLabel1);

    const userEducationInput1 = document.createElement('input');
    userEducationInput1.id = 'education1';
    userEducationInput1.type = 'radio';
    userEducationInput1.name = 'user_education';
    userEducationInput1.value = 'higher';
    userEducationInput1.setAttribute('checked', 'checked');
    form.appendChild(userEducationInput1);
    
    const userEducationLabel2 = document.createElement('label');
    userEducationLabel2.for = 'education2';
    userEducationLabel2.textContent = 'середня ';
    form.appendChild(userEducationLabel2);

    const userEducationInput2 = document.createElement('input');
    userEducationInput2.id = 'education2';
    userEducationInput2.type = 'radio';
    userEducationInput2.name = 'user_education';
    userEducationInput2.value = 'secondary';
    form.appendChild(userEducationInput2);

    const divButton = document.createElement('div');
    divButton.setAttribute('style', 'margin-top: 30px');
    form.appendChild(divButton);

    const myButton = document.createElement('button');
    myButton.type = 'submit';
    myButton.textContent = 'Зберегти';
    divButton.appendChild(myButton);
   
    myButton.addEventListener('click', (event) => {
        event.preventDefault();
        divParent.setAttribute('style', 'display: none');

        let arrayValue = [];

        if (form.elements.user_name.value !== '') {
            arrayValue.push(form.elements.user_name.value);
        } else {
            arrayValue.push('no info');
        }
        
        if (form.elements.user_surname.value !== '') {
            arrayValue.push(form.elements.user_surname.value);
        } else {
            arrayValue.push('no info');
        }
        
        if (form.elements.user_birthdate.value !== '') {
            arrayValue.push(form.elements.user_birthdate.value);
        } else {
            arrayValue.push('no info');
        }
       
        arrayValue.push(form.elements.user_gender.value);
        arrayValue.push(form.elements.user_city.value);
        
        if (form.elements.user_address.value !== '') {
            arrayValue.push(form.elements.user_address.value);
        } else {
            arrayValue.push('no info');
        }

        let valueLanguage = [];
        let checkboxes = document.querySelectorAll('input[name="user_language"]:checked');       
        checkboxes.forEach((checkbox) => {
            valueLanguage.push(checkbox.value);
        });
        arrayValue.push(valueLanguage);

        arrayValue.push(form.elements.user_education.value);     

        const myTable = document.createElement('table');
        for (let i = 0; i < arrayValue.length; i++) {
            const myRow = myTable.insertRow(i);        
            for (let j = 0; j < 1; j++) {
                const myCell = myRow.insertCell(j);
                myCell.innerHTML = arrayValue[i];                        
                myCell.setAttribute('style', 'border: 1px solid black');                               
            }
        }

        myTable.style.border = '1px solid black';    
        divTable.appendChild(myTable); 
        divTable.style.display = 'inline-block';        
    });     

};

