function calculateEMI() {
    // Get form inputs
    let loanAmount = parseFloat(document.getElementById("loanAmount").value);
    let interestRate = parseFloat(document.getElementById("interestRate").value) / 1200; // Convert annual rate to monthly rate
    let loanTerm = parseInt(document.getElementById("loanTerm").value);
  
    // Calculate EMI
    let emi = (loanAmount * interestRate * Math.pow(1 + interestRate, loanTerm)) / (Math.pow(1 + interestRate, loanTerm) - 1);
  
    // Display EMI
    document.getElementById("result").innerHTML = "Monthly EMI: " + emi.toFixed(2);
  
    // Calculate repayment schedule
    let repaymentTable = document.getElementById("repaymentTable").getElementsByTagName('tbody')[0];
    repaymentTable.innerHTML = ""; // Clear table body
  
    let balance = loanAmount;
    for (let i = 1; i <= loanTerm; i++) {
      let interest = balance * interestRate;
      let principal = emi - interest;
      balance = Math.abs(balance - principal);
  
      // Add row to table
      let row = repaymentTable.insertRow();
      let monthCell = row.insertCell(0);
      let emiCell = row.insertCell(1);
      let principalCell = row.insertCell(2);
      let interestCell = row.insertCell(3);
      let balanceCell = row.insertCell(4);
      monthCell.innerHTML = i;
      emiCell.innerHTML = emi.toFixed(2);
      principalCell.innerHTML = principal.toFixed(2);
      interestCell.innerHTML = interest.toFixed(2);
      balanceCell.innerHTML = balance.toFixed(2);
    }
  }
  