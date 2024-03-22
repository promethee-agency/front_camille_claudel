// IS HE ALREADY BEEN ON THIS PAGE
export const isFirstVisit = () => {
    const location = window.location.href;
    const visitState = JSON.parse(localStorage.getItem('app.visitState')) || {};
  
    if (!(location in visitState && visitState[location])) {
        visitState[location] = true;
        localStorage.setItem('app.visitState', JSON.stringify(visitState));
        return true;
    }
  
    return false;
};