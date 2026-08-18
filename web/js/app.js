"use strict";


/*
============================================================
 SCHOOL MANAGEMENT SYSTEM
 Kaizen Software Labs

 INTEGRAÇÃO FINAL DA SPRINT

 Funcionalidades:

 - Dashboard
 - Alunos
 - Buscar aluno
 - Cadastrar aluno
 - Professores
 - Cadastrar professor
 - Faltas
 - Consultar faltas
 - Estatísticas
 - Async/Await

 Tecnologias:

 - DOM
 - getElementById()
 - getElementsByClassName()
 - addEventListener()
 - click
 - textContent
 - console.log()
 - async
 - await

 Não utilizar:

 - querySelector()
 - querySelectorAll()
 - Frameworks
 - API
 - MySQL
============================================================
*/



// ============================================================
// DADOS DOS ALUNOS
// ============================================================

const students = [

    {
        name: "Álvaro",
        registrationNumber: "1001",
        average: 9.8
    },

    {
        name: "Arthur",
        registrationNumber: "1002",
        average: 9.5
    },

    {
        name: "Victor",
        registrationNumber: "1003",
        average: 9.1
    },

    {
        name: "Ryan",
        registrationNumber: "1004",
        average: 9.4
    },

    {
        name: "Matheus",
        registrationNumber: "1005",
        average: 9.3
    },

    {
        name: "Anny",
        registrationNumber: "1006",
        average: 9.6
    },

    {
        name: "Ana",
        registrationNumber: "1007",
        average: 9.0
    },

    {
        name: "Eduarda",
        registrationNumber: "1008",
        average: 9.7
    },

    {
        name: "João Victor",
        registrationNumber: "1009",
        average: 9.9
    },

    {
        name: "Wenso",
        registrationNumber: "1010",
        average: 9.2
    },

    {
        name: "Carlos",
        registrationNumber: "2001",
        average: 4.5
    },

    {
        name: "Maria",
        registrationNumber: "2002",
        average: 6.0
    }

];



// ============================================================
// DADOS DOS PROFESSORES
// ============================================================

const teachers = [

    {
        name: "Alexandre",
        subject: "Desenvolvimento Web"
    },

    {
        name: "Moisés",
        subject: "Algoritmos"
    }

];



// ============================================================
// DADOS DE FALTAS
// ============================================================

const absences = new Map();



// ============================================================
// ELEMENTOS DO DOM
// ============================================================

const content =
    document.getElementById("content");


const menuItems =
    document.getElementsByClassName("menu-item");



console.log(
    "========================================"
);

console.log(
    " SCHOOL MANAGEMENT SYSTEM - WEB"
);

console.log(
    "========================================"
);


console.log(
    "Interface iniciada."
);

console.log(
    "Alunos:",
    students.length
);

console.log(
    "Professores:",
    teachers.length
);



// ============================================================
// LIMPAR CONTEÚDO
// ============================================================

function clearContent() {

    content.textContent = "";

}



// ============================================================
// CRIAR TÍTULO
// ============================================================

function createTitle(text) {

    const title =
        document.createElement("h2");


    title.textContent =
        text;


    return title;

}



// ============================================================
// DASHBOARD
// ============================================================

function showDashboard() {

    clearContent();


    const title =
        createTitle("Dashboard");


    content.appendChild(
        title
    );


    const description =
        document.createElement("p");


    description.textContent =
        "Bem-vindo ao School Management System.";


    content.appendChild(
        description
    );


    const studentsInfo =
        document.createElement("p");


    studentsInfo.textContent =
        "Alunos cadastrados: " +
        students.length;


    content.appendChild(
        studentsInfo
    );


    const teachersInfo =
        document.createElement("p");


    teachersInfo.textContent =
        "Professores cadastrados: " +
        teachers.length;


    content.appendChild(
        teachersInfo
    );


    console.log(
        "Dashboard selecionado."
    );

}



// ============================================================
// LISTAR ALUNOS
// ============================================================

