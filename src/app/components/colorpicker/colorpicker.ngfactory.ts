/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
 /* tslint:disable */


import * as i0 from '@angular/core';
import * as i1 from './colorpicker';
import * as i2 from '@angular/common';
import * as i3 from '@angular/forms';
import * as i4 from '../dom/domhandler';
export const ColorPickerModuleNgFactory:i0.NgModuleFactory<i1.ColorPickerModule> = i0.ɵcmf(i1.ColorPickerModule,
    ([] as any[]),(_l:any) => {
      return i0.ɵmod([i0.ɵmpd(512,i0.ComponentFactoryResolver,i0.ɵCodegenComponentFactoryResolver,
          [[8,([] as any[])],[3,i0.ComponentFactoryResolver],i0.NgModuleRef]),i0.ɵmpd(4608,
          i2.NgLocalization,i2.NgLocaleLocalization,[i0.LOCALE_ID]),i0.ɵmpd(512,i2.CommonModule,
          i2.CommonModule,([] as any[])),i0.ɵmpd(512,i1.ColorPickerModule,i1.ColorPickerModule,
          ([] as any[]))]);
    });
const styles_ColorPicker:any[] = ([] as any[]);
export const RenderType_ColorPicker:i0.RendererType2 = i0.ɵcrt({encapsulation:2,styles:styles_ColorPicker,
    data:{'animation':[{type:7,name:'panelState',definitions:[{type:0,name:'hidden',
        styles:{type:6,styles:{opacity:0},offset:(null as any)},options:(undefined as any)},
        {type:0,name:'visible',styles:{type:6,styles:{opacity:1},offset:(null as any)},
            options:(undefined as any)},{type:1,expr:'visible => hidden',animation:{type:4,
            styles:(null as any),timings:'400ms ease-in'},options:(null as any)},{type:1,
            expr:'hidden => visible',animation:{type:4,styles:(null as any),timings:'400ms ease-out'},
            options:(null as any)}],options:{}}]}});
