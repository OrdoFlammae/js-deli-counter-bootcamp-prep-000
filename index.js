function takeANumber(katzDeliLine, name) {
  return katzDeliLine.indexOf(name) + 1;
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!";
  } else {
    return katzDeliLine.shift();
  }
}

function currentLine(katzDeliLine) {
  var string = "The line is currently: ";
  
  if (katzDeliLine.length === 0) {
    return "The line is currently empty.";
  }
  
  for (var i = 0; i < katzDeliLine.length; i++) {
    string += `${i + 1}. ${katzDeliLine[i]}`;
    
    if (i != katzDeliLine.length - 1) {
      string += ", ";
    }
  }
  
  return string;
}