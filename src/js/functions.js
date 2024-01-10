
const getDaytime = () => {  

    const date = new Date().getHours();

    if (date >= 6 && date < 12) {
        return "Buenos días";
    } else if (date >= 12 && date < 20) {
        return "Buenas tardes";
    }
    return "Buenas noches";
}

function getFormattedDate() {
    // Obtén la fecha actual
    const currentDate = new Date();
  
    // Resta un día a la fecha actual para obtener la fecha del día anterior
    const yesterday = new Date(currentDate);
    yesterday.setDate(currentDate.getDate() - 1);
  
    // Días de la semana en español
    const daysOfWeek = [
      'Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'
    ];
  
    // Meses del año en español
    const monthsOfYear = [
      'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
    ];
  
    // Obtén el nombre del día de la semana y el nombre del mes
    const dayOfWeek = daysOfWeek[yesterday.getDay()];
    const month = monthsOfYear[yesterday.getMonth()];
  
    // Formatea la fecha en el formato deseado
    const formattedDate = `${dayOfWeek} ${yesterday.getDate()} ${month} ${yesterday.getFullYear()}`;
  
    return formattedDate;
  }
export  { getDaytime, getFormattedDate};
