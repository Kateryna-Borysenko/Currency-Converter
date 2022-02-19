const getCurrency = async () => {
    const res = await fetch('http://data.fixer.io/api/latest?access_key=72a40f770445afc5b8a852ac502d410d&symbols=USD,UAH,PLN,RUB,EUR');
    if (res.ok) {
        return res.json();
    }
    return Promise.reject(new Error('Somethimg went wrong ...'));
};

export default getCurrency;