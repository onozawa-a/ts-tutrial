import React from 'react';
import Summary from './components/Summary'
import Detail, { FeeClassification } from './components/Detail'
import './App.css';

type AdmissionFeeCalculatorState = {
  feeClassifications: FeeClassification[];
}
class AdmissionFeeCalculator extends React.Component<object, AdmissionFeeCalculatorState> {
  constructor(props: object) {
    super(props);
    const adults: FeeClassification = {
      name: "大人",
      description: "",
      unitPrice: 1000,
      numOfPeople: 0,
      totalPrice: 0,
    };
    const students: FeeClassification = {
      name: "学生",
      description: "中学生・高校生",
      unitPrice: 700,
      numOfPeople: 0,
      totalPrice: 0,
    };
    const children: FeeClassification = {
      name: "子ども",
      description: "小学生",
      unitPrice: 300,
      numOfPeople: 0,
      totalPrice: 0,
    };
    const infants: FeeClassification = {
      name: "幼児",
      description: "未就学",
      unitPrice: 0,
      numOfPeople: 0,
      totalPrice: 0,
    };
    this.state = { feeClassifications: [adults, students, children, infants] };
  }

  handleNumOfPeopleChange(idx: number, num: number): void {
    const currentFC = this.state.feeClassifications[idx];
    const newTotalPrice = currentFC.unitPrice * num;
    // 人数と合計額以外は既存の値をコピー
    const newFC: FeeClassification = {
      ...currentFC,
      ...{ numOfPeople: num, totalPrice: newTotalPrice }
    }
    // 新たな配列を生成
    const feeClassifications = this.state.feeClassifications.slice();
    feeClassifications[idx] = newFC;

    // stateの更新
    this.setState({ feeClassifications: feeClassifications });
  }

  render() {
    const details = this.state.feeClassifications.map((fc, idx) => {
      return (
        <Detail key={idx.toString()} classification={fc}
          onNumOfPeopleChange={n => this.handleNumOfPeopleChange(idx, n)} />
      );
    });
    const numOfPeople = this.state.feeClassifications
      .map(fc => fc.numOfPeople).reduce((p, c) => p + c);
    const totalAmount = this.state.feeClassifications
      .map(fc => fc.totalPrice).reduce((p, c) => p + c);

    return [
      <div>
        {details}
      </div>,
      <div>
        <Summary numOfPeople={numOfPeople} totalAmount={totalAmount} />
      </div>
    ];
  }

}

const App: React.FC = () => {
  return (
    <div className="main">
      <AdmissionFeeCalculator />
    </div>
  );
}

export default App;
