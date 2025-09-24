const addToNumber = () => {
    const number = Math.ceil(Math.random() * 100);
    console.log(number);
    localStorage.setItem('number', number);
}

const setObjectToLS = () => {
    const customer = { name: 'John', age: 30, job: 'Developer' };
    const stringifiedCustomer = JSON.stringify(customer);
    localStorage.setItem('customer', stringifiedCustomer);
}

const getFromObject = () => {
    const storedCustomer = localStorage.getItem('customer');
    const parsedCustomer = JSON.parse(storedCustomer);
    console.log(parsedCustomer);
}

const getFromNumber = () => {
    const storedNumber = localStorage.getItem('number');
    console.log(storedNumber);
}