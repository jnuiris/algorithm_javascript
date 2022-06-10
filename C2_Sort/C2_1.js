//  选择排序

// function selectSort(arr) {
//     let cur = 0
//     let l = arr.length
//     while(cur < l) {
//         let min = Number.MAX_SAFE_INTEGER
//         let min_index = -1
//         for(let i = cur; i < l; i++) {
//             if(arr[i] < min) {
//                 min = arr[i]
//                 min_index = i
//             }
//         };
//         [arr[cur], arr[min_index]] = [arr[min_index], arr[cur]]
//         cur++
//     }
//     return arr
// }
//
// console.log(selectSort([1, 3, 6, 2, 5]))
// console.log(selectSort([3, 1, 2, 3, 7]))

//  可以看出选择排序是不稳定排序，如[5, 5, 2],按从小打大排序时第一个5和第二个5最终会交换位置

//  对上面的选择排序稍微升级一下，支持按从小到大/从大到小排序

function selectSort(arr, func) {
    if(!func) {
        func = (item1, item2) => item1 - item2
    }
    let cur = 0
    let l = arr.length
    while(cur < l) {
        let min = func(Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER) < 0 ? Number.MAX_SAFE_INTEGER : Number.MIN_SAFE_INTEGER
        let min_index = -1
        for(let i = cur; i < l; i++) {
            if(func(min, arr[i]) >= 0) {
                min = arr[i]
                min_index = i
            }
        };
        [arr[cur], arr[min_index]] = [arr[min_index], arr[cur]]
        cur++
    }
    return arr
}

let arr = [1, 3, 2, 5, 4]
selectSort(arr)
console.log(arr)
// console.log(selectSort(arr, (item1, item2) => item2 - item1))
// console.log(selectSort(arr))
// console.log(selectSort(arr, (item1, item2) => item1 - item2))

