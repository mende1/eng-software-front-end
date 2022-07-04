export const dashboardItems = [
  {
    nome: "DASHBOARD",
    link: "dashboard",
    permissoes: ["todos"],
  },
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
    nome: "Validar Diploma",
    link: "validarDiploma",
    icon: "bi-journal-bookmark-fill",
    permissoes: ["funcionario"],
  },
  {
    nome: "Solicitar Validação",
    link: "solicitarvalidacao",
    icon: "bi-journal-arrow-up",
    permissoes: ["todos"],
  },
  {
    nome: "Auditoria",
    link: "auditoria",
    icon: "bi-person-workspace",
    permissoes: ["coordenador"],
  },
  { nome: "Logout", link: "logout", icon: "bi-power", permissoes: ["todos"] },
];
