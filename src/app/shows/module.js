import { observable, action } from 'mobx';

class Shows {
  @observable number = 1;

  @observable numbers = [
    { text: 'One', value: 1 },
    { text: 'Two', value: 2 },
    { text: 'Three', value: 3 }
  ];

  @action add = () => {
    this.number++;
  };

  @action subtract = () => {
    this.number--;
  };

  @action addNumber = () => {
    this.numbers.push({
      text: this.numbers.length + 1,
      value: this.numbers.length + 1
    });
  };
}

export default Shows;