function listStudents() {

    clearContent();


    const title =
        createTitle("Alunos");


    content.appendChild(
        title
    );


    const description =
        document.createElement("p");


    description.textContent =
        "Lista de alunos cadastrados.";


    content.appendChild(
        description
    );


    const registerButton =
        document.createElement("button");


    registerButton.textContent =
        "Cadastrar Aluno";


    content.appendChild(
        registerButton
    );


    const searchButton =
        document.createElement("button");


    searchButton.textContent =
        "Buscar Aluno";


    content.appendChild(
        searchButton
    );


    const listArea =
        document.createElement("div");


    content.appendChild(
        listArea
    );


    console.log(
        "Aluno selecionado."
    );


    console.log(
        "Lista de alunos carregada."
    );


    for (
        let i = 0;
        i < students.length;
        i++
    ) {

        const student =
            document.createElement("p");


        student.textContent =
            (i + 1) +
            " - " +
            students[i].name +
            " | Matrícula: " +
            students[i].registrationNumber +
            " | Média: " +
            students[i].average;


        listArea.appendChild(
            student
        );

    }


    registerButton.addEventListener(
        "click",
        showStudentRegister
    );


    searchButton.addEventListener(
        "click",
        showStudentSearch
    );

}



// ============================================================
// CADASTRAR ALUNO
// ============================================================

function showStudentRegister() {

    clearContent();


    const title =
        createTitle(
            "Cadastrar Aluno"
        );


    content.appendChild(
        title
    );


    const nameLabel =
        document.createElement("p");


    nameLabel.textContent =
        "Nome do aluno:";


    content.appendChild(
        nameLabel
    );


    const nameInput =
        document.createElement("input");


    nameInput.type =
        "text";


    nameInput.placeholder =
        "Digite o nome";


    content.appendChild(
        nameInput
    );


    const registrationLabel =
        document.createElement("p");


    registrationLabel.textContent =
        "Matrícula:";


    content.appendChild(
        registrationLabel
    );


    const registrationInput =
        document.createElement("input");


    registrationInput.type =
        "text";


    registrationInput.placeholder =
        "Digite a matrícula";


    content.appendChild(
        registrationInput
    );


    const averageLabel =
        document.createElement("p");


    averageLabel.textContent =
        "Média:";


    content.appendChild(
        averageLabel
    );


    const averageInput =
        document.createElement("input");


    averageInput.type =
        "number";


    averageInput.step =
        "0.1";


    averageInput.placeholder =
        "Digite a média";


    content.appendChild(
        averageInput
    );


    const registerButton =
        document.createElement("button");


    registerButton.textContent =
        "Cadastrar";


    content.appendChild(
        registerButton
    );


    const result =
        document.createElement("p");


    content.appendChild(
        result
    );


    registerButton.addEventListener(
        "click",
        function () {

            const name =
                nameInput.value.trim();


            const registration =
                registrationInput.value.trim();


            const average =
                Number(
                    averageInput.value
                );


            if (
                name === "" ||
                registration === "" ||
                isNaN(average)
            ) {

                result.textContent =
                    "Preencha todos os campos.";


                console.log(
                    "Cadastro de aluno inválido."
                );


                return;

            }


            const existingStudent =
                students.find(
                    function (student) {

                        return student.registrationNumber ===
                            registration;

                    }
                );


            if (existingStudent) {

                result.textContent =
                    "A matrícula já está cadastrada.";


                console.log(
                    "Matrícula já existente."
                );


                return;

            }


            const newStudent = {

                name: name,

                registrationNumber:
                    registration,

                average: average

            };


            students.push(
                newStudent
            );


            result.textContent =
                "Aluno cadastrado com sucesso!";


            console.log(
                "Aluno cadastrado:",
                newStudent
            );

        }
    );


    console.log(
        "Cadastro de aluno aberto."
    );

}



// ============================================================
// BUSCAR ALUNO
// ============================================================

function showStudentSearch() {

    clearContent();


    const title =
        createTitle(
            "Buscar Aluno"
        );


    content.appendChild(
        title
    );


    const input =
        document.createElement("input");


    input.type =
        "text";


    input.placeholder =
        "Digite a matrícula";


    content.appendChild(
        input
    );


    const button =
        document.createElement("button");


    button.textContent =
        "Buscar";


    content.appendChild(
        button
    );


    const result =
        document.createElement("p");


    content.appendChild(
        result
    );


    button.addEventListener(
        "click",
        function () {

            const registration =
                input.value.trim();


            const student =
                students.find(
                    function (student) {

                        return student.registrationNumber ===
                            registration;

                    }
                );


            if (student) {

                result.textContent =
                    "Aluno encontrado: " +
                    student.name +
                    " | Matrícula: " +
                    student.registrationNumber +
                    " | Média: " +
                    student.average;


                console.log(
                    "Aluno encontrado:",
                    student
                );

            } else {

                result.textContent =
                    "Aluno não encontrado.";


                console.log(
                    "Aluno não encontrado."
                );

            }

        }
    );


    console.log(
        "Busca de aluno aberta."
    );

}