function View_ColorPicker_1(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[(_l()(),i0.ɵeld(0,[[6,0],['input',1]],(null as any),2,'input',
      [['class','ui-colorpicker-preview ui-inputtext ui-state-default ui-corner-all'],
          ['readonly','readonly'],['type','text']],[[1,'id',0],[1,'tabindex',0],[8,
          'disabled',0],[4,'backgroundColor',(null as any)]],[[(null as any),'focus'],
          [(null as any),'click'],[(null as any),'keydown']],(_v,en,$event) => {
        var ad:boolean = true;
        var _co:any = _v.component;
        if (('focus' === en)) {
          const pd_0:any = ((<any>_co.onInputFocus()) !== false);
          ad = (pd_0 && ad);
        }
        if (('click' === en)) {
          const pd_1:any = ((<any>_co.onInputClick()) !== false);
          ad = (pd_1 && ad);
        }
        if (('keydown' === en)) {
          const pd_2:any = ((<any>_co.onInputKeydown($event)) !== false);
          ad = (pd_2 && ad);
        }
        return ad;
      },(null as any),(null as any))),i0.ɵdid(278528,(null as any),0,i2.NgClass,[i0.IterableDiffers,
      i0.KeyValueDiffers,i0.ElementRef,i0.Renderer],{klass:[0,'klass'],ngClass:[1,
      'ngClass']},(null as any)),i0.ɵpod({'ui-state-disabled':0})],(_ck,_v) => {
    var _co:any = _v.component;
    const currVal_4:any = 'ui-colorpicker-preview ui-inputtext ui-state-default ui-corner-all';
    const currVal_5:any = _ck(_v,2,0,_co.disabled);
    _ck(_v,1,0,currVal_4,currVal_5);
  },(_ck,_v) => {
    var _co:any = _v.component;
    const currVal_0:any = _co.inputId;
    const currVal_1:any = _co.tabindex;
    const currVal_2:any = _co.disabled;
    const currVal_3:any = _co.inputBgColor;
    _ck(_v,0,0,currVal_0,currVal_1,currVal_2,currVal_3);
  });
}
export function View_ColorPicker_0(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[i0.ɵqud(402653184,1,{panelViewChild:0}),i0.ɵqud(402653184,2,{colorSelectorViewChild:0}),
      i0.ɵqud(402653184,3,{colorHandleViewChild:0}),i0.ɵqud(402653184,4,{hueViewChild:0}),
      i0.ɵqud(402653184,5,{hueHandleViewChild:0}),i0.ɵqud(671088640,6,{inputViewChild:0}),
      (_l()(),i0.ɵted((null as any),['\n        '])),(_l()(),i0.ɵeld(0,(null as any),
          (null as any),28,'div',([] as any[]),(null as any),(null as any),(null as any),
          (null as any),(null as any))),i0.ɵdid(278528,(null as any),0,i2.NgClass,
          [i0.IterableDiffers,i0.KeyValueDiffers,i0.ElementRef,i0.Renderer],{klass:[0,
              'klass'],ngClass:[1,'ngClass']},(null as any)),i0.ɵpod({'ui-colorpicker ui-widget':0,
          'ui-colorpicker-overlay':1,'ui-colorpicker-dragging':2}),i0.ɵdid(278528,
          (null as any),0,i2.NgStyle,[i0.KeyValueDiffers,i0.ElementRef,i0.Renderer],
          {ngStyle:[0,'ngStyle']},(null as any)),(_l()(),i0.ɵted((null as any),['\n            '])),
      (_l()(),i0.ɵand(16777216,(null as any),(null as any),1,(null as any),View_ColorPicker_1)),
      i0.ɵdid(16384,(null as any),0,i2.NgIf,[i0.ViewContainerRef,i0.TemplateRef],{ngIf:[0,
          'ngIf']},(null as any)),(_l()(),i0.ɵted((null as any),['\n            '])),
      (_l()(),i0.ɵeld(0,[[1,0],['panel',1]],(null as any),19,'div',([] as any[]),[[24,
          '@panelState',0],[4,'display',(null as any)]],[[(null as any),'click']],
          (_v,en,$event) => {
            var ad:boolean = true;
            var _co:i1.ColorPicker = _v.component;
            if (('click' === en)) {
              const pd_0:any = ((<any>_co.onPanelClick()) !== false);
              ad = (pd_0 && ad);
            }
            return ad;
          },(null as any),(null as any))),i0.ɵdid(278528,(null as any),0,i2.NgClass,
          [i0.IterableDiffers,i0.KeyValueDiffers,i0.ElementRef,i0.Renderer],{ngClass:[0,
              'ngClass']},(null as any)),i0.ɵpod({'ui-colorpicker-panel ui-corner-all':0,
          'ui-colorpicker-overlay-panel ui-shadow':1,'ui-state-disabled':2}),(_l()(),
          i0.ɵted((null as any),['\n                '])),(_l()(),i0.ɵeld(0,(null as any),
          (null as any),14,'div',[['class','ui-colorpicker-content']],(null as any),
          (null as any),(null as any),(null as any),(null as any))),(_l()(),i0.ɵted((null as any),
          ['\n                    '])),(_l()(),i0.ɵeld(0,[[2,0],['colorSelector',1]],
          (null as any),6,'div',[['class','ui-colorpicker-color-selector']],(null as any),
          [[(null as any),'mousedown']],(_v,en,$event) => {
            var ad:boolean = true;
            var _co:i1.ColorPicker = _v.component;
            if (('mousedown' === en)) {
              const pd_0:any = ((<any>_co.onColorMousedown($event)) !== false);
              ad = (pd_0 && ad);
            }
            return ad;
          },(null as any),(null as any))),(_l()(),i0.ɵted((null as any),['\n                        '])),
      (_l()(),i0.ɵeld(0,(null as any),(null as any),3,'div',[['class','ui-colorpicker-color']],
          (null as any),(null as any),(null as any),(null as any),(null as any))),
      (_l()(),i0.ɵted((null as any),['\n                            '])),(_l()(),i0.ɵeld(0,
          [[3,0],['colorHandle',1]],(null as any),0,'div',[['class','ui-colorpicker-color-handle']],
          (null as any),(null as any),(null as any),(null as any),(null as any))),
      (_l()(),i0.ɵted((null as any),['\n                        '])),(_l()(),i0.ɵted((null as any),
          ['\n                    '])),(_l()(),i0.ɵted((null as any),['\n                    '])),
      (_l()(),i0.ɵeld(0,[[4,0],['hue',1]],(null as any),3,'div',[['class','ui-colorpicker-hue']],
          (null as any),[[(null as any),'mousedown']],(_v,en,$event) => {
            var ad:boolean = true;
            var _co:i1.ColorPicker = _v.component;
            if (('mousedown' === en)) {
              const pd_0:any = ((<any>_co.onHueMousedown($event)) !== false);
              ad = (pd_0 && ad);
            }
            return ad;
          },(null as any),(null as any))),(_l()(),i0.ɵted((null as any),['\n                        '])),
      (_l()(),i0.ɵeld(0,[[5,0],['hueHandle',1]],(null as any),0,'div',[['class','ui-colorpicker-hue-handle']],
          (null as any),(null as any),(null as any),(null as any),(null as any))),
      (_l()(),i0.ɵted((null as any),['\n                    '])),(_l()(),i0.ɵted((null as any),
          ['\n                '])),(_l()(),i0.ɵted((null as any),['\n            '])),
      (_l()(),i0.ɵted((null as any),['\n        '])),(_l()(),i0.ɵted((null as any),
          ['\n    ']))],(_ck,_v) => {
    var _co:i1.ColorPicker = _v.component;
    const currVal_0:any = _co.styleClass;
    const currVal_1:any = _ck(_v,9,0,true,!_co.inline,(_co.colorDragging || _co.hueDragging));
    _ck(_v,8,0,currVal_0,currVal_1);
    const currVal_2:any = _co.style;
    _ck(_v,10,0,currVal_2);
    const currVal_3:boolean = !_co.inline;
    _ck(_v,13,0,currVal_3);
    const currVal_6:any = _ck(_v,17,0,true,!_co.inline,_co.disabled);
    _ck(_v,16,0,currVal_6);
  },(_ck,_v) => {
    var _co:i1.ColorPicker = _v.component;
    const currVal_4:any = (_co.inline? 'visible': (_co.panelVisible? 'visible': 'hidden'));
    const currVal_5:any = (_co.inline? 'block': (_co.panelVisible? 'block': 'none'));
    _ck(_v,15,0,currVal_4,currVal_5);
  });
}
export function View_ColorPicker_Host_0(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[(_l()(),i0.ɵeld(0,(null as any),(null as any),3,'p-colorPicker',
      ([] as any[]),(null as any),(null as any),(null as any),View_ColorPicker_0,RenderType_ColorPicker)),
      i0.ɵprd(5120,(null as any),i3.NG_VALUE_ACCESSOR,(p0_0:any) => {
        return [p0_0];
      },[i1.ColorPicker]),i0.ɵprd(512,(null as any),i4.DomHandler,i4.DomHandler,([] as any[])),
      i0.ɵdid(8568832,(null as any),0,i1.ColorPicker,[i0.ElementRef,i4.DomHandler,
          i0.Renderer2,i0.ChangeDetectorRef],(null as any),(null as any))],(null as any),
      (null as any));
}
export const ColorPickerNgFactory:i0.ComponentFactory<i1.ColorPicker> = i0.ɵccf('p-colorPicker',
    i1.ColorPicker,View_ColorPicker_Host_0,{style:'style',styleClass:'styleClass',
        inline:'inline',format:'format',appendTo:'appendTo',disabled:'disabled',tabindex:'tabindex',
        inputId:'inputId'},{onChange:'onChange'},([] as any[]));
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiL2hvbWUvZGV2ZWxvcG1lbnQvcHJpbWVmYWNlcy9wcmltZW5nL3NyYy9hcHAvY29tcG9uZW50cy9jb2xvcnBpY2tlci9jb2xvcnBpY2tlci5uZ2ZhY3RvcnkudHMiLCJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJuZzovLy9ob21lL2RldmVsb3BtZW50L3ByaW1lZmFjZXMvcHJpbWVuZy9zcmMvYXBwL2NvbXBvbmVudHMvY29sb3JwaWNrZXIvY29sb3JwaWNrZXIudHMiLCJuZzovLy9ob21lL2RldmVsb3BtZW50L3ByaW1lZmFjZXMvcHJpbWVuZy9zcmMvYXBwL2NvbXBvbmVudHMvY29sb3JwaWNrZXIvY29sb3JwaWNrZXIudHMuQ29sb3JQaWNrZXIuaHRtbCIsIm5nOi8vL2hvbWUvZGV2ZWxvcG1lbnQvcHJpbWVmYWNlcy9wcmltZW5nL3NyYy9hcHAvY29tcG9uZW50cy9jb2xvcnBpY2tlci9jb2xvcnBpY2tlci50cy5Db2xvclBpY2tlcl9Ib3N0Lmh0bWwiXSwic291cmNlc0NvbnRlbnQiOlsiICIsIlxuICAgICAgICA8ZGl2IFtuZ1N0eWxlXT1cInN0eWxlXCIgW2NsYXNzXT1cInN0eWxlQ2xhc3NcIiBbbmdDbGFzc109XCJ7J3VpLWNvbG9ycGlja2VyIHVpLXdpZGdldCc6dHJ1ZSwndWktY29sb3JwaWNrZXItb3ZlcmxheSc6IWlubGluZSwndWktY29sb3JwaWNrZXItZHJhZ2dpbmcnOmNvbG9yRHJhZ2dpbmd8fGh1ZURyYWdnaW5nfVwiPlxuICAgICAgICAgICAgPGlucHV0ICNpbnB1dCB0eXBlPVwidGV4dFwiICpuZ0lmPVwiIWlubGluZVwiIGNsYXNzPVwidWktY29sb3JwaWNrZXItcHJldmlldyB1aS1pbnB1dHRleHQgdWktc3RhdGUtZGVmYXVsdCB1aS1jb3JuZXItYWxsXCIgcmVhZG9ubHk9XCJyZWFkb25seVwiIFtuZ0NsYXNzXT1cInsndWktc3RhdGUtZGlzYWJsZWQnOiBkaXNhYmxlZH1cIlxuICAgICAgICAgICAgICAgIChmb2N1cyk9XCJvbklucHV0Rm9jdXMoKVwiIChjbGljayk9XCJvbklucHV0Q2xpY2soKVwiIChrZXlkb3duKT1cIm9uSW5wdXRLZXlkb3duKCRldmVudClcIiBbYXR0ci5pZF09XCJpbnB1dElkXCIgW2F0dHIudGFiaW5kZXhdPVwidGFiaW5kZXhcIiBbZGlzYWJsZWRdPVwiZGlzYWJsZWRcIlxuICAgICAgICAgICAgICAgIFtzdHlsZS5iYWNrZ3JvdW5kQ29sb3JdPVwiaW5wdXRCZ0NvbG9yXCI+XG4gICAgICAgICAgICA8ZGl2ICNwYW5lbCBbbmdDbGFzc109XCJ7J3VpLWNvbG9ycGlja2VyLXBhbmVsIHVpLWNvcm5lci1hbGwnOiB0cnVlLCAndWktY29sb3JwaWNrZXItb3ZlcmxheS1wYW5lbCB1aS1zaGFkb3cnOiFpbmxpbmUsICd1aS1zdGF0ZS1kaXNhYmxlZCc6IGRpc2FibGVkfVwiIChjbGljayk9XCJvblBhbmVsQ2xpY2soKVwiXG4gICAgICAgICAgICAgICAgW0BwYW5lbFN0YXRlXT1cImlubGluZSA/ICd2aXNpYmxlJyA6IChwYW5lbFZpc2libGUgPyAndmlzaWJsZScgOiAnaGlkZGVuJylcIiBbc3R5bGUuZGlzcGxheV09XCJpbmxpbmUgPyAnYmxvY2snIDogKHBhbmVsVmlzaWJsZSA/ICdibG9jaycgOiAnbm9uZScpXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInVpLWNvbG9ycGlja2VyLWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiAjY29sb3JTZWxlY3RvciBjbGFzcz1cInVpLWNvbG9ycGlja2VyLWNvbG9yLXNlbGVjdG9yXCIgKG1vdXNlZG93bik9XCJvbkNvbG9yTW91c2Vkb3duKCRldmVudClcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ1aS1jb2xvcnBpY2tlci1jb2xvclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgI2NvbG9ySGFuZGxlIGNsYXNzPVwidWktY29sb3JwaWNrZXItY29sb3ItaGFuZGxlXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgI2h1ZSBjbGFzcz1cInVpLWNvbG9ycGlja2VyLWh1ZVwiIChtb3VzZWRvd24pPVwib25IdWVNb3VzZWRvd24oJGV2ZW50KVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiAjaHVlSGFuZGxlIGNsYXNzPVwidWktY29sb3JwaWNrZXItaHVlLWhhbmRsZVwiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAiLCI8cC1jb2xvclBpY2tlcj48L3AtY29sb3JQaWNrZXI+Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztvQkNFWTtNQUFBO1VBQUE7VUFBQTtVQUFBO1FBQUE7UUFBQTtRQUNJO1VBQUE7VUFBQTtRQUFBO1FBQXlCO1VBQUE7VUFBQTtRQUFBO1FBQXlCO1VBQUE7VUFBQTtRQUFBO1FBRHREO01BQUEsdUNBQUE7a0RBQUE7TUFBQSxrQ0FBeUk7O0lBQS9GO0lBQStGO0lBQXpJLFdBQTBDLFVBQStGLFNBQXpJOzs7SUFDeUY7SUFBb0I7SUFBMkI7SUFDcEk7SUFGSixXQUN5RixVQUFvQixVQUEyQixVQUNwSSxTQUZKOzs7Ozs7O01BRlosK0NBQ1E7VUFBQTtVQUFBLHFDQUFBO1VBQUE7Y0FBQSxzREFBNEM7VUFBQSxnRUFBNUM7VUFBQTtVQUFBLHVDQUFnTDtNQUM1SzthQUFBO1VBQUEsd0JBRTJDO01BQzNDO1VBQUE7VUFBQTtZQUFBO1lBQUE7WUFBc0o7Y0FBQTtjQUFBO1lBQUE7WUFBdEo7VUFBQSx1Q0FBQTtVQUFBO2NBQUEsa0NBQVk7VUFBQSxtRUFDMEk7aUJBQUEsd0NBQ2xKO1VBQUE7VUFBQSwwREFBb0M7VUFBQSw2QkFDaEM7VUFBQTtVQUFBO1lBQUE7WUFBQTtZQUEwRDtjQUFBO2NBQUE7WUFBQTtZQUExRDtVQUFBLGdDQUFpRztNQUM3RjtVQUFBO01BQWtDLG1FQUM5QjtVQUFBO1VBQUE7TUFBNEQsK0RBQzFEO1VBQUEsNkJBQ0o7TUFDTjtVQUFBO1lBQUE7WUFBQTtZQUFxQztjQUFBO2NBQUE7WUFBQTtZQUFyQztVQUFBLGdDQUEwRTtNQUN0RTtVQUFBO01BQXdELDJEQUN0RDtVQUFBLHlCQUNKO01BQ0osK0NBQ0o7VUFBQTs7SUFqQmlCO0lBQXFCO0lBQTVDLFdBQXVCLFVBQXFCLFNBQTVDO0lBQUs7SUFBTCxZQUFLLFNBQUw7SUFDOEI7SUFBMUIsWUFBMEIsU0FBMUI7SUFHWTtJQUFaLFlBQVksU0FBWjs7O0lBQ0k7SUFBMkU7SUFEL0UsWUFDSSxVQUEyRSxTQUQvRTs7OztvQkNMWjtNQUFBO2FBQUE7UUFBQTtNQUFBO2FBQUE7MkNBQUE7Ozs7OzsifQ==
