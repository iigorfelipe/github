export const initialTypes = [
  {
    option: 'Todos',
    check: true,
    title: 'Tipo'
  },
  {
    option: 'Forks',
    check: false,
    title: 'Tipo'
  },
  {
    option: 'Arquivados',
    check: false,
    title: 'Tipo'
  },
  {
    option: 'Modelos',
    check: false,
    title: 'Tipo'
  },
];

export const initialLanguages = [
  {
    option: 'Todos os idiomas',
    check: true,
    title: 'Linguagem'
  }
];

export const initialSorts = [
  {
    option: 'Última atualização',
    check: true,
    title: 'Ordem'
  },
  {
    option: 'Nome',
    check: false,
    title: 'Ordem'
  },
  {
    option: 'Estrelas',
    check: false,
    title: 'Ordem'
  }
];

export const initialFeedback = {
  show: false,
  repo: '',
  results: 0,
  type: '',
  language: '',
  sort: ''
};