// ============================================================
// LISTAR PROFESSORES
// ============================================================

function listTeachers() {

    clearContent();


    const title =
        createTitle(
            "Professores"
        );


    content.appendChild(
        title
    );


    const description =
        document.createElement("p");


    description.textContent =
        "Lista de professores cadastrados.";


    content.appendChild(
        description
    );


    const registerButton =
        document.createElement("button");


    registerButton.textContent =
        "Cadastrar Professor";


    content.appendChild(
        registerButton
    );


    const listArea =
        document.createElement("div");


    content.appendChild(
        listArea
    );


    console.log(
        "Professor selecionado."
    );


    console.log(
        "Lista de professores carregada."
    );


    for (
        let i = 0;
        i < teachers.length;
        i++
    ) {

        const teacher =
            document.createElement("p");


        teacher.textContent =
            (i + 1) +
            " - " +
            teachers[i].name +
            " | Disciplina: " +
            teachers[i].subject;


        listArea.appendChild(
            teacher
        );

    }


    registerButton.addEventListener(
        "click",
        showTeacherRegister
    );

}



// ============================================================
// CADASTRAR PROFESSOR
// ============================================================

function showTeacherRegister() {

    clearContent();


    const title =
        createTitle(
            "Cadastrar Professor"
        );


    content.appendChild(
        title
    );


    const nameInput =
        document.createElement("input");


    nameInput.type =
        "text";


    nameInput.placeholder =
        "Nome do professor";


    content.appendChild(
        nameInput
    );


    const subjectInput =
        document.createElement("input");


    subjectInput.type =
        "text";


    subjectInput.placeholder =
        "Disciplina";


    content.appendChild(
        subjectInput
    );


    const button =
        document.createElement("button");


    button.textContent =
        "Cadastrar";


    content.appendChild(
        button
    );


    const result =
        document.createElement("p");


    content.appendChild(
        result
    );


    button.addEventListener(
        "click",
        function () {

            const name =
                nameInput.value.trim();


            const subject =
                subjectInput.value.trim();


            if (
                name === "" ||
                subject === ""
            ) {

                result.textContent =
                    "Preencha todos os campos.";


                return;

            }


            const existingTeacher =
                teachers.find(
                    function (teacher) {

                        return teacher.name.toLowerCase() ===
                            name.toLowerCase();

                    }
                );


            if (existingTeacher) {

                result.textContent =
                    "Professor já cadastrado.";


                console.log(
                    "Professor já cadastrado."
                );


                return;

            }


            const newTeacher = {

                name: name,

                subject: subject

            };


            teachers.push(
                newTeacher
            );


            result.textContent =
                "Professor cadastrado com sucesso!";


            console.log(
                "Professor cadastrado:",
                newTeacher
            );

        }
    );


    console.log(
        "Cadastro de professor aberto."
    );

}



// ============================================================
// REGISTRAR FALTA
// ============================================================

function registerAbsence(
    registrationNumber
) {

    const student =
        students.find(
            function (student) {

                return student.registrationNumber ===
                    registrationNumber;

            }
        );


    if (!student) {

        return false;

    }


    const currentAbsences =
        absences.get(
            registrationNumber
        ) || 0;


    absences.set(
        registrationNumber,
        currentAbsences + 1
    );


    return true;

}



// ============================================================
// CONSULTAR FALTAS
// ============================================================

function getStudentAbsences(
    registrationNumber
) {

    return absences.get(
        registrationNumber
    ) || 0;

}



// ============================================================
// ÁREA DE FALTAS
// ============================================================

