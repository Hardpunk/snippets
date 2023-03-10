function groupBy (arr, key) {
    return (arr || []).reduce((acc, x = {}) => ({
        ...acc,
        [x[key]]: [...acc[x[key]] || [], x]
    }), {})
}