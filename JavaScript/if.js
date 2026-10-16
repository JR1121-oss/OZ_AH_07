// 조건문(conditional statement)

let age = 20;

// truthy: true로 취급되는 값들
// falsy: false로 취급되는 값들
// -> false, 0, "", null, undefined, NaN

let selectedUser = null;

if (selectedUser) {
    console.log("축하합니다. 당첨입니다.");
} else {
    console.log("아쉽네요. 다음 기회에.");
}
