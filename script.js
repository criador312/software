// Função para adicionar um serviço à tabela
function adicionarServico() {
    var nomeServico = document.getElementById('nomeServico').value;
    var precoServico = document.getElementById('precoServico').value;

    // Verificar se todos os campos estão preenchidos
    if (nomeServico === "" || precoServico === "") {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    // Criar nova linha na tabela
    var tabela = document.getElementById("tabelaServicos").getElementsByTagName('tbody')[0];
    var novaLinha = tabela.insertRow();

    var celulaNome = novaLinha.insertCell(0);
    var celulaPreco = novaLinha.insertCell(1);
    var celulaAcoes = novaLinha.insertCell(2);

    // Adicionar dados do serviço à nova linha
    celulaNome.innerHTML = nomeServico;
    celulaPreco.innerHTML = "R$ " + parseFloat(precoServico).toFixed(2);
    celulaAcoes.innerHTML = `<button onclick="removerServico(this)">Remover</button>`;

    // Limpar os campos após adicionar
    document.getElementById('nomeServico').value = '';
    document.getElementById('precoServico').value = '';
}

// Função para remover um serviço da tabela
function removerServico(btn) {
    var linha = btn.parentNode.parentNode;
    linha.parentNode.removeChild(linha);
}
