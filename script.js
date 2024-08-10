const userDetails = {
    "perry": {
            name: "MR. Perry Harry",
            dob: "1900-11-01",
            gp: "Belfast City Hospital",
            drugAllergy: "None known",
            profilePic: "https://ademoyosoreoluwa.github.io/medicals/Male-1.png"
    },
    "jane": {
        name: "MS. Jane Doe",
        dob: "1975-05-14",
        gp: "City Health Clinic",
        drugAllergy: "Penicillin",
        profilePic: "https://ademoyosoreoluwa.github.io/medicals/Male-2.png"
    },
    "john": {
        name: "MR. John Smith",
        dob: "1980-02-20",
        gp: "Town Health Center",
        drugAllergy: "None known",
        profilePic: "https://ademoyosoreoluwa.github.io/medicals/Male-3.png"
    },

    "MR. Perry Harry": {
        dob: "1900-11-01",
        gp: "Belfast City Hospital",
        drugAllergy: "None known",
        profilePic: "https://ademoyosoreoluwa.github.io/medicals/Male-1.png",
        medications: [
            { block: 'A', date: '09-05-14', name: 'Levothyroxine 50MCG', dosage: '1', route: 'Oral' },
            { block: 'B', date: '09-05-14', name: 'Carbamazepine / Tegretol 200MG', dosage: '2.5/3', route: 'Oral' },
            { block: 'C', date: '10-02-21', name: 'Carbamazepine / Tegretol 100MG', dosage: '1', route: 'Oral' },
            { block: 'D', date: '09-05-14', name: 'Risperidone 2MG', dosage: '1', route: 'Oral' },
            { block: 'E', date: '', name: 'Risperidone 1MG', dosage: '1', route: 'Oral' },
            { block: 'F', date: '09-05-14', name: 'Atorvastatin 40MG', dosage: '2', route: 'Oral' },
            { block: 'G', date: '', name: 'Vensir XL 150MG', dosage: '1', route: 'Oral' },
            { block: 'H', date: '04-10-19', name: 'Co-codamol 30X50MG', dosage: '2', route: 'Oral' },
            { block: 'I', date: '07-07-18', name: 'Adcal-D3 Caplets 750MG/200 I.U', dosage: '2', route: 'Oral' },
            { block: 'J', date: '18-08-23', name: 'Slow Sodium 600MG', dosage: '1', route: 'Oral' },
            { block: 'K', date: '31-05-24', name: 'Fluoride Toothpaste ', dosage: 'To Be Used Twice(2x) Daily', route: 'Oral' },
            { block: 'L', date: '05-05-22', name: 'Anoro Ellipta Inhaler 55/22 MCG', dosage: '1 Click', route: 'Oral' },
            { block: 'M', date: '01-01-21', name: 'Amoxicillin 500MG', dosage: '1 Puff', route: 'Oral' },
            { block: 'N', date: '05-03-21', name: 'Vitamin D 2000IU', dosage: '2 Puffs', route: 'Oral' },
            { block: 'O', date: '23-02-17', name: 'Salbutamol Inhaler', dosage: 'PRN- As and when required - Every 2Hours', route: 'Inhaled(1 Puff)' },
            { block: 'P', date: '18-11-20', name: 'Cetirizine 10MG', dosage: 'PRN – X1 daily when required(ANTIHISTAMINE FOR HAYFEVER)', route: 'Oral' },
            { block: 'Q', date: '09-09-19', name: 'IBUPROFEN GEL (Back Pain)', dosage: 'PRN – X4 daily when required', route: 'Topical' },
            { block: 'R', date: '04-10-19', name: 'MACROGOL', dosage: '1 Sachet PRN - as per instructions', route: 'Oral' },
            { block: 'S', date: '18-11-20', name: 'Paracetamol 500mg', dosage: 'PRN - as per instructions (not within 4 hours of co-codamol)', route: 'Oral' },
            { block: 'T', date: '10-06-21', name: 'Hydrochlorothiazide 25MG', dosage: 'PRN – X1 daily when required', route: 'Oral' },
            { block: 'U', date: '12-08-21', name: 'Gabapentin 300MG', dosage: 'PRN – X1 daily when required', route: 'Oral' },
            { block: 'V', date: '15-09-21', name: 'Clonazepam 0.5MG', dosage: 'PRN – X1 daily when required', route: 'Oral' },
            { block: 'W', date: '20-10-21', name: 'Prednisone 20MG', dosage: 'PRN – X1 daily when required', route: 'Oral' },
            { block: 'X', date: '25-11-21', name: 'Melatonin 5MG', dosage: 'PRN – X1 daily when required', route: 'Oral' },
            { block: 'Y', date: '30-12-21', name: 'Zinc 50MG', dosage: 'PRN – X1 daily when required', route: 'Oral' },
            { block: 'Z', date: '05-01-22', name: 'Omega-3 Fish Oil 1000MG', dosage: 'PRN – X1 daily when required', route: 'Oral' }
        ]
    },
    "Ms. Jane Doe": {
        dob: "1975-05-14",
        gp: "City Health Clinic",
        drugAllergy: "Penicillin",
        profilePic: "https://ademoyosoreoluwa.github.io/medicals/Male-2.png",
        medications: [
            { block: 'A', date: '10-10-20', name: 'Metformin 500MG', dosage: '1', route: 'Oral' },
            { block: 'B', date: '12-11-20', name: 'Aspirin 75MG', dosage: '1', route: 'Oral' },
            { block: 'C', date: '15-01-21', name: 'Atorvastatin 20MG', dosage: '1', route: 'Oral' },
            { block: 'D', date: '18-02-21', name: 'Lisinopril 10MG', dosage: '1', route: 'Oral' },
            { block: 'E', date: '20-03-21', name: 'Omeprazole 40MG', dosage: '1', route: 'Oral' },
            { block: 'F', date: '25-04-21', name: 'Levothyroxine 75MCG', dosage: '1', route: 'Oral' },
            { block: 'G', date: '30-05-21', name: 'Furosemide 20MG', dosage: '1', route: 'Oral' },
            { block: 'H', date: '05-06-21', name: 'Simvastatin 10MG', dosage: '1', route: 'Oral' },
            { block: 'I', date: '10-07-21', name: 'Ibuprofen 400MG', dosage: '1', route: 'Oral' },
            { block: 'J', date: '15-08-21', name: 'Amlodipine 5MG', dosage: '1', route: 'Oral' },
            { block: 'K', date: '20-09-21', name: 'Albuterol', dosage: '1', route: 'Oral' },
            { block: 'L', date: '25-10-21', name: 'Gabapentin 100MG', dosage: '1', route: 'Oral' },
            { block: 'M', date: '30-11-21', name: 'Cetirizine 10MG', dosage: '1', route: 'Oral' },
            { block: 'N', date: '05-12-21', name: 'Citalopram 20MG', dosage: '1', route: 'Oral' },
            { block: 'O', date: '10-01-22', name: 'Oxycodone 5MG', dosage: '1', route: 'Oral' },
            { block: 'P', date: '15-02-22', name: 'Albuterol Inhaler', dosage: '2 Puffs', route: 'Oral' },
            { block: 'Q', date: '20-03-22', name: 'Cyclobenzaprine 10MG', dosage: '1 Puffs', route: 'Oral' },
            { block: 'R', date: '25-04-22', name: 'Tramadol 50MG', dosage: '1 Click', route: 'Oral' },
            { block: 'S', date: '30-05-22', name: 'Warfarin 5MG', dosage: '2 Clicks', route: 'Oral' },
            { block: 'T', date: '05-06-22', name: 'Pantoprazole 40MG', dosage: '2 Puffs', route: 'Oral' },
            { block: 'U', date: '10-07-22', name: 'Ciprofloxacin 500MG', dosage: '1 Click', route: 'Oral' },
            { block: 'V', date: '15-08-22', name: 'Amoxicillin 250MG', dosage: 'PRN – X1 daily when required', route: 'Oral' },
            { block: 'W', date: '20-09-22', name: 'Montelukast 10MG', dosage: 'PRN – X2 daily when required', route: 'Oral' },
            { block: 'X', date: '25-10-22', name: 'Methotrexate 2.5MG', dosage: 'PRN – X1 daily when required', route: 'Oral' },
            { block: 'Y', date: '30-11-22', name: 'Ranitidine 150MG', dosage: 'PRN – X2 daily when required', route: 'Oral' },
            { block: 'Z', date: '05-12-22', name: 'Meloxicam 15MG', dosage: 'PRN – X2 daily when required', route: 'Oral' }
        ]
    },
    "MR. John Smith": {
        dob: "1980-02-20",
        gp: "Town Health Center",
        drugAllergy: "None known",
        profilePic: "https://ademoyosoreoluwa.github.io/medicals/Male-3.png",
        medications: [
            { block: 'A', date: '05-03-19', name: 'Lisinopril 10MG', dosage: '1', route: 'Oral' },
            { block: 'B', date: '07-04-19', name: 'Metoprolol 50MG', dosage: '1', route: 'Oral' },
            { block: 'C', date: '09-05-19', name: 'Simvastatin 40MG', dosage: '1', route: 'Oral' },
            { block: 'D', date: '11-06-19', name: 'Aspirin 81MG', dosage: '1', route: 'Oral' },
            { block: 'E', date: '13-07-19', name: 'Losartan 100MG', dosage: '1', route: 'Oral' },
            { block: 'F', date: '15-08-19', name: 'Omeprazole 20MG', dosage: '1', route: 'Oral' },
            { block: 'G', date: '17-09-19', name: 'Hydrochlorothiazide 25MG', dosage: '1', route: 'Oral' },
            { block: 'H', date: '19-10-19', name: 'Atorvastatin 20MG', dosage: '1', route: 'Oral' },
            { block: 'I', date: '21-11-19', name: 'Clonidine 0.1MG', dosage: '1', route: 'Oral' },
            { block: 'J', date: '23-12-19', name: 'Diltiazem 30MG', dosage: '1', route: 'Oral' },
            { block: 'K', date: '25-01-20', name: 'Gabapentin 300MG', dosage: '1', route: 'Oral' },
            { block: 'L', date: '27-02-20', name: 'Labetalol 100MG', dosage: '1', route: 'Oral' },
            { block: 'M', date: '29-03-20', name: 'Cetirizine 10MG', dosage: '1', route: 'Oral' },
            { block: 'N', date: '01-04-20', name: 'Meloxicam 7.5MG', dosage: '1', route: 'Oral' },
            { block: 'O', date: '03-05-20', name: 'Sertraline 50MG', dosage: '1 Click', route: 'Oral' },
            { block: 'P', date: '05-06-20', name: 'Trazodone 50MG', dosage: '1 Click', route: 'Oral' },
            { block: 'Q', date: '07-07-20', name: 'Cyclobenzaprine 10MG', dosage: '1 Puff', route: 'Oral' },
            { block: 'R', date: '09-08-20', name: 'Baclofen 10MG', dosage: '2 Puffs', route: 'Oral' },
            { block: 'S', date: '11-09-20', name: 'Levothyroxine 100MCG', dosage: '1 Click', route: 'Oral' },
            { block: 'T', date: '13-10-20', name: 'Amitriptyline 10MG', dosage: 'PRN – X2 daily when required', route: 'Oral' },
            { block: 'U', date: '15-11-20', name: 'Allopurinol 300MG', dosage: 'PRN – X2 daily when required', route: 'Oral' },
            { block: 'V', date: '17-12-20', name: 'Albuterol Inhaler', dosage: 'PRN – X2 daily when required', route: 'Inhaled(2 Puffs)' },
            { block: 'W', date: '19-01-21', name: 'Vitamin D 1000IU', dosage: 'PRN – X2 daily when required', route: 'Oral' },
            { block: 'X', date: '21-02-21', name: 'Zolpidem 5MG', dosage: 'PRN – X2 daily when required', route: 'Oral' },
            { block: 'Y', date: '23-03-21', name: 'Zinc 50MG', dosage: 'PRN – X2 daily when required', route: 'Oral' },
            { block: 'Z', date: '25-04-21', name: 'Omega-3 Fish Oil 1000MG', dosage: 'PRN – X2 daily when required', route: 'Oral' }
        ]
    }
};

