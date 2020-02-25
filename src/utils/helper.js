export function capitalize(str = ''){
    return typeof str !== 'string'
        ? ''
        : str[0].toUpperCase().concat(str.slice(1))
}