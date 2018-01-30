/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
 /* tslint:disable */


import * as i0 from '@angular/core';
import * as i1 from './datagrid';
import * as i2 from '@angular/common';
import * as i3 from '@angular/forms';
import * as i4 from '../common/shared';
import * as i5 from '../dropdown/dropdown';
import * as i6 from '../paginator/paginator';
import * as i7 from '../paginator/paginator.ngfactory';
export const DataGridModuleNgFactory:i0.NgModuleFactory<i1.DataGridModule> = i0.ɵcmf(i1.DataGridModule,
    ([] as any[]),(_l:any) => {
      return i0.ɵmod([i0.ɵmpd(512,i0.ComponentFactoryResolver,i0.ɵCodegenComponentFactoryResolver,
          [[8,([] as any[])],[3,i0.ComponentFactoryResolver],i0.NgModuleRef]),i0.ɵmpd(4608,
          i2.NgLocalization,i2.NgLocaleLocalization,[i0.LOCALE_ID]),i0.ɵmpd(4608,i3.ɵi,
          i3.ɵi,([] as any[])),i0.ɵmpd(512,i2.CommonModule,i2.CommonModule,([] as any[])),
          i0.ɵmpd(512,i4.SharedModule,i4.SharedModule,([] as any[])),i0.ɵmpd(512,i5.DropdownModule,
              i5.DropdownModule,([] as any[])),i0.ɵmpd(512,i3.ɵba,i3.ɵba,([] as any[])),
          i0.ɵmpd(512,i3.FormsModule,i3.FormsModule,([] as any[])),i0.ɵmpd(512,i6.PaginatorModule,
              i6.PaginatorModule,([] as any[])),i0.ɵmpd(512,i1.DataGridModule,i1.DataGridModule,
              ([] as any[]))]);
    });
const styles_DataGrid:any[] = ([] as any[]);
export const RenderType_DataGrid:i0.RendererType2 = i0.ɵcrt({encapsulation:2,styles:styles_DataGrid,
    data:{}});
