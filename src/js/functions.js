
const getDaytime = () => {  

    const date = new Date().getHours();

    if (date >= 6 && date < 12) {
        return "Buenos días";
    } else if (date >= 12 && date < 20) {
        return "Buenas tardes";
    }
    return "Buenas noches";
}


export default getDaytime;