function showAbsences() {

    clearContent();


    const title =
        createTitle(
            "Faltas"
        );


    content.appendChild(
        title
    );


    const description =
        document.createElement("p");


    description.textContent =
        "Registro e consulta de faltas dos alunos.";


    content.appendChild(
        description
    );



    // REGISTRAR

    const registerTitle =
        document.createElement("h3");


    registerTitle.textContent =
        "Registrar Falta";


    content.appendChild(
        registerTitle
    );


    const registrationInput =
        document.createElement("input");


    registrationInput.type =
        "text";


    registrationInput.placeholder =
        "Matrícula do aluno";


    content.appendChild(
        registrationInput
    );


    const registerButton =
        document.createElement("button");


    registerButton.textContent =
        "Registrar Falta";


    content.appendChild(
        registerButton
    );


    const registerResult =
        document.createElement("p");


    content.appendChild(
        registerResult
    );


    registerButton.addEventListener(
        "click",
        function () {

            const registration =
                registrationInput.value.trim();


            if (registration === "") {

                registerResult.textContent =
                    "Digite a matrícula.";

                return;

            }


            const registered =
                registerAbsence(
                    registration
                );


            if (registered) {

                const total =
                    getStudentAbsences(
                        registration
                    );


                registerResult.textContent =
                    "Falta registrada com sucesso. Total de faltas: " +
                    total;


                console.log(
                    "Falta registrada:",
                    registration
                );


                console.log(
                    "Total de faltas:",
                    total
                );

            } else {

                registerResult.textContent =
                    "Aluno não encontrado.";


                console.log(
                    "Não foi possível registrar a falta."
                );

            }

        }
    );



    // CONSULTAR

    const searchTitle =
        document.createElement("h3");


    searchTitle.textContent =
        "Consultar Faltas";


    content.appendChild(
        searchTitle
    );


    const searchInput =
        document.createElement("input");


    searchInput.type =
        "text";


    searchInput.placeholder =
        "Matrícula do aluno";


    content.appendChild(
        searchInput
    );


    const searchButton =
        document.createElement("button");


    searchButton.textContent =
        "Consultar";


    content.appendChild(
        searchButton
    );


    const searchResult =
        document.createElement("p");


    content.appendChild(
        searchResult
    );


    searchButton.addEventListener(
        "click",
        function () {

            const registration =
                searchInput.value.trim();


            const student =
                students.find(
                    function (student) {

                        return student.registrationNumber ===
                            registration;

                    }
                );


            if (!student) {

                searchResult.textContent =
                    "Aluno não encontrado.";


                console.log(
                    "Aluno não encontrado para consulta."
                );


                return;

            }


            const total =
                getStudentAbsences(
                    registration
                );


            searchResult.textContent =
                "Aluno: " +
                student.name +
                " | Matrícula: " +
                student.registrationNumber +
                " | Faltas: " +
                total;


            console.log(
                "Consulta de faltas realizada.",
                student.name
            );


            console.log(
                "Total de faltas:",
                total
            );

        }
    );


    console.log(
        "Área de Faltas selecionada."
    );

}



// ============================================================
// ESTATÍSTICAS
// ============================================================

function getStatistics() {

    let totalAverage = 0;


    for (
        let i = 0;
        i < students.length;
        i++
    ) {

        totalAverage +=
            students[i].average;

    }


    let average = 0;


    if (students.length > 0) {

        average =
            totalAverage /
            students.length;

    }


    let bestStudent = null;


    for (
        let i = 0;
        i < students.length;
        i++
    ) {

        if (
            bestStudent === null ||
            students[i].average >
            bestStudent.average
        ) {

            bestStudent =
                students[i];

        }

    }


    let totalAbsences = 0;


    absences.forEach(
        function (amount) {

            totalAbsences +=
                amount;

        }
    );


    return {

        totalStudents:
            students.length,

        totalTeachers:
            teachers.length,

        average:
            average,

        bestStudent:
            bestStudent,

        totalAbsences:
            totalAbsences

    };

}



// ============================================================
// MOSTRAR ESTATÍSTICAS
// ============================================================

