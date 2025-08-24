const data = [
  { cicloId: "c1", cicloNombre: "1° Ciclo", years: [
    { yearId: "y1", yearNombre: "1er año", materias: [
      { id: "rep1", nombre: "Sistema de Representación", req: [] },
      { id: "morf1", nombre: "Morfología I", req: [] },
      { id: "tallerIntro", nombre: "Introducción al Taller de Proyecto", req: [] },
      { id: "matApl", nombre: "Matemática Aplicada", req: [] },
      { id: "introTec", nombre: "Introducción Técnica", req: [] },
      { id: "cultura", nombre: "Cultura y Producción Arquitectónica", req: [] },
      { id: "tecno", nombre: "Tecnología", req: [] },
    ]}
  ]}
];

// Función simple para mostrar materias
function renderMalla() {
  const container = document.getElementById('malla');
  container.innerHTML = '';
  data.forEach(ciclo => {
    const h2 = document.createElement('h2');
    h2.textContent = ciclo.cicloNombre;
    container.appendChild(h2);
    ciclo.years.forEach(year => {
      const h3 = document.createElement('h3');
      h3.textContent = year.yearNombre;
      container.appendChild(h3);
      year.materias.forEach(m => {
        const btn = document.createElement('div');
        btn.textContent = m.nombre;
        btn.className = 'materia bloqueada';
        btn.onclick = () => {
          if (btn.classList.contains('bloqueada')) return;
          btn.className = 'materia aprobada';
        };
        container.appendChild(btn);
      });
    });
  });
}
document.getElementById('resetBtn').onclick = () => renderMalla();
renderMalla();