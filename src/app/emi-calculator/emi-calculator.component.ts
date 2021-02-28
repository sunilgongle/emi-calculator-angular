import { Component, OnInit } from '@angular/core';
import { Options } from 'ng5-slider';
import { CopyContentService } from '../shared/copy-content.service';

@Component({
  selector: 'app-emi-calculator',
  templateUrl: './emi-calculator.component.html',
  styleUrls: ['./emi-calculator.component.scss'],
})
export class EmiCalculatorComponent implements OnInit {
  constructor(public copyContent: CopyContentService) {}

  emiTextCopy: any;
  monthlyIncome: number = 100000;
  monthlyExpense: number = 0;
  tenure: number = 0;
  loanAmount: number = 0;
  emi: number = 0;
  isExistingLoans = false;

  ngOnInit(): void {
    this.emiTextCopy = this.copyContent.homePage.calculator;
    this.calculateLoanAmount();
    this.calculateEMI();
  }

  getMothlyIncome(event: any) {
    this.monthlyIncome = event.value;
    this.calculateLoanAmount();
    this.calculateEMI();
  }
  getMothlyExpense(event: any) {
    this.monthlyExpense = event.value;
    this.calculateLoanAmount();
    this.calculateEMI();
  }

  getTenure() {
    this.calculateLoanAmount();
    this.calculateEMI();
  }

  getIsExistingLoans() {
    if (!this.isExistingLoans) this.isExistingLoans = true;
    else this.isExistingLoans = false;
  }
  calculateLoanAmount() {
    if (this.tenure != 0) {
      this.loanAmount =
        (this.monthlyIncome - this.monthlyExpense) * this.tenure;
    } else {
      this.loanAmount = this.monthlyIncome - this.monthlyExpense;
    }
  }
  calculateEMI() {
    if (this.tenure != 0) {
      this.emi = this.loanAmount / this.tenure;
    }
  }
}
