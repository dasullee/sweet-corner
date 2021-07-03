export default (num) => {
    const number = num / 100
    return "$" + number.toFixed(2)
}