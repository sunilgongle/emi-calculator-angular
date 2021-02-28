import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CopyContentService {
  constructor() {}

  rupeeSymbol = "₹";
  header: any = {
    logoPath: '../../assets/images/logo.png',
    menu: ['Products', 'Solutions', 'Pricing'],
    loginButton: 'Login',
    signUpButton: 'Get Started',
  };
  homePage: any = {
    backgroundCircleImagepath: '../../assets/images/blob-small.svg',
    taglineAboveImage: 'We make it Super Simple',
    taglineImage: '../../assets/images/collect_img-video.png',
    dotsImage: '../../assets/images/accounting_dots.svg',
    calculator: {
      calculatorTitle:"Eligibility Calculator",
      monthlyIcomeTitle: 'Monthly Income',
      minLoan : "100000",
      maxLoan : "300000",
      monthlyExpenseTitle: 'Monthly Expenses',
      repaymentTenureTitle: 'Repayment Tenure',
      existingLoanTitle: 'Do you have ny existing Loans?',
      emiExistingLoanTitle: 'EMI of exisint loan (optional)',
      emiExistingPlaceholder: '100000',
      loanAmountTile: 'Loan AMount',
      emiavailable: 'Your EMI will be',
      getMoneyButtonTitle: 'GET MONEY',
      emiInstallments: [
        {'label':"6 Months", 'months' : '6' },
        {'label': "1 Year", 'months' : '12'},
        {'label': "2 Year", 'months' : '24'},
        {'label': "3 Year", 'months' : '36'},
        {'label': "4 Year", 'months' : '48'},
        {'label': "5 Year", 'months' : '60'},
      ],
    },
    thumbnail: [
      {
        img: '../../assets/images/Get Paid Instantly.png',
        title: 'Quick cash disbursement',
        description: 'Get terms loans that your business needs within 72 hrs',
      },
      {
        img: '../../assets/images/freelancer_feature_icon_6@1.5x.png',
        title: 'Ace your business finances',
        description:
          'Manage banking, accounting & everything in between, on one platform',
      },
      {
        img: '../../assets/images/low_interest_rate.png',
        title: 'Low-interest rate',
        description:
          'Achieve your financial goals with an amazing interest rate starting at 13% per annum',
      },
      {
        img: '../../assets/images/Covid.png',
        title: 'Loans to fight COVID-19',
        description:
          'Zero EMI for first 3 months on Back-to-Business loans of upto 1 lakh',
      },
      {
        img: '../../assets/images/Secure Payments.png',
        title: 'Zero Paperwork',
        description:
          'Get started instantly by submitting only your basic details & bank statements',
      },
    ],

    cta: {
      ctaTitle: 'Boost your business with Open',
      ctaSubtitle:
        'Get your hands on a term loan that’s crafted for your business',
      ctaButton: 'Get an Open Account',
    },
  };
}
