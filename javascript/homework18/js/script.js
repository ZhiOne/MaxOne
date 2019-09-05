debugger;
const firstName = prompt('Enter your first-name','Max');
const lastName = prompt('Enter your last-name','Yevtushenko');
let marks = [];

const student = {
    name: firstName,
    lastname: lastName,
    sum : function (arr) {
        let sum = 0;
    for (let i = 0; i <= this.tabel.length - 1; i++) {
        sum += this.tabel[i];
    }
        return sum;
    },

    checkBadMarks : function(arr){
        for (let i = 0; i <= this.tabel.length - 1; i++ ){
            if ( this.tabel[i] > 4){
            } else {
                alert('You have bad mark');
                break;
            }

        }
        alert('Студент переведен на следующий курс')
    },
    
    
    calcAvarage : function () {
        if (this.sum / this.tabel.length -1 >= 7){
            alert('Студенту назначена стипендия');
        }
    }
};

for (let i = 0; i < 13; i++){
    let newSubject = prompt('Enter your subject','Math');
    if (newSubject === null) {
             student.tabel = marks;
             break;
    }
    let newMarks = +prompt('Enter your mark','12');
    marks.push(newMarks);
}

student.sum(student.tabel);
student.calcAvarage();
student.checkBadMarks(student.tabel);
