# Teste Técnico Criptonomia(Front-End)

Por Paulo Andrade - meu objetivo é programar para HUMANOS entenderem!​

### Veja este projeto online!

https://criptonomiapauloandrade.netlify.app/

### Sobre mim

Sou apaixonado por programação desde o ensino fundamental, quando brincava em editores de jogos como WC3 e em VBA por trás de planilhas de Excel. Por esse motivo fiz meu ensino médio técnico em programação e não me arrependi.

Apesar de ter escolhido me formar em administração para desenvolver outras habilidades que julgo serem fortes em mim, como comunicação e liderança, nunca deixei de programar um mês sequer durante esse período. Fui estagiário administrativo do meu primeiro até o meu último semestre da faculdade, mas aonde eu me encontrei mais realizado foi quando começei a trabalhar como freelancer front-end em vanilla JS, React e Vue a 1 ano atrás. Apesar de ter usado minhas habilidades em programação para automatizar tarefas como a de envio de emails de cobrança e fazer análise de dados no Python, alimentar planilhas e fazer integrações com o SAP usando o VBA, nada me prendeu tanto quanto trabalhar efetivamente com um projeto de programação. Passar horas escrevendo linhas de código me mantém entretido e desafiado. Tenho certeza que todas as minhas experiências profissionais anteriores contribuirão muito para que eu seja uma Front End mais completo.

### Instruções para execução do código

Para rodar o código, digite “npm install” no console e após a instalação digite “npm run serve” e copie e cole o link que o console retornar no navegador.

### Desafios enfrentados

A definição de um design de pastas que seria ideal para um pequeno projeto como esse me deixou um pouco em dúvida. Sei que não foi feito o design ideal, aquele que permite maior organização e expansividade. Mas dado que é um projeto pequeno e muito simples, optei pela praticidade. Eu melhoraria os getters e a organização do state, achei que ficou tudo muito centrado em torno de “posts”. 

## Soluções implementadas
### Design / funcionalidades

Ao planejar o blog, cogitei fazer em 3 páginas: uma para todos os posts, outra para um post com os comentários embaixo e outra para ser o perfil do autor do post. Ao observar que o conteúdo do post eram poucas linhas de texto, resolvi utilizar uma abordagem mais simples, com apenas uma página.

Ao clicar no nome do autor no post (está em negrito ao lado de “Posted by”), é possível acessar os dados básicos do autor. Para fechar o modal que aparece sobre a tela, você pode clicar no “x” ou em qualquer lugar fora do modal. Ao clicar em “Read More”, você seria redirecionado para o post do blog, caso tivesse um. Ao clicar em “Comments”, você abre os comentário em baixo do post.

Fiz a escolha de cores bem neutras para criação do layout para passar um tom de seriedade e combinar com o tema. O verde vem para dar um pequeno charme em momentos específicos.

### Responsividade

O blog foi totalmente adaptado para ter todas suas funcionalidades 100% operantes e seu design harmonioso mantido, tanto no tablet, quanto nos celulares mais antigos como o iPhone 5/SE e nos celulares mais novos (e estreito: 280px) como o Galaxy Fold.

Te convido a testar pelo seu celular através do link do netlify disponibilizado acima.

### Vue

Projeto sem Vuetify, sem componentes que poderiam turbinar a interface, porém com componentents feitos a mão que deixam o projeto mais leve e autoral.

Usei o máximo possível de service pattern. A lógica das regras de negócio estão o máximo possível dentro do Vuex, deixando os componentes mais simples. Eu poderia ter usado um dispatch para fazer um fetch da Api pelo próprio router, mas optei por deixar o router mais simples usando o mounted para chamar a Api. 

Projeto feito com Axios e Api organizada com uma fábrica (factory pattern) e Node-Sass. 

O arquivo .env só foi subido pro git pois o repositório é privado.

