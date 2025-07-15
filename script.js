const malla = [
    {
        year: "1º Año",
        semesters: [
            {
                semester: "1º Semestre",
                courses: [
                    { code: "510140", name: "Física I", credits: 4, prereqs: [] },
                    { code: "525140", name: "Álgebra I", credits: 5, prereqs: [] },
                    { code: "527140", name: "Cálculo I", credits: 5, prereqs: [] },
                    { code: "531140", name: "Química General I", credits: 5, prereqs: [] },
                    { code: "580120", name: "Desarrollo Habilidades de Gestión", credits: 3, prereqs: [] }
                ]
            },
            {
                semester: "2º Semestre",
                courses: [
                    { code: "510150", name: "Física II", credits: 4, prereqs: ["510140"] },
                    { code: "525150", name: "Álgebra II", credits: 5, prereqs: ["525140"] },
                    { code: "527150", name: "Cálculo II", credits: 5, prereqs: ["527140"] },
                    { code: "531150", name: "Química General II", credits: 4, prereqs: ["531140"] },
                    { code: "500151", name: "Introducción a la Innovación en Ingeniería", credits: 2, prereqs: ["580120"] }
                ]
            }
        ]
    },
    {
        year: "2º Año",
        semesters: [
            {
                semester: "3º Semestre",
                courses: [
                    { code: "521227", name: "Cálculo III", credits: 5, prereqs: ["525150", "527150"] },
                    { code: "503203", name: "Programación", credits: 3, prereqs: ["525140"] },
                    { code: "523219", name: "Estadística", credits: 4, prereqs: ["525140", "527150"] },
                    { code: "525223", name: "Ecuaciones Diferenciales", credits: 4, prereqs: ["525150", "527150"] },
                    { code: "890050", name: "Inglés Comunicativo Nivel Básico I", credits: 5, prereqs: [] },
                    { code: "580201", name: "Liderazgo y Trabajo en Equipo", credits: 2, prereqs: ["580120"] }
                ]
            },
            {
                semester: "4º Semestre",
                courses: [
                    { code: "890051", name: "Inglés Comunicativo Nivel Básico II", credits: 5, prereqs: ["890050"] },
                    { code: "580211", name: "Modelación de Sistemas", credits: 2, prereqs: ["510140", "525140", "527140", "531140", "580120"] },
                    { code: "521230", name: "Cálculo Numérico", credits: 4, prereqs: ["521227", "503203"] },
                    { code: "541271", name: "Mecánica", credits: 3, prereqs: ["521227", "510150"] },
                    { code: "541203", name: "Termodinámica", credits: 4, prereqs: ["510150"] },
                    { code: "523325", name: "Inferencia Estadística y Muestreo", credits: 4, prereqs: ["523219"] }
                ]
            }
        ]
    },
    {
        year: "3º Año",
        semesters: [
            {
                semester: "5º Semestre",
                courses: [
                    { code: "541340", name: "Mecánica de Fluidos", credits: 4, prereqs: ["541271", "541203"] },
                    { code: "543355", name: "Máquinas Eléctricas", credits: 4, prereqs: ["525223"] },
                    { code: "580310", name: "Microeconomía", credits: 4, prereqs: ["523219"] },
                    { code: "580315", name: "Optimización I", credits: 3, prereqs: ["521227", "503203"] },
                    { code: "580311", name: "Análisis Estadístico Multivariado", credits: 3, prereqs: ["523325"] },
                    { code: "580490", name: "Práctica Laboral", credits: 2, prereqs: [] }
                ]
            },
            {
                semester: "6º Semestre",
                courses: [
                    { code: "542355", name: "Transferencia de Calor", credits: 4, prereqs: ["541340"] },
                    { code: "580321", name: "Administración", credits: 3, prereqs: ["580211"] },
                    { code: "580325", name: "Optimización II", credits: 3, prereqs: ["580315"] },
                    { code: "580323", name: "Macroeconomía", credits: 3, prereqs: ["580310"] },
                    { code: "580327", name: "Simulación", credits: 3, prereqs: ["580311", "580315"] },
                    { code: "580380", name: "Dibujo Industrial", credits: 3, prereqs: [] }
                ]
            }
        ]
    },
    {
        year: "4º Año",
        semesters: [
            {
                semester: "7º Semestre",
                courses: [
                    { code: "540451", name: "Procesos Industriales", credits: 3, prereqs: ["542355"] },
                    { code: "580301", name: "Innovación", credits: 3, prereqs: [] },
                    { code: "580413", name: "Marketing", credits: 3, prereqs: ["580321"] },
                    { code: "580414", name: "Contabilidad General y de Costos", credits: 3, prereqs: ["580321"] },
                    { code: "580415", name: "Gestión Estratégica y Control de Gestión", credits: 4, prereqs: ["580321"] },
                    { code: "201", name: "Complementaria I", credits: 2, prereqs: [] },
                    { code: "554150", name: "Introducción a la Sustentabilidad en Ingeniería", credits: 3, prereqs: [] }
                ]
            },
            {
                semester: "8º Semestre",
                courses: [
                    { code: "580421", name: "Planificación y Control de Producción", credits: 4, prereqs: ["580327"] },
                    { code: "580425", name: "Ingeniería Económica", credits: 3, prereqs: ["580414"] },
                    { code: "580429", name: "Finanzas", credits: 4, prereqs: ["580414"] },
                    { code: "580423", name: "Gestión y Control de Calidad", credits: 3, prereqs: ["580311"] },
                    { code: "503700", name: "Tecnologías de Información", credits: 4, prereqs: [] },
                    { code: "202", name: "Complementaria II", credits: 2, prereqs: [] }
                ]
            }
        ]
    },
    {
        year: "5º Año",
        semesters: [
            {
                semester: "9º Semestre",
                courses: [
                    { code: "580512", name: "Diseño de Sistemas de Producción", credits: 3, prereqs: ["580315"] },
                    { code: "580513", name: "Evaluación de Proyectos", credits: 3, prereqs: ["580425"] },
                    { code: "580514", name: "Gestión de Personas y Comportamiento Organizacional", credits: 3, prereqs: ["580321"] },
                    { code: "580590", name: "Práctica Profesional", credits: 4, prereqs: ["580490"] },
                    { code: "101", name: "Electivo I", credits: 3, prereqs: [] },
                    { code: "102", name: "Electivo II", credits: 3, prereqs: [] },
                    { code: "103", name: "Electivo III", credits: 3, prereqs: [] }
                ]
            },
            {
                semester: "10º Semestre",
                courses: [
                    { code: "580525", name: "Dirección y Control de Proyectos", credits: 3, prereqs: ["580513"] },
                    { code: "580523", name: "Taller de Emprendimiento", credits: 3, prereqs: ["580513"] },
                    { code: "580521", name: "Logística", credits: 3, prereqs: ["580327"] },
                    { code: "104", name: "Electivo IV", credits: 3, prereqs: [] },
                    { code: "105", name: "Electivo V", credits: 3, prereqs: [] },
                    { code: "106", name: "Electivo VI", credits: 3, prereqs: [] }
                ]
            }
        ]
    },
    {
        year: "6º Año",
        semesters: [
            {
                semester: "11º Semestre",
                courses: [
                    { code: "580695", name: "Memoria de Título", credits: 20, prereqs: "ALL" }
                ]
            }
        ]
    }
];