function fillDetails(userKey) {

    if (userDetails[userKey]) {
        const user = userDetails[userKey];
        document.getElementById(userKey + "-name").value = user.name;
        document.getElementById(userKey + "-dob").value = user.dob;
        document.getElementById(userKey + "-age").value = calculateAge(user.dob);
        document.getElementById(userKey + "-gp").value = user.gp;
        document.getElementById(userKey + "-drug-allergy").value = user.drugAllergy;
        document.getElementById("profile-pic").src = user.profilePic;
    }
}

function calculateAge(dob) {
    const birthDate = new Date(dob);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}

function populateDays() {
    const daysOfMonth = document.getElementById("days-of-month");
    for (let i = 1; i <= 31; i++) {
        const th = document.createElement("th");
        th.textContent = i;
        daysOfMonth.appendChild(th);
    }
}

function populateCategories() {
    const categories = [
        "Supported to attend health app",
        "Received annual flu vaccination",
        "Attended health initiative",
        "Supported to manage risk",
        "Took part in health and safety initiative",
        "Supported to claim benefits",
        "Supported to manage personal finances",
        "Supported with debt/arrears",
        "Supported with money saving initiative",
        "Plan in place to develop new skill",
        "Supported with home cleaning, laundry, cooking",
        "Supported to report repairs/maintain home",
        "Supported with a tenancy issue",
        "Supported with a consumer/environment initiative",
        "Supported to maintain family contact",
        "Supported to maintain a friendship",
        "Supported to maintain a relationship",
        "Supported with a day activity",
        "Supported to attend leisure activity",
        "Supported to attend place of worship",
        "Supported to attend Triangle event",
        "Supported to attend community event"
    ];
    
    const tbody = document.getElementById("categories");
    categories.forEach(category => {
        const tr = document.createElement("tr");
        const tdCategory = document.createElement("td");
        tdCategory.textContent = category;
        tr.appendChild(tdCategory);

        for (let i = 1; i <= 31; i++) {
            const td = document.createElement("td");
            const checkbox = document.createElement("input");
            checkbox.type = "checkbox";
            checkbox.name = `${category}-${i}`;
            td.appendChild(checkbox);
            tr.appendChild(td);
        }

        const tdTotal = document.createElement("td");
        const totalInput = document.createElement("input");
        totalInput.type = "number";
        totalInput.name = `total-${category}`;
        totalInput.readOnly = true;
        tdTotal.appendChild(totalInput);
        tr.appendChild(tdTotal);

        tbody.appendChild(tr);
    });
}

