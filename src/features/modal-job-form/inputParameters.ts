export const inputParameters = [
  {
    name: 'company',
    validationRules: /^[a-zA-Z0-9]+$/i,
    errorMessage: 'This input is number and letter only'
  },
  {
    name: 'title',
    validationRules: /.*/i,
    errorMessage: ''
  },
  {
    name: 'location',
    validationRules: /^[A-Za-z]/i,
    errorMessage: 'This input is letter only'
  }
]
