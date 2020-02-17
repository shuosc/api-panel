import { Component, Input } from '@angular/core';
import { NzGridModule } from 'ng-zorro-antd/grid';

@Component({
  selector: 'nz-demo-typography-basic',
  template: `
    <article nz-typography>
      <h3 nz-title>{{name}}</h3>
      <p nz-paragraph nzEllipsis>
       简介：{{detail}}
      </p>
      <article nz-typography>
        <ul>
          <li>
            <a href="{{add_url}}">服务地址</a>
          </li>
          <li>
            <a href="{{store_url}}">仓库地址</a>
          </li>
        </ul>
      </article>
      <nz-divider></nz-divider>
    </article>
  `
})
export class NzDemoTypographyBasicComponent {
  @Input() name: string;
  @Input() detail: string;
  @Input() add_url: string;
  @Input() store_url:string;
}