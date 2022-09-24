function debounceFunc(func, timeout = 500){
    let timer;
    return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(() => { func.apply(this, args); }, timeout);
    };
}
function saveInput(){
    console.log('Saving data...');
}
const processChange = debounceFunc(() => saveInput());adding-right;  20;
