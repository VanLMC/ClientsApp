# ClientsApp

![chrome-capture-2024-1-28](https://github.com/VanLMC/ClientsApp/assets/39391737/32dcedba-5bf4-40c1-8c23-d2e2c19ff795)

Bem-vindo ao projeto ClientsApp! Este é um aplicativo web que oferece três funcionalidades principais: listagem de clientes, criação de clientes e cálculo da rota mais curta que passa pela localização de todos os clientes.

## Funcionalidades

1. **Listagem de Clientes**
   - Visualize a lista completa de clientes cadastrados.

2. **Criação de Clientes**
   - Adicione novos clientes ao sistema preenchendo formulários intuitivos.

3. **Cálculo da Rota Mais Curta**
   - Descubra a rota mais eficiente partindo da empresa e passando pela localização de todos os clientes.

## Tecnologias Utilizadas

### Frontend
- **Vite:** Para um bundle dinâmico e rápido.
- **Formik:** Biblioteca para simplificar a criação de formulários.
- **Yup:** Realiza a validação dos formulários.
- **MUI (Material-UI):** Oferece componentes React bonitos e dinâmicos.
- **React Query:** Facilita a integração moderna com o backend, oferecendo recursos como cacheamento.

### Como Rodar o Frontend

1. Navegue até a pasta do projeto frontend.
2. Execute `npm install` para instalar as dependências.
3. Em seguida, execute `npm run dev` para iniciar o servidor de desenvolvimento.

### Backend
- **NestJS:** Estrutura o backend de forma robusta.
- **Postgres:** Banco de dados utilizado para armazenar informações dos clientes.
- **Docker:** Utilizado para containerizar o banco de dados.

### Como Rodar o Backend

1. Baixe a última versão da imagem do PostgreSQL com o comando `docker pull postgres` 
2.  Crie o container do PostgreSQL com o seguinte comando: `docker run --name postgres -e POSTGRES_PASSWORD=12345 -d -p 5432:5432 postgres`
3. Entre na pasta do backend.
4. Execute `npm install` para instalar as dependências.
5. Rode o servidor backend com o comando: `npm run start`


O DDL para configurar o banco de dados será executado automaticamente se a tabela ainda não existir.

Aproveite explorar as funcionalidades do ClientsApp! Se tiver alguma dúvida ou sugestão, não hesite em entrar em contato.