document.addEventListener("DOMContentLoaded", function () {
    populateDays();
    populateCategories();

    document.querySelector('form').addEventListener('submit', handleSubmit);
});

function openTab(event, userKey) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
        tabcontent[i].classList.remove("active");
    }
    tablinks = document.getElementsByClassName("tab");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(userKey + "-tab").style.display = "block";
    document.getElementById(userKey + "-tab").classList.add("active");
    event.currentTarget.className += " active";
    fillDetails(userKey);
}

function handleDocumentationChange(event) {
    const pages = {
        "Medication Record Sheet": 'medication.html',
        "Night Duty Task Sheet": 'night_duty_task_sheet.html',
        "Communication and Delegation Sheet": 'delegation.html',
        "Night Duty Health and Safety Checks": 'night_health_and_safety_checks.html',
        "First Aid Box Checklist": 'first_aid_checklist.html',
        "Personal Accounting Sheet": 'personal_account.html',
        "Petty Cash Accounting Sheet": 'petty_cash.html',
        "Grocery Accounting Sheet": 'grocerry_accounting.html',
        "Activities Accounting Sheet": 'activities_cash.html',
        "Participation Record": 'participation_record.html'
    };
    if (pages[event.target.value]) {
        window.open(pages[event.target.value], '_blank');
    }
}

