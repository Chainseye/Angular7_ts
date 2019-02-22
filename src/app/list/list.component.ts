import { Component, OnInit } from '@angular/core';
import { APIService } from '../service/api.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  types = ['种类', '项目名称', '记录人员', '日期'];
  kinds = [];
  names = [];
  persons = [];
  list = [];
  pages = [];
  selectType = '';
  selectKind = '';
  selectName = '';
  selectPerson = '';
  startDate = '';
  endDate = '';
  maxDate = '';
  pageIndex = 1;
  pageSize = 10;
  count = 0;

  constructor(private apiService: APIService) { }

  ngOnInit() {
    this.kinds = this.getKinds();
    this.names = this.getNames();
    this.persons = this.getPersons();
    this.maxDate = this.getCurTime();
    this.getListData();
  }
  getKinds() {
    const _this = this;
    // http
    const kinds = [{
      name: '运营', id: 0
    }, {
      name: '需求', id: 1
    }, {
      name: '进度', id: 2
    }, {
      name: '成本', id: 3
    }, {
      name: '开发', id: 4
    }, {
      name: '接口', id: 5
    }, {
      name: '实施', id: 6
    }, {
      name: '测试', id: 7
    }, {
      name: '工程', id: 8
    }, {
      name: '汇报演示', id: 9
    }, {
      name: '验收', id: 10
    }];

    return kinds;
  }
  getNames() {
    const _this = this;
    // http
    const names = ['AA省检', 'AB省检', 'BB省检', '省调研', '市调研', 'KV_032'];
    return names;
  }
  getPersons() {
    const _this = this;
    // http
    const persons = ['admin', 'AA'];
    return persons;
  }
  getCurTime() {
    const _this = this;
    const dateTime = new Date();
    const year = ('' + dateTime.getFullYear());
    let month = ('' + (dateTime.getMonth() + 1));
    if (month.length === 1) {
      month = '0' + month;
    }
    let day = ('' + dateTime.getDate());
    if (day.length === 1) {
      day = '0' + day;
    }
    return year + '-' + month + '-' + day;
  }
  clearFilter() {
    const _this = this;
    // clear
    _this.selectType = '';
    _this.selectKind = '';
    _this.selectName = '';
    _this.selectPerson = '';
    _this.startDate = '';
    _this.endDate = '';
    // getListData
    _this.pageIndex = 1;
    _this.getListData();
  }
  getListData() {
    const _this = this;
    // ajax
    _this.count = 312;
    _this.pageIndex = 1;
    _this.list = [];

    _this.apiService.getAllList(_this.pageIndex, _this.pageSize)
      .subscribe(data => _this.list = data);
    setTimeout(function() {
      _this.list = [
        {
          id: 0,
          kind: '实施',
          name: 'AA省检',
          person: 'admin',
          date: '2018-12-11',
          description: '要求：\n' +
          '1、日报\n' +
          '2、例会\n' +
          '3、检查\n' +
          '4、汇报',
          solution: 'the solutions are：\n' +
          '1、how\n' +
          '2、where\n' +
          '3、when\n' +
          '4、who'
        }, {
          id: 0,
          kind: '实施',
          name: 'AA省检',
          person: 'admin',
          date: '2018-12-11',
          description: '要求：\n' +
          '1、日报\n' +
          '2、例会\n' +
          '3、检查\n' +
          '4、汇报',
          solution: 'the solutions are：\n' +
          '1、how\n' +
          '2、where\n' +
          '3、when\n' +
          '4、who'
        },{
          id: 0,
          kind: '实施',
          name: 'AA省检',
          person: 'admin',
          date: '2018-12-11',
          description: '要求：\n' +
          '1、日报\n' +
          '2、例会\n' +
          '3、检查\n' +
          '4、汇报',
          solution: 'the solutions are：\n' +
          '1、how\n' +
          '2、where\n' +
          '3、when\n' +
          '4、who'
        },{
          id: 0,
          kind: '实施',
          name: 'AA省检',
          person: 'admin',
          date: '2018-12-11',
          description: '要求：\n' +
          '1、日报\n' +
          '2、例会\n' +
          '3、检查\n' +
          '4、汇报',
          solution: 'the solutions are：\n' +
          '1、how\n' +
          '2、where\n' +
          '3、when\n' +
          '4、who'
        },{
          id: 0,
          kind: '实施',
          name: 'AA省检',
          person: 'admin',
          date: '2018-12-11',
          description: '要求：\n' +
          '1、日报\n' +
          '2、例会\n' +
          '3、检查\n' +
          '4、汇报',
          solution: 'the solutions are：\n' +
          '1、how\n' +
          '2、where\n' +
          '3、when\n' +
          '4、who'
        },{
          id: 0,
          kind: '实施',
          name: 'AA省检',
          person: 'admin',
          date: '2018-12-11',
          description: '要求：\n' +
          '1、日报\n' +
          '2、例会\n' +
          '3、检查\n' +
          '4、汇报',
          solution: 'the solutions are：\n' +
          '1、how\n' +
          '2、where\n' +
          '3、when\n' +
          '4、who'
        },{
          id: 0,
          kind: '实施',
          name: 'AA省检',
          person: 'admin',
          date: '2018-12-11',
          description: '要求：\n' +
          '1、日报\n' +
          '2、例会\n' +
          '3、检查\n' +
          '4、汇报',
          solution: 'the solutions are：\n' +
          '1、how\n' +
          '2、where\n' +
          '3、when\n' +
          '4、who'
        },{
          id: 0,
          kind: '实施',
          name: 'AA省检',
          person: 'admin',
          date: '2018-12-11',
          description: '要求：\n' +
          '1、日报\n' +
          '2、例会\n' +
          '3、检查\n' +
          '4、汇报',
          solution: 'the solutions are：\n' +
          '1、how\n' +
          '2、where\n' +
          '3、when\n' +
          '4、who'
        },{
          id: 0,
          kind: '实施',
          name: 'AA省检',
          person: 'admin',
          date: '2018-12-11',
          description: '要求：\n' +
          '1、日报\n' +
          '2、例会\n' +
          '3、检查\n' +
          '4、汇报',
          solution: 'the solutions are：\n' +
          '1、how\n' +
          '2、where\n' +
          '3、when\n' +
          '4、who'
        },{
          id: 0,
          kind: '实施',
          name: 'AA省检',
          person: 'admin',
          date: '2018-12-11',
          description: '要求：\n' +
          '1、日报\n' +
          '2、例会\n' +
          '3、检查\n' +
          '4、汇报',
          solution: 'the solutions are：\n' +
          '1、how\n' +
          '2、where\n' +
          '3、when\n' +
          '4、who'
        }];
      for (let i = 0; i < _this.list.length; ++i) {
        _this.list[i].id = i;
      }
      _this.updatePageBar();
    }, 0);

  }
  updatePageBar() {
    const _this = this;
    const maxPage = Math.ceil(_this.count / _this.pageSize);
    _this.pages = [];
    if (maxPage <= 7) {
      for (let i = 0; i < maxPage; ++i) {
        _this.pages[i] = i + 1;
      }
    } else {
      _this.pages[0] = 1;
      if (_this.pageIndex <= 3) {
        _this.pages[1] = 2;
        _this.pages[2] = 3;
        _this.pages[4] = maxPage;
        if (_this.pageIndex === 3) {
          _this.pages[3] = 4;
          _this.pages[4] = '';
          _this.pages[5] = maxPage;
        }
      } else if (maxPage - _this.pageIndex < 3) {
        _this.pages[4] = maxPage;
        _this.pages[3] = maxPage - 1;
        _this.pages[2] = maxPage - 2;
        if (maxPage - _this.pageIndex === 2) {
          _this.pages[5] = maxPage;
          _this.pages[4] = maxPage - 1;
          _this.pages[3] = maxPage - 2;
          _this.pages[2] = maxPage - 3;
        }
      } else {
        _this.pages[2] = _this.pageIndex - 1;
        _this.pages[3] = _this.pageIndex;
        _this.pages[4] = _this.pageIndex + 1;
        _this.pages[6] = maxPage;
      }
    }
  }
}
