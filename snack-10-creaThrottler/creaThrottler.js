const creaThrottler = (funzione, limite) => {
    let ultimaEsecuzione = 0;
    return () => {
        const adesso = Date.now();
        if (adesso - ultimaEsecuzione >= limite) {
            funzione();
            ultimaEsecuzione = adesso;
        }
    };
};

const throttledLog = creaThrottler(() => console.log('Eseguito!'), 2000);

throttledLog();
throttledLog();
setTimeout(throttledLog, 2500);