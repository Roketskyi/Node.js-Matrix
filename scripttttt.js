function main() {
    const matrix = [
        [1, 100, 2, 11, 35],
        [100, 3, 3333, 15, 4],
        [333, 111, 15, 20, 33]
    ];

    shiftMatrix(matrix, 1);
    printMatrix(matrix);
}

function printMatrix(matrix) {
    let maxColumns = 0;

    for (let i = 0; i < matrix.length; i++) {
        if (matrix[i].length > maxColumns) {
            maxColumns = matrix[i].length;
        }
    }

    console.log("             " + Array.from({ length: maxColumns }, (_, i) => `стовбець ${i + 1}`.padStart(14)).join(' '));

    for (let i = 0; i < matrix.length; i++) {
        console.log(`рядок ${i + 1} ` + matrix[i].map(value => value !== undefined ? value.toString().padStart(14) : "").join(' '));
    }
}

//1
function shiftMatrix(matrix, k) {
    const rows = matrix.length;
    const cols = matrix[0].length;

    for (let i = 0; i < rows; i++) {// i 3
        for (let j = cols; j >= 0; j--) {
            if (j - k >= 0 && i + k < matrix.length) {
                console.log(i+' '+j);
                matrix[i][j] = matrix[i + k][j - k];
            } else {
                matrix[i][j] = 0;
            }
        }
    }
}

//2
function sumElementsAfterThird(matrix) {
    const sums = [];

    for (let i = 0; i < matrix.length; i++) {
        let sum = 0;

        for (let j = 3; j < matrix[i].length; j++) {
            sum += matrix[i][j];
        }

        sums.push(sum);
    }

    console.log("Суми елементів після третього в кожному рядку:");
    for (let i = 0; i < sums.length; i++) {
        console.log(`рядок ${i + 1}: ${sums[i]}`);
    }
}

//3
function subtractRowMeans(matrix) {
    for (let i = 0; i < matrix.length; i++) {
        const row = matrix[i];
        const rowMean = Math.round(row.reduce((sum, value) => sum + value, 0) / row.length);

        for (let j = 0; j < row.length; j++) {
            row[j] -= rowMean;
        }
    }
}

//4
function findAndRemoveMaxFeww(matrix) {
    // Знайдемо максимальне значення в матриці
    let max = -Infinity;
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] > max) {
                max = matrix[i][j];
            }
        }
    }

    // Створимо масиви для збереження індексів рядків та стовпців з максимальними елементами
    const rowsToDelete = [];
    const colsToDelete = [];

    // Знайдемо рядки і стовпці, що містять максимальні елементи
    for (let i = 0; i < matrix.length; i++) {
        let containsMax = false;
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] === max) {
                containsMax = true;
                colsToDelete.push(j);
            }
        }
        if (containsMax) {
            rowsToDelete.push(i);
        }
    }

    // Видалення рядків
    rowsToDelete.sort((a, b) => b - a); // Видаляємо з останнього рядку
    rowsToDelete.forEach(rowIdx => {
        matrix.splice(rowIdx, 1);
    });

    // Видалення стовпців
    colsToDelete.sort((a, b) => b - a); // Видаляємо з останнього стовпця
    colsToDelete.forEach(colIdx => {
        for (let i = 0; i < matrix.length; i++) {
            matrix[i].splice(colIdx, 1);
        }
    })
}

//5
function findMaxAndMinElementThenSwapColumns(matrix) {
    const numColumns = matrix[0].length;
    let maxColumn = 0;
    let minColumn = 0;
    let maxElement = matrix[0][0];
    let minElement = matrix[0][0];

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < numColumns; j++) {
            if (matrix[i][j] > maxElement) {
                maxElement = matrix[i][j];
                maxColumn = j;
            }

            if (matrix[i][j] < minElement) {
                minElement = matrix[i][j];
                minColumn = j;
            }
        }
    }

    if (maxColumn !== minColumn) {
        for (let i = 0; i < matrix.length; i++) {
            const temp = matrix[i][maxColumn];
            matrix[i][maxColumn] = matrix[i][minColumn];
            matrix[i][minColumn] = temp;
        }
    }

    return { maxColumn, minColumn };
}

//6
function findAndRemoveMaxOne(matrix) {
    let maxVal = -Infinity;
    let maxRow = -1;
    let maxCol = -1;

    // Знаходимо максимальне значення та його координати в матриці
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] > maxVal) {
                maxVal = matrix[i][j];
                maxRow = i;
                maxCol = j;
            }
        }
    }

    if (maxRow !== -1 && maxCol !== -1) {
        // Видаляємо рядок з максимальним значенням
        matrix.splice(maxRow, 1);

        // Видаляємо стовпець з максимальним значенням
        for (let i = 0; i < matrix.length; i++) {
            matrix[i].splice(maxCol, 1);
        }
    }
}

//7
function findAndRemoveMaxFew(matrix) {
    // Знайдемо максимальне значення в матриці
    let max = -Infinity;
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] > max) {
                max = matrix[i][j];
            }
        }
    }

    // Створимо масиви для збереження індексів рядків та стовпців з максимальними елементами
    const rowsToDelete = [];
    const colsToDelete = [];

    // Знайдемо рядки і стовпці, що містять максимальні елементи
    for (let i = 0; i < matrix.length; i++) {
        let containsMax = false;
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] === max) {
                containsMax = true;
                colsToDelete.push(j);
            }
        }
        if (containsMax) {
            rowsToDelete.push(i);
        }
    }

    // Видалення рядків
    rowsToDelete.sort((a, b) => b - a); // Видаляємо з останнього рядку
    rowsToDelete.forEach(rowIdx => {
        matrix.splice(rowIdx, 1);
    });

    // Видалення стовпців
    colsToDelete.sort((a, b) => b - a); // Видаляємо з останнього стовпця
    colsToDelete.forEach(colIdx => {
        for (let i = 0; i < matrix.length; i++) {
            matrix[i].splice(colIdx, 1);
        }
    })
}

//8
function swapMaxAndMinElementsColumns(matrix) {
    let maxRowIndex = 0;
    let maxColumnIndex = 0;
    let minRowIndex = 0;
    let minColumnIndex = 0;
    let maxElement = matrix[0][0];
    let minElement = matrix[0][0];

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            const currentElement = matrix[i][j];
            if (currentElement > maxElement) {
                maxElement = currentElement;
                maxRowIndex = i;
                maxColumnIndex = j;
            }
            if (currentElement < minElement) {
                minElement = currentElement;
                minRowIndex = i;
                minColumnIndex = j;
            }
        }
    }

    // Обмін рядків
    [matrix[maxRowIndex], matrix[minRowIndex]] = [matrix[minRowIndex], matrix[maxRowIndex]];

    // Обмін стовпців
    for (let i = 0; i < matrix.length; i++) {
        [matrix[i][maxColumnIndex], matrix[i][minColumnIndex]] = [matrix[i][minColumnIndex], matrix[i][maxColumnIndex]];
    }
}

main();