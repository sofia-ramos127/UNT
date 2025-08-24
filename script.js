body { 
  font-family: Arial, sans-serif; 
  background: #f9fafb; 
  margin: 0;
  padding: 0;
}

h1 { 
  text-align: center; 
  margin: 20px 0; 
}

.grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 12px;
  max-width: 1100px;
  margin: auto;
  padding: 20px;
}

.materia {sistema de representacion
  padding: 12px;
  border-radius: 10px;
  text-align: center;
  font-weight: bold;
  cursor: pointer;
  transition: 0.3s;
  font-size: 14px;
}

/* Estados */
.bloqueado {
  background: #d1d5db;
  color: #6b7280;
  cursor: not-allowed;
}

.disponible {
  background: #facc15;
  color: #1f2937;
}

.aprobado {
  background: #16a34a;
  color: white;
}
