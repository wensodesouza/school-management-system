import {
    showHeader,
    showMenu,
    finishSystem,
    showBootMessage
} from "./src/views/display.js";

import {
    ask,
    pause
} from "./src/utils/input.js";

import {
    loadDevelopmentData
} from "./src/data/seed.js";

import {
    registerStudent,
    listStudents
} from "./src/services/studentSev.js";

import {
    registerTeacher,
    listTeachers
} from "./src/services/teacherServ.js";

import {
    registerAbsence,
    showAbsences
} from "./src/services/absencesServ.js";

import {
    showStatistics
} from "./src/services/statistics.js";

import {
    searchStudent,
    demonstrateAsyncAwait
} from "./src/services/promices.js";

// APPLICATION

async function main() {

    let option;

    do {

        showHeader();
        showMenu();

        option = await ask("Escolha uma opção: ");

        switch (option) {

            case "1":

                await registerStudent();

                break;

            case "2":

                await listStudents();

                break;

            case "3":

                await registerTeacher();

                break;

            case "4":

                await listTeachers();

                break;

            case "5":

                await registerAbsence();

                break;

            case "6":

                await showAbsences();

                break;

            case "7":

                showHeader();

                console.log("=========== CONSULTAR ALUNO (PROMISE) ===========\n");

                const registrationNumber = await ask("Digite a matrícula: ");

                try {

                    const student = await searchStudent(registrationNumber);

                    console.log("\n✅ Aluno encontrado!\n");

                    console.log(`Nome.............: ${student.name}`);
                    console.log(`Matrícula........: ${student.registrationNumber}`);
                    console.log(`Média............: ${student.average}`);
                    console.log(`Situação.........: ${student.getStatus()}`);
                    console.log(`Cadastro.........: ${student.registrationDate.toLocaleString()}`);

                } catch (error) {

                    console.log(`\n❌ ${error}`);

                }

                await pause();

                break;

            case "8":

                await showStatistics();

                break;

            case "9":

                await demonstrateAsyncAwait();

                break;

            case "0":

                break;

            default:

                console.log("\n❌ Opção inválida!");

                await pause();

        }

    } while (option !== "0");

    finishSystem();

}

//============================================================
// START
//============================================================

//============================================================
// CALL SEED AT START
//============================================================

loadDevelopmentData();

// Override main start flow message
showBootMessage();


main();

