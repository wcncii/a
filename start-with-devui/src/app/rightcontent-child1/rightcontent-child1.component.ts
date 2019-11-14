import { 
  Component,
  OnInit,
  ChangeDetectionStrategy,
  HostBinding 
} from '@angular/core';

import { SourceType, originSource } from '../mock-data';

@Component({
  selector: 'app-rightcontent-child1',
  templateUrl: './rightcontent-child1.component.html',
  styleUrls: ['./rightcontent-child1.component.css']
})
export class RightcontentChild1Component implements OnInit {

  basicDataSource: Array<SourceType> = JSON.parse(JSON.stringify(originSource.slice(0, 6)));
  dataTableOptions = {
    columns: [
        {
            field: 'name',
            header: '用户名称',
            fieldType: 'text'
        },
        {
            field: 'nickName',
            header: '昵称',
            fieldType: 'text'
        },
        {
            field: 'tag',
            header: '用户标签',
            fieldType: 'text'
        },
        {
          field: 'enterpriseUser',
          header: '企业用户',
          fieldType: 'text'
        },
        {
          field: 'projectRole',
          header: '项目角色',
          fieldType: 'text'
        },
        {
          field: 'accountArch',
          header: '账号体系',
          fieldType: 'text'
        },
        {
          field: 'isDisable',
          header: '是否禁用',
          fieldType: 'text'
        }
    ]
  };

  constructor() { }

  ngOnInit() {
  }

  onToggle(event) {
    console.log(event);
  }

}
