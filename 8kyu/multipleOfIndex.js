// Find elements that are multiples of their own index
function multipleOfIndex(array) {
    return array.filter((item, index) => item % index === 0)
}