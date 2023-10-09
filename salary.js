
    // KRA PAYE tax rates for 2023-2024
    const KRA_PAYE_TAX_RATES = {
      "0-240,000": 0,
      "240,001-323,333": 10,
      "323,334-646,667": 25,
      "646,668-970,000": 30,
      "970,001 and above": 35
    };

    // NHIF deduction rates for 2023-2024
    const NHIF_DEDUCTION_RATES = {
      "5,999 and below": 150,
      "6,000-7,999": 300,
      "8,000-11,999": 400,
      "12,000-14,999": 500,
      "15,000-19,999": 600,
      "20,000-24,999": 750,
      "25,000-29,999": 850,
      "30,000-34,999": 900,
      "35,000-39,999": 950,
      "40,000 and above": 1000
    };

    // NSSF deduction rate for 2023-2024
    const NSSF_DEDUCTION_RATE = 0.06;

    function calculateNetSalary() {
      // Get the basic salary and benefits from the input fields.
      const basicSalary = Number(document.getElementById("basicSalary").value);
      const benefits = Number(document.getElementById("benefits").value);

      // Calculate the taxable income.
      const taxableIncome = basicSalary - benefits;

      // Calculate the PAYE tax.
      let payeTax = 0;
      for (const taxBracket in KRA_PAYE_TAX_RATES) {
        if (taxableIncome >= Number(taxBracket.split("-")[0])) {
          payeTax += (Math.min(taxableIncome, Number(taxBracket.split("-")[1])) - Number(taxBracket.split("-")[0])) * KRA_PAYE_TAX_RATES[taxBracket] / 100;
        }
      }

      // Calculate the NHIF deduction.
      let nhifDeduction = NHIF_DEDUCTION_RATES["0-5,999"];
      if (taxableIncome > 5999) {
        nhifDeduction = NHIF_DEDUCTION_RATES[`${Math.floor(taxableIncome / 1000) * 1000}`];
      }

      // Calculate the NSSF deduction.
      const nssfDeduction = basicSalary * NSSF_DEDUCTION_RATE;

      // Calculate the gross salary.
      const grossSalary = basicSalary + benefits;

      // Calculate the net salary.
      const netSalary = grossSalary - payeTax - nhifDeduction - nssfDeduction;

      // Display the net salary.
      document.getElementById("netSalary").innerHTML = `Net salary: ${netSalary}`;
    }
  