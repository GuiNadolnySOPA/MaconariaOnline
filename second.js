document.addEventListener('DOMContentLoaded', function() {
    // Definindo a data de início do contador (20 horas a partir do momento atual)
    const dataInicial = new Date();
    dataInicial.setHours(dataInicial.getHours() + 20);

    // Atualiza o contador a cada segundo
    setInterval(function() {
        const agora = new Date();
        const diferenca = dataInicial - agora;

        // Calcula as horas, minutos e segundos restantes
        const horas = Math.floor(diferenca / (1000 * 60 * 60));
        const minutos = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60));
        const segundos = Math.floor((diferenca % (1000 * 60)) / 1000);

        // Atualiza o elemento contador com os valores calculados
        document.getElementById('contador').innerHTML = 'Tempo restante: ' + horas + 'h ' + minutos + 'm ' + segundos + 's';
    }, 1000); // A cada 1 segundo (1000 milissegundos)
});
