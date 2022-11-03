function getGrade(s1, s2, s3) {
  let average = (parseInt(s1) + parseInt(s2) + parseInt(s3)) / 3

  return average >= 90 && average <= 100 ? 'A' : average >= 80 && average < 90 ? 'B' :
    average >= 70 && average < 80 ? 'C' : average >= 60 && average < 70 ? 'D' : 'F'
}

getGrade(100, 50, 100)