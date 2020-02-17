import { Component } from '@angular/core';
import { NzDemoTypographyBasicComponent } from '../button/button.component';

@Component({
  selector: 'nz-demo-grid-flex',
  template: `
    <div>
        <div nz-row  style="background:#acd; color:#FFF" *ngFor="let info of infos">
          <div style="border:1px solid #FFF" nz-col [nzXs]="{ span: 5, offset: 1 }" [nzLg]="{ span: 20, offset: 2 }">
            <nz-demo-typography-basic [name]="info.name" [detail]="info.detail" [add_url]="info.add_url" [store_url]="info.store_url"></nz-demo-typography-basic>
          </div>
        </div>
    </div>
  `
})
export class NzDemoGridFlexComponent {
  infos: any;

  constructor(){
    this.infos=[ {'name':'学期基本信息','detail':'11111111111111111112222666666666666666666666666666666666666666666666666666666662221111111','add_url':'http://cloud.shuosc.com/api/semester','store_url':'https://github.com/shuosc/shuSemester'},
                 {'name':'课程基本信息','detail':'22222','add_url':'http://cloud.shuosc.com/api/course','store_url':'https://github.com/shuosc/shuCourse'},
                 {'name':'学生基本信息','detail':'22222','add_url':'http://cloud.shuosc.com/api/student','store_url':'https://github.com/shuosc/shuStudent'},
                 {'name':'教师基本信息','detail':'111111','add_url':'http://cloud.shuosc.com/api/teacher','store_url':'https://github.com/shuosc/shuTeacher'},
                 {'name':'pdf生成工具','detail':'111111','add_url':'http://cloud.shuosc.com/api/pdf-generator','store_url':'https://github.com/shuosc/pdf-generator'},
                 {'name':'某学期选课的url','detail':'111111','add_url':'http://cloud.shuosc.com/api/course-selection-url','store_url':'https://github.com/shuosc/shuCourse'},
                 {'name':'某学期某学生选课情况','detail':'111111','add_url':'http://cloud.shuosc.com/api/shuStudentCourse','store_url':'https://github.com/shuosc/shuStudentCourse'},
                 {'name':'学生待办事项存储','detail':'111111','add_url':'http://cloud.shuosc.com/api/todo','store_url':'https://github.com/shuosc/shuTodo'},
                 {'name':'shuhelper用户设置存储','detail':'111111','add_url':'http://cloud.shuosc.com/api/shuhelper-config-storage','store_url':'https://github.com/shuosc/shuhelperConfigStorage'},
                 {'name':'访问选课网站代理','detail':'111111','add_url':'http://shu-course-proxy-svc:8086/','store_url':'https://github.com/longfangsong/SHUCourseProxy'},
                 {'name':'部署','detail':'111111','add_url':'http://cloud.shuosc.com/panel/','store_url':''}
               ]
  }
}