function showStatistics() {

    clearContent();


    const title =
        createTitle(
            "Estatísticas"
        );


    content.appendChild(
        title
    );


    const statistics =
        getStatistics();


    const studentsInfo =
        document.createElement("p");


    studentsInfo.textContent =
        "Total de alunos: " +
        statistics.totalStudents;


    content.appendChild(
        studentsInfo
    );


    const teachersInfo =
        document.createElement("p");


    teachersInfo.textContent =
        "Total de professores: " +
        statistics.totalTeachers;


    content.appendChild(
        teachersInfo
    );


    const averageInfo =
        document.createElement("p");


    averageInfo.textContent =
        "Média geral dos alunos: " +
        statistics.average.toFixed(2);


    content.appendChild(
        averageInfo
    );


    if (statistics.bestStudent) {

        const bestStudentInfo =
            document.createElement("p");


        bestStudentInfo.textContent =
            "Melhor aluno: " +
            statistics.bestStudent.name +
            " | Média: " +
            statistics.bestStudent.average;


        content.appendChild(
            bestStudentInfo
        );

    }


    const absenceInfo =
        document.createElement("p");


    absenceInfo.textContent =
        "Total de faltas registradas: " +
        statistics.totalAbsences;


    content.appendChild(
        absenceInfo
    );


    console.log(
        "Estatísticas consultadas."
    );


    console.log(
        statistics
    );

}



// ============================================================
// ASYNC/AWAIT
// ============================================================

function demonstrateAsyncAwait() {

    return new Promise(
        function (resolve) {

            setTimeout(
                function () {

                    resolve(
                        "Operação assíncrona concluída com sucesso."
                    );

                },
                1000
            );

        }
    );

}



async function showAsyncAwait() {

    clearContent();


    const title =
        createTitle(
            "Demonstração Async/Await"
        );


    content.appendChild(
        title
    );


    const description =
        document.createElement("p");


    description.textContent =
        "Executando uma operação assíncrona...";


    content.appendChild(
        description
    );


    console.log(
        "Async/Await iniciado."
    );


    try {

        const result =
            await demonstrateAsyncAwait();


        description.textContent =
            result;


        console.log(
            "Async/Await finalizado."
        );


        console.log(
            result
        );

    } catch (error) {

        description.textContent =
            "Ocorreu um erro durante a operação.";


        console.log(
            "Erro:",
            error
        );

    }

}



// ============================================================
// ÁREAS FUTURAS
// ============================================================

function showFuturePage(
    pageName
) {

    clearContent();


    const title =
        createTitle(
            pageName
        );


    content.appendChild(
        title
    );


    const message =
        document.createElement("p");


    message.textContent =
        "Esta área será desenvolvida em uma próxima Sprint.";


    content.appendChild(
        message
    );


    console.log(
        "Área futura:",
        pageName
    );

}



// ============================================================
// NAVEGAÇÃO
// ============================================================

function navigate(
    pageName
) {

    switch (pageName) {

        case "Dashboard":

            showDashboard();

            break;


        case "Alunos":

            listStudents();

            break;


        case "Professores":

            listTeachers();

            break;


        case "Faltas":

            showAbsences();

            break;


        case "Estatísticas":

            showStatistics();

            break;


        default:

            showFuturePage(
                pageName
            );

            break;

    }

}



// ============================================================
// MENU E SIDEBAR
// ============================================================

for (
    let i = 0;
    i < menuItems.length;
    i++
) {

    menuItems[i].addEventListener(
        "click",
        function (event) {

            event.preventDefault();


            const links =
                menuItems[i]
                    .getElementsByTagName("a");


            const link =
                links[0];


            const pageName =
                link.textContent.trim();


            console.log(
                "Menu selecionado:",
                pageName
            );


            navigate(
                pageName
            );

        }
    );

}



// ============================================================
// VALIDAÇÃO DA APLICAÇÃO
// ============================================================

function validateApplication() {

    console.log(
        "========================================"
    );


    console.log(
        "VALIDAÇÃO DO SCHOOL MANAGEMENT SYSTEM"
    );


    console.log(
        "========================================"
    );


    console.log(
        "DOM carregado:",
        !!content
    );


    console.log(
        "Itens do menu encontrados:",
        menuItems.length
    );


    console.log(
        "Alunos disponíveis:",
        students.length
    );


    console.log(
        "Professores disponíveis:",
        teachers.length
    );


    console.log(
        "Sistema Web carregado corretamente."
    );


    console.log(
        "========================================"
    );

}



// ============================================================
// INICIALIZAÇÃO
// ============================================================

validateApplication();


showDashboard();


console.log(
    "Sistema Web pronto."
);


console.log(
    "Para executar a demonstração Async/Await pelo Console:"
);


console.log(
    "showAsyncAwait();"
);