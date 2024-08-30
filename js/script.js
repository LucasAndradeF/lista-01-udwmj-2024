const calcular = document.getElementById('calcular');

function calc() {
    const veiculo = document.getElementById('veiculo');
    veiculo.value = veiculo.value.toUpperCase();
    const distancia = document.getElementById('distancia');
    const distanciaViagem = document.getElementById('distanciaViagem');
    const litros = document.getElementById('litros');
    const litrosViagem = document.getElementById('litrosViagem');
    const alcool = document.getElementById('alcool');
    const gasolina = document.getElementById('gasolina');
    const preco = document.getElementById('preco');
    const result = document.getElementById('result');

    if (distancia && litros) {
        const valorDistancia = distancia.value;
        const valorLitros = litros.value;
        const nomeVeiculo = veiculo.value;
        if (valorDistancia && valorLitros) {
            const consumo = (valorDistancia / valorLitros).toFixed(2);
            result.textContent = `O consumo do seu veículo ${nomeVeiculo} foi de ${consumo} km/l.`;
        }
    }
    else if (alcool && gasolina) {
        const valorAlcool = alcool.value;
        const valorGasolina = gasolina.value;
        const nomeVeiculo = veiculo.value;
        if (valorAlcool && valorGasolina) {
            const relacao = (valorAlcool / valorGasolina).toFixed(2);
            if (relacao <= 0.7) {
                result.textContent = `Vale a pena abastecer o seu veículo ${nomeVeiculo} com Álcool.`;
            } else {
                result.textContent = `Vale a pena abastecer o seu veículo ${nomeVeiculo} com Gasolina.`;
            }
        }
    } else if (distanciaViagem && litrosViagem) {
        const valorDistanciaViagem = distanciaViagem.value;
        const valorLitrosViagem = litrosViagem.value;
        const nomeVeiculo = veiculo.value;
        const precoCombustivel = preco.value;

        if (valorDistanciaViagem && valorLitrosViagem) {
            const consumoViagem = (valorDistanciaViagem / valorLitrosViagem).toFixed(2);
            const gastoViagem = (consumoViagem * precoCombustivel).toFixed(2);
            result.textContent = `Você precisa abastecer o seu veículo ${nomeVeiculo} com ${consumoViagem} litros de combustível. O gasto será de aproximadamente R$ ${gastoViagem}.`;
        }
    }
}

calcular.addEventListener('click', calc);
document.querySelector("#reset").addEventListener('click', limpa);

function limpa() {
    document.getElementById('result').textContent = "";
}