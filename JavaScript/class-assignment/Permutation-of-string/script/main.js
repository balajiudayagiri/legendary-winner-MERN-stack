function generatePermutations(list, size = list.length) {
    if (size > list.length) return [];
    else if (size == 1) return list.map(d => [d]);
    return list.flatMap(d => generatePermutations(list.filter(a => a !== d), size - 1).map(item => [d, ...item]));
}

generatePermutations('cat')