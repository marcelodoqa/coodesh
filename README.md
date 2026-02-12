# coodesh

# Ferramente escolhida: Cypress

## Motivos:
- Dominio do framework
- Arquitetura estável (menos problemas de sinc, sem await falso)
- Debug rápido e logs
- Puro JSm linguagem universal 
- Report completo
- Escalavel 
- Facil integração com CI/CD

### Observações
- site ficou fora do ar, só fiz o login (por enquanto)
- NÃO utilizei o cucumber (e não recomendo), no cypress temos os custom commands que lidam muito melhor para grandes quantidades de testes e fácil manutenção
- Senhas (dados sensiveis) no .env do cypress
- criei dois testes exemplo, um sem custom commands e outro com
- utilizado a biblioteca fakerJS para dados aleatórios
- report Allura 
- ideal é adicionar o node modulos/ .env/etc no gitignore, porem nao fiz para fins do testes