function fillDetailsMedication() {
    const userName = document.getElementById("service-user-name").value;
    console.log(`Selected user: ${userName}`);
    if (userDetails[userName]) {
        document.getElementById("dob").value = userDetails[userName].dob;
        document.getElementById("gp").value = userDetails[userName].gp;
        document.getElementById("drug-allergy").value = userDetails[userName].drugAllergy;
        document.getElementById("profile-pic").src = userDetails[userName].profilePic;
        updateMedications(userDetails[userName].medications);
        calculateAgeMedication(userDetails[userName].dob);
    } else {
        console.log("User not found, loading fallback image.");
        document.getElementById("dob").value = "";
        document.getElementById("gp").value = "";
        document.getElementById("drug-allergy").value = "";
        document.getElementById("age").value = "";
        document.getElementById("profile-pic").src = "/static/assets/images/profil.png";
        updateMedications([]);
    }
}

function updateMedications(medications) {
    const table = document.getElementById("medication-table");
    table.innerHTML = `
        <tr>
            <th>Block letters</th>
            <th>Date Commenced</th>
            <th>Drug Name</th>
            <th>Dosage</th>
            <th>Route of Administration</th>
            <th>8am</th>
            <th>12pm</th>
            <th>4pm</th>
            <th>8pm</th>
        </tr>`;
    medications.forEach((med, index) => {
        const row = document.createElement("tr");
        let highlightClass = "highlight-green";
        if (med.dosage.includes("Click")) highlightClass = "highlight-blue";
        else if (med.dosage.includes("Puff")) highlightClass = "highlight-blue";
        else if (med.dosage.includes("PRN")) highlightClass = "highlight-red";
        row.className = highlightClass;
        row.innerHTML = `
            <td>${med.block}</td>
            <td>${med.date}</td>
            <td>${med.name}</td>
            <td>${med.dosage}</td>
            <td>${med.route}</td>
            <td class="radio"><input type="radio" name="medications[${index}][8am]" value="8am"></td>
            <td class="radio"><input type="radio" name="medications[${index}][12pm]" value="12pm"></td>
            <td class="radio"><input type="radio" name="medications[${index}][4pm]" value="4pm"></td>
            <td class="radio"><input type="radio" name="medications[${index}][8pm]" value="8pm"></td>
        `;
        table.appendChild(row);
    });
}

