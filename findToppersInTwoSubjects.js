function findToppersInTwoSubjects() {
  const students = [
    {
      name: 'mini',
      subject: [{ maths: 23 }, { english: 23 }, { science: 25 }, { sports: 20 }],
    },
    {
      name: 'jerry',
      subject: [{ maths: 23 }, { english: 20 }, { science: 20 }, { sports: 20 }],
    },
    {
      name: 'john',
      subject: [{ maths: 23 }, { english: 25 }, { science: 20 }, { sports: 21 }],
    },
  ];
  let highestObj = {};
  let finalList = '';

  function findTopInTwoSubs() {
    let stuMarksMap = {};
    students.map((stu) => {
      stuMarksMap[stu.name] = fetchMarks(stu.subject);
    });
    findHighest(stuMarksMap);
    prepareFinalList();
  
    return finalList;
  }
  
  function findHighest(obj) {
    for (let ob in obj) {
      for (let sub in obj[ob]) {
        if (highestObj[sub]) {
          if (highestObj[sub].score < obj[ob][sub]) {
            highestObj[sub] = {
              name: [ob],
              score: obj[ob][sub],
            };
          } else if (
            highestObj[sub].score === obj[ob][sub] &&
            highestObj[sub].name.indexOf(ob) === -1
          ) {
            highestObj[sub].name.push(ob);
          }
        } else {
          highestObj[sub] = {
            name: [ob],
            score: obj[ob][sub],
          };
        }
      }
    }
  }
  
  function fetchMarks(marksArr) {
    let temp = {};
    marksArr.map((marksObj) => {
      const sub = Object.keys(marksObj)[0];
      temp[sub] = marksObj[sub];
    });
    return temp;
  }
  
  function prepareFinalList() {
    let obj = {};
    for (let sub in highestObj) {
      highestObj[sub].name.map((stuName) => {
        if (obj[stuName]) {
          obj[stuName]++;
        } else {
          obj[stuName] = 1;
        }
      });
    }
    let finalArr = [];
    for (let stu in obj) {
      if (obj[stu] >= 2) {
        finalArr.push(stu);
      }
    }
    finalList = finalArr.join(', ');
  }

  return findTopInTwoSubs();
}

