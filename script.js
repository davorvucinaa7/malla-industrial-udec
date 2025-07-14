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
                    { code: "523219", name: "Estadística", credits: 4, prereqs: ["527150", "525140"] },
                    { code: "525223", name: "Ecuaciones Diferenciales", credits: 4, prereqs: ["525150", "527150"] },
                    { code: "890050", name: "Inglés Comunicativo Nivel Básico I", credits: 5, prereqs: [] }
                ]
            },
            {
                semester: "4º Semestre",
                courses: [
                    { code: "890051", name: "Inglés Comunicativo Nivel Básico II", credits: 5, prereqs: ["890050"] },
                    { code: "580211", name: "Modelación de Sistemas", credits: 2, prereqs: ["510140", "525140", "527140", "531140", "580120"] },
                    { code: "521230", name: "Cálculo Numérico", credits: 4, prereqs: ["521227", "503203"] },
                    { code: "541271", name: "Mecánica", credits: 3, prereqs: ["521227", "510150"] },
                    { code: "541203", name: "Termodinámica", credits: 4, prereqs: ["510150"] }
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
                    { code: "580315", name: "Optimización I", credits: 3, prereqs: ["521227", "503203"] },
                    { code: "541340", name: "Mecánica de Fluidos", credits: 4, prereqs: ["541271", "541203"] },
                    { code: "580490", name: "Práctica Laboral", credits: 2, prereqs: [] },
                    { code: "543355", name: "Máquinas Eléctricas", credits: 4, prereqs: ["525223"] },
                    { code: "580310", name: "Microeconomía", credits: 4, prereqs: ["523219"] }
                ]
            },
            {
                semester: "6º Semestre",
                courses: [
                    { code: "580311", name: "Análisis Estadístico Multivariado", credits: 3, prereqs: ["523325"] },
                    { code: "580325", name: "Optimización II", credits: 3, prereqs: ["580315"] },
                    { code: "580327", name: "Simulación", credits: 3, prereqs: ["580311", "580315"] },
                    { code: "542355", name: "Transferencia de Calor", credits: 4, prereqs: ["541340"] },
                    { code: "580321", name: "Administración", credits: 3, prereqs: ["580211"] }
                ]
            }
        ]
    },
    // Continúa con 4º, 5º y 6º año de igual forma...
];

const mallaContainer = document.getElementById("malla");
let progress = JSON.parse(localStorage.getItem("mallaProgress")) || {};

function saveProgress() {
    localStorage.setItem("mallaProgress", JSON.stringify(progress));
}

function isApproved(code) {
    return progress[code] === true;
}

function canUnlock(course) {
    if (course.prereqs === "ALL") {
        return malla.every(y => y.semesters.every(s => s.courses.every(c => isApproved(c.code))));
    }
    return course.prereqs.every(code => isApproved(code));
}

function toggleCourse(course, div) {
    if (!canUnlock(course) && !isApproved(course.code)) return;
    progress[course.code] = !isApproved(course.code);
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
                } else if (!canUnlock(course)) {
                    div.classList.add("locked");
                }

                div.addEventListener("click", () => toggleCourse(course, div));
                grid.appendChild(div);
            });

            semDiv.appendChild(grid);
            yearDiv.appendChild(semDiv);
        });

        mallaContainer.appendChild(yearDiv);
    });
}

renderMalla();
