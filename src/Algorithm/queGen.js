const questionBank = require("../Database/questions");
const mySubject = questionBank.questionBank[0];
const reqCO = [1, 3, 4]

function queGen(allQuestions, reqCO, marks) {
    let remainingMarks = marks
    let usableQuestions = [];
    // for (qn in allQuestions) {
    //     console.log(allQuestions[qn])
    // }
    allQuestions.forEach((qn) => {
        if (reqCO.includes(qn.courseOutcome)) {
            usableQuestions.push(qn)
        }
    })
    usableQuestions = usableQuestions.sort(() => Math.random() - 0.5)

    let finalQuestions = [];
    for (let i = 0; i < usableQuestions.length; i++) {
        if (remainingMarks <= 0) {
            break;
        }
        if (remainingMarks >= usableQuestions[i].mark) {
            console.log(remainingMarks)
            console.log(usableQuestions[i])
            finalQuestions.push(usableQuestions[i])
            remainingMarks -= usableQuestions[i].mark
        }
    }
}
// console.log(mySubject)
queGen(mySubject.questions, reqCO, 16)