const mallaContainer = document.getElementById("malla");
let progress = JSON.parse(localStorage.getItem("mallaProgress")) || {};

function saveProgress() {
    localStorage.setItem("mallaProgress", JSON.stringify(progress));
}

function isInProgress(code) {
    return progress[code] === "inProgress";
}

function isApproved(code) {
    return progress[code] === "approved";
}

function canUnlock(course) {
    if (!course.prereqs || course.prereqs.length === 0) return true; // sin prerequisitos
    if (course.prereqs === "ALL") {
        return malla.every(year =>
            year.semesters.every(sem =>
                sem.courses.every(c => isApproved(c.code))
            )
        );
    }
    return course.prereqs.every(code => isApproved(code));
}

function toggleCourse(course) {
    if (!canUnlock(course)) {
        alert("Este ramo está bloqueado. Primero debes aprobar los prerrequisitos.");
        return;
    }
    if (!progress[course.code]) {
        progress[course.code] = "inProgress";
    } else if (isInProgress(course.code)) {
        progress[course.code] = "approved";
    } else {
        delete progress[course.code];
    }
    saveProgress();
    renderMalla();
}

function renderMalla() {
    mallaContainer.innerHTML = "";
    malla.forEach(year => {
        const yearDiv = document.createElement("div");
        yearDiv.className = "year";

        const yearTitle = document.createElement("h2");
        yearTitle.textContent = year.year;
        yearDiv.appendChild(yearTitle);

        year.semesters.forEach(sem => {
            const semDiv = document.createElement("div");
            semDiv.className = "semester";

            const semTitle = document.createElement("h3");
            semTitle.textContent = sem.semester;
            semDiv.appendChild(semTitle);

            const grid = document.createElement("div");
            grid.className = "grid";

            sem.courses.forEach(course => {
                const div = document.createElement("div");
                div.className = "course";
                div.textContent = `${course.code} - ${course.name} (${course.credits} créditos)`;

                if (isApproved(course.code)) {
                    div.classList.add("approved");
                } else if (isInProgress(course.code)) {
                    div.classList.add("in-progress");
                } else if (!canUnlock(course)) {
                    div.classList.add("locked");
                }

                div.addEventListener("click", () => toggleCourse(course));
                grid.appendChild(div);
            });

            semDiv.appendChild(grid);
            yearDiv.appendChild(semDiv);
        });

        mallaContainer.appendChild(yearDiv);
    });
}

renderMalla();
