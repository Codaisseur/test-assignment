module.exports.htmlChecker = (elements, code) => (
  elements
    .map(el => {
      if (!code.includes(el)) {
        return {
          passed: false,
          message: `Your code does not include ${el}`
        }
      }
      return  {
        passed: true,
        message: 'Well done!'
      }
      
    })
    .every(el => el.passed)
)
