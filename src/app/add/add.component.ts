import { Component, OnInit } from '@angular/core';
import { ListComponent} from '../list/list.component';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
  listComponent = new ListComponent(null);
  kinds = [];
  names = [];
  persons = [];
  maxDate = '';
  submit = {
    kind: '',
    name: '',
    person: '',
    date: '',
    description: '',
    solution: ''
  };

  constructor() { }

  ngOnInit() {
    this.kinds = this.listComponent.getKinds();
    this.names = this.listComponent.getNames();
    this.persons = this.listComponent.getPersons();
    this.maxDate  = this.listComponent.getCurTime();
    this.submit.date = this.maxDate;
  }

  submitInfo() {
    const _this = this;
    // http
    _this.submit = {
      kind: '',
      name: '',
      person: '',
      date: '',
      description: '',
      solution: ''
    };
    _this.submit.date = this.maxDate;
  }
}
