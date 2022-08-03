const questionBank = require("../Database/questions");
const mySubject = questionBank.questionBank[0];
const reqCO = [1, 2, 3, 5]

function queGen(allQuestions, reqCO, marks) {
    let remainingMarks = marks
    let COqueue = [];
    reqCO.forEach((co) => {
        const coQns = allQuestions.filter((qn) => { return qn.courseOutcome === co })
        coQns.sort(() => { return Math.random() - 0.5 })
        COqueue.push({ courseOutcome: co, questions: coQns })
    })
    COqueue.forEach((cq) => {
        // console.log("CO" + cq.courseOutcome)
        // console.log(cq.questions)
    })
    let COindex = 0;
    let finalQuestions = [];
    let unusedQuestions = [];
    while (remainingMarks > 0) {
        if (COqueue[COindex].questions.length !== 0) {
            if (COqueue[COindex].questions[0].mark <= remainingMarks) {
                finalQuestions.push(COqueue[COindex].questions[0]);
                remainingMarks = remainingMarks - COqueue[COindex].questions[0].mark;
                COqueue[COindex].questions.splice(0, 1);
            } else {
                unusedQuestions.push(COqueue[COindex].questions[0]);
                COqueue[COindex].questions.splice(0, 1);
            }
        }
        let sum = 0;
        COqueue.forEach((queue) => {
            sum = sum + queue.questions.length
        })
        if (sum === 0) {
            break;
        }
        COindex = (COindex + 1) % reqCO.length
    }
    unusedQuestions.sort((a, b) => { return a.mark > b.mark })
    if (unusedQuestions.length != 0) {

        const lastQ = unusedQuestions[0];
        lastQ.mark = remainingMarks;
        finalQuestions.push(lastQ);
        remainingMarks = 0;
    }
    console.log(finalQuestions)
    console.log(remainingMarks)
}
queGen(mySubject.questions, reqCO, 20)