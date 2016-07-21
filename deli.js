function takeANumber(katzDeliLine, name) {
  // i need to take the name, and add it to the end of the katzDeliLIne
    katzDeliLine.push(name);
    return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`;
}

function nowServing(katzDeliLine){
  //This function should return the next person in line and then remove them from the line.
  //If there is nobody in line, it should return "There is nobody waiting to be served!"
  // If there is no one in line, return nobody waiting to be served
  // Else, find the FIRST person in line, and 'serve' them, then take them off list

  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!";
  }
  else
    return `Currently serving ${katzDeliLine.shift()}.`;
}

function currentLine(katzDeliLine) {
  var currentLine = []
  if (katzDeliLine.length === 0) {
    return "The line is currently empty.";
  }
  // go through (iterate) the list and return their name and position in line.
  // so FOR
  else {
    for (var i = 0; i < katzDeliLine.length; i++) {
      // QUESTION: why can't I start i at 1? because that would be the first
      // person in line 1. blah. why bother to add 0+1. blah?
      // i'm going to push into the currentLine array the number (i)
      // and their position (katzDeliLine[0], [1], etc... or [i] in this case).
              // ok nevermind = because of this index starts at 0 duh.
      currentLine.push(`${i+1}. ${katzDeliLine[i]}`);
    }
    return `The line is currently: ${currentLine.join(", ")}`;
  }
}
