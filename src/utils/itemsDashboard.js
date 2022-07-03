export const dashboardItems = [
  {
    nome: "Usuários",
    link: "usuarios",
    icon: "bi-person",
    permissoes: ["diretor", "superintendente"],
  },
  {
    nome: "Cadastrar Usuário",
    link: "cadastrousuario",
    icon: "bi-person-plus",
    permissoes: ["diretor", "superintendente"],
  },
  {
    nome: "Cursos",
    link: "cursos",
    icon: "bi-book",
    permissoes: ["funcionario"],
  },
  {
    nome: "Cadastrar Curso",
    link: "cadastrocurso",
    icon: "bi-book",
    permissoes: ["funcionario"],
  },
  {
    nome: "Intituições",
    link: "instituicoes",
    icon: "bi-building",
    permissoes: ["todos"],
  },
  {
    nome: "Cadastrar Instituição",
    link: "cadastroinstituicao",
    icon: "bi-building",
    permissoes: ["dirigente"],
  },
  {
    nome: "Diplomas",
    link: "validarDiploma",
    icon: "bi-journal-bookmark-fill",
    permissoes: ["todos"],
  },
  {
    nome: "Validar Diploma",
    link: "validarDiploma",
    icon: "bi-journal-bookmark-fill",
    permissoes: ["funcionario"],
  },
  {
    nome: "Logs do Sistema",
    link: "logs",
    icon: "bi-card-text",
    permissoes: ["coordenador"],
  },
  { nome: "Logout", link: "logout", icon: "bi-power", permissoes: ["todos"] },
];
