import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-leftcontent',
  templateUrl: './leftcontent.component.html',
  styleUrls: ['./leftcontent.component.css']
})
export class LeftcontentComponent implements OnInit {

  menu = [{
    title: '通用设置'
  }, {
    title: '项目管理',
    open: true,
    children: [
      {title: '项目设置模板'},
      {title: '设置项目创建者'},
      {title: '项目和成员管理', active: true},
    ]
  }, {
    title: '编译构建'
  }, {
    title: '私有依赖库'
  }];
  
  constructor() { }

  ngOnInit() {
  }

}
