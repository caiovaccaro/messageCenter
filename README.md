messageCenter
=============

Script para incorporar uma forma padrão de exibição de mensagens.


Instruções
----------

```javascript
NAMESPACE.MessageCenter.displayMessage(message, status, dismiss, callback, breaklines);
```
- message: Pode ser uma string ou array de strings. Ex: 'Senha incorreta' ou ['Senha incorreta.', 'CPF inválido']
- status: Correspondente a classe adicionada para estilo visual. Ex: 'warning', 'error', 'sucess'. Atualmente correspondem à amarelo, vermelho e verde.
- dismiss(opcional): Opção 1: Id ou classe de elemento que ao ser clicado fecha o box de mensagem(ex: '.input', '#nome') ou array de elementos ['.input', '#nome']. Opção 2: string 'time' para fechar sozinho.
- callback(opcional): Função para ser executada depois que o box de mensagem aparece por completo.
- breaklines(opcional: bool. Se for true, ao invés de espaços entre frases terá uma quebra de linha. Usar em conjunto com message em array.

Exemplo:

```javascript
var message = ['Ops! Esqueceu alguma coisa?', 'Nome é obrigatório.', 'Por favor digite uma mensagem'],
	status = 'warning',
	dismiss = 'time',
	callback = function() {
		console.log('Testando callback');
	},
	breaklines = true;

NAMESPACE.MessageCenter.displayMessage(message, status, dismiss, callback, breaklines);
```