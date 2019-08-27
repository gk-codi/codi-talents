export const compareWindowProperty = (property, value, operator = '==', worstCaseReturn = false) => {
  
  if (typeof window !== 'undefined') {
    switch (operator) {
      case '>':
        return window[property] > value;
      case '<':
        return window[property] < value;
      case '>=':
        return window[property] >= value;
      case '<=':
        return window[property] <= value;
      case '!=':
        return window[property] !== value;
      case '==':
        return window[property] === value;
      default:
        return worstCaseReturn;
    }
    
  } else {
    return worstCaseReturn;
  }
}

export const windowAddEventListener = (event, action) => {
  if (typeof window !== 'undefined') {
    window.addEventListener(event, action)
  }
}
export const compareWindowLocationProperty = (property, value, operator = '==', worstCaseReturn = false) => {
  if (typeof window !== 'undefined' && typeof window.location !== 'undefined') {
    switch (operator) {
      case '>':
        return window.location[property] > value;
      case '<':
        return window.location[property] < value;
      case '>=':
        return window.location[property] >= value;
      case '<=':
        return window.location[property] <= value;
      case '!=':
        return window.location[property] !== value;
      case '==':
        return window.location[property] === value;
      default:
        return worstCaseReturn;
    }
  }
}

export const activeRouteHelper = (routeName, operation, value) => {
  if (typeof window !== 'undefined') {
    if (typeof window.location !== 'undefined') {
      switch (operation) {
        case '>':
          return window.location.href.indexOf(routeName) > value;
        case '<':
          return window.location.href.indexOf(routeName) < value;
        case '>=':
          return window.location.href.indexOf(routeName) >= value;
        case '<=':
          return window.location.href.indexOf(routeName) <= value;
        case '!=':
          return window.location.href.indexOf(routeName) !== value;
        case '==':
          return window.location.href.indexOf(routeName) === value;
        default:
          return false;
        
      }
    }
  }
  return false;
}