function calculateAgeMedication(dob) {
    const birthDate = new Date(dob);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    document.getElementById("age").value = age;
}

document.addEventListener("DOMContentLoaded", function () {
    const firstTab = document.querySelector('.tab');
    if (firstTab) {
        openTab({ currentTarget: firstTab }, 'perry');
    }

    document.querySelectorAll('select').forEach(select => {
        select.addEventListener('change', handleDocumentationChange);
    });

    /*document.querySelector('form').addEventListener('submit', function (event) {
            event.preventDefault();
            showConfirmationMessage();
            clearForm();
        });*/

document.querySelector('form').addEventListener('submit', handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    console.log("Form submitted");
    const method = form.method.toUpperCase() === 'GET' ? 'POST' : form.method.toUpperCase();
    fetch(form.action, {
        method: method,
        body: method === 'GET' ? null : formData
    })
    .then(response => response.text())
    .then(data => {
        console.log("Server response:", data);
        document.getElementById("confirmationMessage").style.display = "block";
        showConfirmationMessage();
        clearForm();
    })
    .catch(error => {
        console.error('Error:', error);
    });
}


    function showConfirmationMessage() {
        document.getElementById('confirmationMessage').style.display = 'block';
        setTimeout(() => {
            document.getElementById('confirmationMessage').style.display = 'none';
        }, 5000);
    }

    function clearForm() {
    document.querySelector('form').reset();
    const rows = document.querySelectorAll('#accounting-rows tr');
    rows.forEach(row => {
        row.querySelector('[name="balance"]').value = '';
    });
}

    function clearForm() {
        document.querySelector('form').reset();
    }

    const checklistTable = document.getElementById("checklist-table").getElementsByTagName('tbody')[0];
    const items = [
        "First aid booklet",
        "HSE medium sterile dressing approximately 12 x12 cm",
        "HSE large sterile dressing approximately 18 x18 cm",
        "Triangular Bandage approximately 90 x 90 x 130cm",
        "Safety Pins (Pk 6)",
        "Eye pad",
        "Blue plasters (Pk 10)",
        "Non-allergic plasters (Pk10)",
        "Microporous tape 2.5cm x 10m",
        "Disposable gloves (pairs) various sizes",
        "Conforming bandage",
        "Scissors",
        "Face shield for CPR",
        "Disposable heat retaining blanket",
        "Burnshield dressing"
    ];
    const quantities = [1, 4, 1, 2, 1, 2, 2, 2, 1, 6, 1, 1, 1, 1, 1];

    items.forEach((item, index) => {
        const row = checklistTable.insertRow();
        row.insertCell(0).innerText = item;
        row.insertCell(1).innerText = quantities[index];
        for (let i = 0; i < 12; i++) {
            row.insertCell(i + 2).innerHTML = `<input type="radio" name="month${index}" />`;
        }
    });

    displayBalance();

    const rows = document.querySelectorAll('#accounting-rows tr');
    rows.forEach(row => {
        row.querySelector('[name="payment-in"]').addEventListener('input', calculateBalance);
        row.querySelector('[name="payment-out"]').addEventListener('input', calculateBalance);
    });

    function calculateBalance() {
        const rows = document.querySelectorAll('#accounting-rows tr');
        let balance = 0;

        rows.forEach(row => {
            const paymentIn = parseFloat(row.querySelector('[name="payment-in"]').value) || 0;
            const paymentOut = parseFloat(row.querySelector('[name="payment-out"]').value) || 0;
            balance += paymentIn - paymentOut;
            row.querySelector('[name="balance"]').value = balance.toFixed(2);
        });
        return balance.toFixed(2);
    }

    function displayBalance() {
        const balance = localStorage.getItem('balance') || '0.00';
        document.getElementById('current-balance').innerText = 'Current Balance: £' + balance;
    }
});

function fillDay() {
    const dateInput = document.querySelector('input[name="date"]');
    const dayInput = document.querySelector('input[name="day"]');
    const date = new Date(dateInput.value);
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const day = daysOfWeek[date.getDay()];
    dayInput.value = day;
}