function View_DataGrid_1(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[(_l()(),i0.ɵeld(0,(null as any),(null as any),3,'div',[['class',
      'ui-datagrid-header ui-widget-header ui-corner-top']],(null as any),(null as any),
      (null as any),(null as any),(null as any))),(_l()(),i0.ɵted((null as any),['\n                '])),
      i0.ɵncd((null as any),0),(_l()(),i0.ɵted((null as any),['\n            ']))],
      (null as any),(null as any));
}
function View_DataGrid_2(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[(_l()(),i0.ɵeld(0,(null as any),(null as any),1,'p-paginator',
      [['styleClass','ui-paginator-bottom']],(null as any),[[(null as any),'onPageChange']],
      (_v,en,$event) => {
        var ad:boolean = true;
        var _co:any = _v.component;
        if (('onPageChange' === en)) {
          const pd_0:any = ((<any>_co.paginate($event)) !== false);
          ad = (pd_0 && ad);
        }
        return ad;
      },i7.View_Paginator_0,i7.RenderType_Paginator)),i0.ɵdid(49152,(null as any),
      0,i6.Paginator,([] as any[]),{pageLinkSize:[0,'pageLinkSize'],styleClass:[1,
          'styleClass'],alwaysShow:[2,'alwaysShow'],totalRecords:[3,'totalRecords'],
          first:[4,'first'],rows:[5,'rows'],rowsPerPageOptions:[6,'rowsPerPageOptions']},
      {onPageChange:'onPageChange'})],(_ck,_v) => {
    var _co:any = _v.component;
    const currVal_0:any = _co.pageLinks;
    const currVal_1:any = 'ui-paginator-bottom';
    const currVal_2:any = _co.alwaysShowPaginator;
    const currVal_3:any = _co.totalRecords;
    const currVal_4:any = _co.first;
    const currVal_5:any = _co.rows;
    const currVal_6:any = _co.rowsPerPageOptions;
    _ck(_v,1,0,currVal_0,currVal_1,currVal_2,currVal_3,currVal_4,currVal_5,currVal_6);
  },(null as any));
}
function View_DataGrid_3(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[(_l()(),i0.ɵand(0,(null as any),(null as any),0))],(null as any),
      (null as any));
}
function View_DataGrid_4(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[(_l()(),i0.ɵeld(0,(null as any),(null as any),1,'div',[['class',
      'ui-widget-content ui-g-12']],(null as any),(null as any),(null as any),(null as any),
      (null as any))),(_l()(),i0.ɵted((null as any),['','']))],(null as any),(_ck,
      _v) => {
    var _co:any = _v.component;
    const currVal_0:any = _co.emptyMessage;
    _ck(_v,1,0,currVal_0);
  });
}
function View_DataGrid_5(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[(_l()(),i0.ɵeld(0,(null as any),(null as any),1,'p-paginator',
      [['styleClass','ui-paginator-bottom']],(null as any),[[(null as any),'onPageChange']],
      (_v,en,$event) => {
        var ad:boolean = true;
        var _co:any = _v.component;
        if (('onPageChange' === en)) {
          const pd_0:any = ((<any>_co.paginate($event)) !== false);
          ad = (pd_0 && ad);
        }
        return ad;
      },i7.View_Paginator_0,i7.RenderType_Paginator)),i0.ɵdid(49152,(null as any),
      0,i6.Paginator,([] as any[]),{pageLinkSize:[0,'pageLinkSize'],styleClass:[1,
          'styleClass'],alwaysShow:[2,'alwaysShow'],totalRecords:[3,'totalRecords'],
          first:[4,'first'],rows:[5,'rows'],rowsPerPageOptions:[6,'rowsPerPageOptions']},
      {onPageChange:'onPageChange'})],(_ck,_v) => {
    var _co:any = _v.component;
    const currVal_0:any = _co.pageLinks;
    const currVal_1:any = 'ui-paginator-bottom';
    const currVal_2:any = _co.alwaysShowPaginator;
    const currVal_3:any = _co.totalRecords;
    const currVal_4:any = _co.first;
    const currVal_5:any = _co.rows;
    const currVal_6:any = _co.rowsPerPageOptions;
    _ck(_v,1,0,currVal_0,currVal_1,currVal_2,currVal_3,currVal_4,currVal_5,currVal_6);
  },(null as any));
}
function View_DataGrid_6(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[(_l()(),i0.ɵeld(0,(null as any),(null as any),3,'div',[['class',
      'ui-datagrid-footer ui-widget-header ui-corner-top']],(null as any),(null as any),
      (null as any),(null as any),(null as any))),(_l()(),i0.ɵted((null as any),['\n                '])),
      i0.ɵncd((null as any),1),(_l()(),i0.ɵted((null as any),['\n            ']))],
      (null as any),(null as any));
}
export function View_DataGrid_0(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[(_l()(),i0.ɵted((null as any),['\n        '])),(_l()(),i0.ɵeld(0,
      (null as any),(null as any),27,'div',([] as any[]),(null as any),(null as any),
      (null as any),(null as any),(null as any))),i0.ɵdid(278528,(null as any),0,i2.NgClass,
      [i0.IterableDiffers,i0.KeyValueDiffers,i0.ElementRef,i0.Renderer],{klass:[0,
          'klass'],ngClass:[1,'ngClass']},(null as any)),i0.ɵdid(278528,(null as any),
      0,i2.NgStyle,[i0.KeyValueDiffers,i0.ElementRef,i0.Renderer],{ngStyle:[0,'ngStyle']},
      (null as any)),(_l()(),i0.ɵted((null as any),['\n            '])),(_l()(),i0.ɵand(16777216,
      (null as any),(null as any),1,(null as any),View_DataGrid_1)),i0.ɵdid(16384,
      (null as any),0,i2.NgIf,[i0.ViewContainerRef,i0.TemplateRef],{ngIf:[0,'ngIf']},
      (null as any)),(_l()(),i0.ɵted((null as any),['\n            '])),(_l()(),i0.ɵand(16777216,
      (null as any),(null as any),1,(null as any),View_DataGrid_2)),i0.ɵdid(16384,
      (null as any),0,i2.NgIf,[i0.ViewContainerRef,i0.TemplateRef],{ngIf:[0,'ngIf']},
      (null as any)),(_l()(),i0.ɵted((null as any),['\n            '])),(_l()(),i0.ɵeld(0,
      (null as any),(null as any),10,'div',[['class','ui-datagrid-content ui-widget-content']],
      (null as any),(null as any),(null as any),(null as any),(null as any))),(_l()(),
      i0.ɵted((null as any),['\n                '])),(_l()(),i0.ɵeld(0,(null as any),
      (null as any),7,'div',[['class','ui-g']],(null as any),(null as any),(null as any),
      (null as any),(null as any))),(_l()(),i0.ɵted((null as any),['\n                    '])),
      (_l()(),i0.ɵand(16777216,(null as any),(null as any),1,(null as any),View_DataGrid_3)),
      i0.ɵdid(802816,(null as any),0,i2.NgForOf,[i0.ViewContainerRef,i0.TemplateRef,
          i0.IterableDiffers],{ngForOf:[0,'ngForOf'],ngForTrackBy:[1,'ngForTrackBy'],
          ngForTemplate:[2,'ngForTemplate']},(null as any)),(_l()(),i0.ɵted((null as any),
          ['\n                    '])),(_l()(),i0.ɵand(16777216,(null as any),(null as any),
          1,(null as any),View_DataGrid_4)),i0.ɵdid(16384,(null as any),0,i2.NgIf,
          [i0.ViewContainerRef,i0.TemplateRef],{ngIf:[0,'ngIf']},(null as any)),(_l()(),
          i0.ɵted((null as any),['\n                '])),(_l()(),i0.ɵted((null as any),
          ['\n            '])),(_l()(),i0.ɵted((null as any),['\n            '])),
      (_l()(),i0.ɵand(16777216,(null as any),(null as any),1,(null as any),View_DataGrid_5)),
      i0.ɵdid(16384,(null as any),0,i2.NgIf,[i0.ViewContainerRef,i0.TemplateRef],{ngIf:[0,
          'ngIf']},(null as any)),(_l()(),i0.ɵted((null as any),['\n            '])),
      (_l()(),i0.ɵand(16777216,(null as any),(null as any),1,(null as any),View_DataGrid_6)),
      i0.ɵdid(16384,(null as any),0,i2.NgIf,[i0.ViewContainerRef,i0.TemplateRef],{ngIf:[0,
          'ngIf']},(null as any)),(_l()(),i0.ɵted((null as any),['\n        '])),(_l()(),
          i0.ɵted((null as any),['\n    ']))],(_ck,_v) => {
    var _co:i1.DataGrid = _v.component;
    const currVal_0:any = _co.styleClass;
    const currVal_1:any = 'ui-datagrid ui-widget';
    _ck(_v,2,0,currVal_0,currVal_1);
    const currVal_2:any = _co.style;
    _ck(_v,3,0,currVal_2);
    const currVal_3:any = _co.header;
    _ck(_v,6,0,currVal_3);
    const currVal_4:any = ((_co.paginator && (_co.paginatorPosition != 'bottom')) || (_co.paginatorPosition == 'both'));
    _ck(_v,9,0,currVal_4);
    const currVal_5:any = _co.dataToRender;
    const currVal_6:any = _co.trackBy;
    const currVal_7:any = _co.itemTemplate;
    _ck(_v,16,0,currVal_5,currVal_6,currVal_7);
    const currVal_8:any = _co.isEmpty();
    _ck(_v,19,0,currVal_8);
    const currVal_9:any = ((_co.paginator && (_co.paginatorPosition != 'top')) || (_co.paginatorPosition == 'both'));
    _ck(_v,24,0,currVal_9);
    const currVal_10:any = _co.footer;
    _ck(_v,27,0,currVal_10);
  },(null as any));
}
export function View_DataGrid_Host_0(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[(_l()(),i0.ɵeld(0,(null as any),(null as any),4,'p-dataGrid',([] as any[]),
      (null as any),(null as any),(null as any),View_DataGrid_0,RenderType_DataGrid)),
      i0.ɵdid(5554176,(null as any),3,i1.DataGrid,[i0.ElementRef,i0.IterableDiffers],
          (null as any),(null as any)),i0.ɵqud(335544320,1,{header:0}),i0.ɵqud(335544320,
          2,{footer:0}),i0.ɵqud(603979776,3,{templates:1})],(_ck,_v) => {
    _ck(_v,1,0);
  },(null as any));
}
export const DataGridNgFactory:i0.ComponentFactory<i1.DataGrid> = i0.ɵccf('p-dataGrid',
    i1.DataGrid,View_DataGrid_Host_0,{paginator:'paginator',rows:'rows',totalRecords:'totalRecords',
        pageLinks:'pageLinks',rowsPerPageOptions:'rowsPerPageOptions',lazy:'lazy',
        emptyMessage:'emptyMessage',style:'style',styleClass:'styleClass',paginatorPosition:'paginatorPosition',
        alwaysShowPaginator:'alwaysShowPaginator',trackBy:'trackBy',immutable:'immutable',
        value:'value'},{onLazyLoad:'onLazyLoad',onPage:'onPage'},['p-header','p-footer']);
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiL2hvbWUvZGV2ZWxvcG1lbnQvcHJpbWVmYWNlcy9wcmltZW5nL3NyYy9hcHAvY29tcG9uZW50cy9kYXRhZ3JpZC9kYXRhZ3JpZC5uZ2ZhY3RvcnkudHMiLCJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJuZzovLy9ob21lL2RldmVsb3BtZW50L3ByaW1lZmFjZXMvcHJpbWVuZy9zcmMvYXBwL2NvbXBvbmVudHMvZGF0YWdyaWQvZGF0YWdyaWQudHMiLCJuZzovLy9ob21lL2RldmVsb3BtZW50L3ByaW1lZmFjZXMvcHJpbWVuZy9zcmMvYXBwL2NvbXBvbmVudHMvZGF0YWdyaWQvZGF0YWdyaWQudHMuRGF0YUdyaWQuaHRtbCIsIm5nOi8vL2hvbWUvZGV2ZWxvcG1lbnQvcHJpbWVmYWNlcy9wcmltZW5nL3NyYy9hcHAvY29tcG9uZW50cy9kYXRhZ3JpZC9kYXRhZ3JpZC50cy5EYXRhR3JpZF9Ib3N0Lmh0bWwiXSwic291cmNlc0NvbnRlbnQiOlsiICIsIlxuICAgICAgICA8ZGl2IFtuZ0NsYXNzXT1cIid1aS1kYXRhZ3JpZCB1aS13aWRnZXQnXCIgW25nU3R5bGVdPVwic3R5bGVcIiBbY2xhc3NdPVwic3R5bGVDbGFzc1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInVpLWRhdGFncmlkLWhlYWRlciB1aS13aWRnZXQtaGVhZGVyIHVpLWNvcm5lci10b3BcIiAqbmdJZj1cImhlYWRlclwiPlxuICAgICAgICAgICAgICAgIDxuZy1jb250ZW50IHNlbGVjdD1cInAtaGVhZGVyXCI+PC9uZy1jb250ZW50PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8cC1wYWdpbmF0b3IgW3Jvd3NdPVwicm93c1wiIFtmaXJzdF09XCJmaXJzdFwiIFt0b3RhbFJlY29yZHNdPVwidG90YWxSZWNvcmRzXCIgW3BhZ2VMaW5rU2l6ZV09XCJwYWdlTGlua3NcIiBbYWx3YXlzU2hvd109XCJhbHdheXNTaG93UGFnaW5hdG9yXCJcbiAgICAgICAgICAgICAgICAob25QYWdlQ2hhbmdlKT1cInBhZ2luYXRlKCRldmVudClcIiBzdHlsZUNsYXNzPVwidWktcGFnaW5hdG9yLWJvdHRvbVwiIFtyb3dzUGVyUGFnZU9wdGlvbnNdPVwicm93c1BlclBhZ2VPcHRpb25zXCIgKm5nSWY9XCJwYWdpbmF0b3IgJiYgcGFnaW5hdG9yUG9zaXRpb24hPSdib3R0b20nIHx8IHBhZ2luYXRvclBvc2l0aW9uID09J2JvdGgnXCI+PC9wLXBhZ2luYXRvcj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ1aS1kYXRhZ3JpZC1jb250ZW50IHVpLXdpZGdldC1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInVpLWdcIj5cbiAgICAgICAgICAgICAgICAgICAgPG5nLXRlbXBsYXRlIG5nRm9yIFtuZ0Zvck9mXT1cImRhdGFUb1JlbmRlclwiIFtuZ0ZvclRlbXBsYXRlXT1cIml0ZW1UZW1wbGF0ZVwiIFtuZ0ZvclRyYWNrQnldPVwidHJhY2tCeVwiPjwvbmctdGVtcGxhdGU+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgKm5nSWY9XCJpc0VtcHR5KClcIiBjbGFzcz1cInVpLXdpZGdldC1jb250ZW50IHVpLWctMTJcIj57e2VtcHR5TWVzc2FnZX19PC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxwLXBhZ2luYXRvciBbcm93c109XCJyb3dzXCIgW2ZpcnN0XT1cImZpcnN0XCIgW3RvdGFsUmVjb3Jkc109XCJ0b3RhbFJlY29yZHNcIiBbcGFnZUxpbmtTaXplXT1cInBhZ2VMaW5rc1wiIFthbHdheXNTaG93XT1cImFsd2F5c1Nob3dQYWdpbmF0b3JcIlxuICAgICAgICAgICAgICAgIChvblBhZ2VDaGFuZ2UpPVwicGFnaW5hdGUoJGV2ZW50KVwiIHN0eWxlQ2xhc3M9XCJ1aS1wYWdpbmF0b3ItYm90dG9tXCIgW3Jvd3NQZXJQYWdlT3B0aW9uc109XCJyb3dzUGVyUGFnZU9wdGlvbnNcIiAqbmdJZj1cInBhZ2luYXRvciAmJiBwYWdpbmF0b3JQb3NpdGlvbiE9J3RvcCcgfHwgcGFnaW5hdG9yUG9zaXRpb24gPT0nYm90aCdcIj48L3AtcGFnaW5hdG9yPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInVpLWRhdGFncmlkLWZvb3RlciB1aS13aWRnZXQtaGVhZGVyIHVpLWNvcm5lci10b3BcIiAqbmdJZj1cImZvb3RlclwiPlxuICAgICAgICAgICAgICAgIDxuZy1jb250ZW50IHNlbGVjdD1cInAtZm9vdGVyXCI+PC9uZy1jb250ZW50PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICIsIjxwLWRhdGFHcmlkPjwvcC1kYXRhR3JpZD4iXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztvQkNFWTtNQUFBO01BQUEsNENBQThFO2FBQzFFLGtCQUEyQzs7OztvQkFFL0M7TUFBQTtNQUFBO1FBQUE7UUFBQTtRQUNJO1VBQUE7VUFBQTtRQUFBO1FBREo7TUFBQSx1REFBQTtNQUFBO1VBQUE7VUFBQTtNQUFBOztJQUF5RTtJQUNuQztJQUQ4RDtJQUF6RDtJQUFoQjtJQUFkO0lBQzBEO0lBRHZFLFdBQXlFLFVBQ25DLFVBRDhELFVBQXpELFVBQWhCLFVBQWQsVUFDMEQsU0FEdkU7Ozs7Ozs7O29CQUtRO01BQUE7TUFBQSxnQkFBeUQ7OztJQUFBO0lBQUE7Ozs7b0JBR2pFO01BQUE7TUFBQTtRQUFBO1FBQUE7UUFDSTtVQUFBO1VBQUE7UUFBQTtRQURKO01BQUEsdURBQUE7TUFBQTtVQUFBO1VBQUE7TUFBQTs7SUFBeUU7SUFDbkM7SUFEOEQ7SUFBekQ7SUFBaEI7SUFBZDtJQUMwRDtJQUR2RSxXQUF5RSxVQUNuQyxVQUQ4RCxVQUF6RCxVQUFoQixVQUFkLFVBQzBELFNBRHZFOzs7O29CQUVBO01BQUE7TUFBQSw0Q0FBOEU7YUFDMUUsa0JBQTJDOzs7O29CQWhCM0QsK0NBQ1E7TUFBQTtNQUFBLG1EQUFBO01BQUE7VUFBQSxzREFBQTtNQUFBO01BQUEsZUFBZ0YsbURBQzVFO01BQUEscUVBQUE7TUFBQTtNQUFBLGVBRU0sbURBQ047TUFBQSxxRUFBQTtNQUFBO01BQUEsZUFDOE0sbURBQzlNO01BQUE7TUFBQSx3RUFBbUQ7YUFBQSx3Q0FDL0M7TUFBQTtNQUFBLDhCQUFrQjtNQUNkO2FBQUE7NEJBQUE7VUFBQSxrREFBa0g7VUFBQSw2QkFDbEg7VUFBQSx5Q0FBQTtVQUFBLHNFQUErRTtpQkFBQSx3Q0FDN0U7VUFBQSxxQkFDSjtNQUNOO2FBQUE7VUFBQSx3QkFDMk07TUFDM007YUFBQTtVQUFBLHdCQUVNLCtDQUNKO2lCQUFBOztJQWpCcUQ7SUFBdEQ7SUFBTCxXQUEyRCxVQUF0RCxTQUFMO0lBQXlDO0lBQXpDLFdBQXlDLFNBQXpDO0lBQ21FO0lBQS9ELFdBQStELFNBQS9EO0lBSWlIO0lBRGpILFdBQ2lILFNBRGpIO0lBSTJCO0lBQXdEO0lBQS9CO0lBQTVDLFlBQW1CLFVBQXdELFVBQS9CLFNBQTVDO0lBQ0s7SUFBTCxZQUFLLFNBQUw7SUFJeUc7SUFEakgsWUFDaUgsU0FEakg7SUFFK0Q7SUFBL0QsWUFBK0QsVUFBL0Q7Ozs7b0JDZlo7TUFBQTthQUFBO1VBQUE7VUFBQTtJQUFBOzs7Ozs7OzsifQ==
